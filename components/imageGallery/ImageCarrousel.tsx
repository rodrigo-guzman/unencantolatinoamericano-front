import React from 'react';
import Image from 'next/image';
import styles from './ImageGallery.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarrousel: React.FC<{ images: { img: string; title: string; }[] }> = ({ images }) => {
    const isMobile = typeof window !== 'undefined' && window.matchMedia("only screen and (max-width: 768px)").matches;
    const isTablet = typeof window !== 'undefined' && window.matchMedia("only screen and (min-width: 768px) and (max-width: 1024px)").matches;

    const settings = {
        autoplay: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    if (isMobile) {
        settings.slidesToShow = 1;
    } else if (isTablet) {
        settings.slidesToShow = 2;
    } else {
        settings.slidesToShow = 3;
    }

    return (
        <div className={styles.contenedor}>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className={styles.carrousel}>
                        <Image
                            src={image.img}
                            alt={image.title}
                            width={375}
                            height={375}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageCarrousel;
