import styles from './gallery.module.css';
import Image from 'next/image';

const Gallery = () => {
    return (
        <div className={styles.imageContainer}>
            {itemData.map((image) => (
                <Image
                    key={image.id}
                    src={image.img}
                    alt={image.title}
                    className={styles.image}
                    width={20}
                    height={300}
                />
            ))}
        </div>
    );
}

export default Gallery;


const itemData = [
    {
        id: 1,
        img: '/1.jpg',
        title: '1',
    },
    {
        id: 2,
        img: '/2.jpg',
        title: '2',
    },
    {
        id: 3,
        img: '/3.jpg',
        title: 'Camera',
    },
    {
        id: 4,
        img: '/4.jpg',
        title: '4',
    },
    {
        id: 5,
        img: '/5.jpg',
        title: '5',
    },
    {
        id: 6,
        img: '/6.jpg',
        title: '6',
    },
    {
        id: 7,
        img: '/7.jpg',
        title: '7',
    },
    {
        id: 8,
        img: '/8.jpg',
        title: '8',
    },
    {
        id: 9,
        img: '/9.jpg',
        title: '9',
    },
    {
        id: 10,
        img: '/10.jpg',
        title: '10',
    },
    {
        id: 11,
        img: '/11.jpg',
        title: '11',
    },
    {
        id: 12,
        img: '/12.jpg',
        title: '12',
    },
    {
        id: 13,
        img: '/13.jpg',
        title: '13',
    },
    {
        id: 14,
        img: '/14.jpg',
        title: '14',
    },
    {
        id: 15,
        img: '/15.jpg',
        title: '15',
    },
    {
        id: 16,
        img: '/16.jpg',
        title: '16',
    },

];
