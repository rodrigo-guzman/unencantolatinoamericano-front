import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import styles from './ImageGallery.module.css'

var counter = 0
export default function StandardImageList() {
    return (
        <div className={styles.ImageList}>
            <ImageList cols={4} rowHeight={164}>
                {itemData.map((item) => (
                    <ImageListItem key={counter = counter + 1}>
                        <Image
                            layout="responsive"
                            src={item.img}
                            alt={item.title}
                            width={275}
                            height={183}
                            loading="lazy" />
                    </ImageListItem>

                ))}
            </ImageList>
        </div>
    );
}

const itemData = [
    {
        img: '/vinos-y-alimentos.jpeg',
        title: 'Breakfast',
    },
    {
        img: '/turismo.jpg',
        title: 'Burger',
    },
    {
        img: '/oportunidades.jpeg',
        title: 'Camera',
    },
    {
        img: '/vinos-y-alimentos.jpeg',
        title: 'Coffee',
    },
];
