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
    {
        img: '/4.jpg',
        title: 'Breakfast',
    },
    {
        img: '/6.jpg',
        title: 'Burger',
    },
    {
        img: '/8.jpg',
        title: 'Camera',
    },
    {
        img: '/9.jpg',
        title: 'Coffee',
    },
];
