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
                        <img
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
        img: 'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/vinos-y-alimentos.jpeg?alt=media&token=7d4a5882-6b99-4f07-a0a8-3ff53a67448b&_gl=1*1o0a6ed*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5ODg4NDI3NC4zLjEuMTY5ODg4NDcyMS42MC4wLjA.',
        title: 'Breakfast',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/turismo.jpg?alt=media&token=771da26c-8192-439c-b49c-81eb758c5958&_gl=1*13hhgp3*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5ODg4NDI3NC4zLjEuMTY5ODg4NDg3MS42MC4wLjA.',
        title: 'Burger',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/oportunidades.jpeg?alt=media&token=d4e28faa-ab4a-4fac-a3ea-a190109611d2&_gl=1*ut9h05*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5ODg4NDI3NC4zLjEuMTY5ODg4NDg5Ni4zNS4wLjA.',
        title: 'Camera',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/vinos-y-alimentos.jpeg?alt=media&token=7d4a5882-6b99-4f07-a0a8-3ff53a67448b&_gl=1*1o0a6ed*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5ODg4NDI3NC4zLjEuMTY5ODg4NDcyMS42MC4wLjA.',
        title: 'Coffee',
    },
];
