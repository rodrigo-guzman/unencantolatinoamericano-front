import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import styles from './ImageGallery.module.css'

export default function StandardImageList() {
    return (
        <div className={styles.ImageList}>
            <ImageList sx={{ width: 1000, height: 450 }} cols={4} rowHeight={164}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
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
        img: '/oportunidades.jpeg',
        title: 'Coffee',
    },
    {
        img: '/turismo.jpg',
        title: 'Hats',
    },
    {
        img: '/vinos-y-alimentos.jpeg',
        title: 'Honey',
    },
    {
        img: '/turismo.jpg',
        title: 'Basketball',
    },
    {
        img: '/oportunidades.jpeg',
        title: 'Fern',
    },
    {
        img: '/vinos-y-alimentos.jpeg',
        title: 'Mushrooms',
    },
    {
        img: '/vinos-y-alimentos.jpeg',
        title: 'Tomato basil',
    },
    {
        img: '/turismo.jpg',
        title: 'Sea star',
    },
    {
        img: '/oportunidades.jpeg',
        title: 'Bike',
    },
];
