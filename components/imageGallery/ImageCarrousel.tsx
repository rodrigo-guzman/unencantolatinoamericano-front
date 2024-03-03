import Image from 'next/image';
import styles from './ImageGallery.module.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    // dot: true,
    autoplay: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScrill: 1
};

const ImageCarrousel: React.FC<{ images: { img: string; title: string; }[] }> = ({ images }) => {
    return (
        <>
            <div className={styles.contenedor}>
                <div>
                    <Slider {...settings}>
                        {
                            images.map((image, index) => {
                                return (
                                    <div key={index} className={styles.carrousel}>
                                        <div>
                                            <Image
                                                src={image.img}
                                                alt={image.title}
                                                width={375}
                                                height={375}
                                            />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default ImageCarrousel;