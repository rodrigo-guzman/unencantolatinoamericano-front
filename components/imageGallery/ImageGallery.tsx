import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styles from './ImageGallery.module.css'

var counter = 0
export default function StandardImageList() {
    return (
        <div className={styles.ImageList}>
            <ImageList cols={4} rowHeight={500}>
                {itemData.map((item) => (
                    <ImageListItem key={counter = counter + 1}>
                        <img
                            src={item.img}
                            alt={item.title}
                            width={100}
                            height={500}
                            loading="lazy" />
                    </ImageListItem>

                ))}
            </ImageList>
        </div>
    );
}

const itemData = [
    // {
    //     img: '/1.jpg',
    //     title: 'Breakfast',
    // },
    // {
    //     img: '/5.jpg',
    //     title: 'Burger',
    // },
    // {
    //     img: '/3.jpg',
    //     title: 'Camera',
    // },
    // {
    //     img: '/7.jpg',
    //     title: 'Coffee',
    // },
    {
        img: '/bodega.jpg',
        title: 'Breakfast',
    },
    {
        img: '/bodega2.jpg',
        title: 'Burger',
    },
    {
        img: '/drink.jpg',
        title: 'Camera',
    },
    {
        img: '/guitarra.jpg',
        title: 'Coffee',
    },
    {
        img: '/living.jpg',
        title: 'Breakfast',
    },
    {
        img: '/masajes.jpg',
        title: 'Burger',
    },
    {
        img: '/pincho.jpg',
        title: 'Camera',
    },
    {
        img: '/6.jpg',
        title: 'Coffee',
    },
];
