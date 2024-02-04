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
                    width={250}
                    height={342}
                    className={styles.image}
                />
            ))}
        </div>
    );
}

export default Gallery;


const itemData = [
    {
        id: 1,
        img: 'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Gallery%2F1.jpg?alt=media&token=b06f6760-0f79-4f72-8c6a-d2df5dd235bf',
        title: '1',
    },
    {
        id: 2,
        img: 'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Gallery%2F2.jpg?alt=media&token=1b59b1bb-9cf2-4a31-b689-d9f3c60a39f1',
        title: '2',
    },
    {
        id: 3,
        img: 'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Gallery%2F3.jpg?alt=media&token=5944e7b1-129b-4a60-8752-a071fc2b3d3d',
        title: 'Camera',
    },
    {
        id: 4,
        img: 'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Gallery%2F4.jpg?alt=media&token=551d3912-35a5-4bb1-a0a3-22e95176d1df',
        title: '4',
    },
    {
        id: 5,
        img: 'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Gallery%2F5.jpg?alt=media&token=d8482677-fb62-4b0d-a79b-2e220bd0f592',
        title: '5',
    },
    {
        id: 6,
        img: 'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Gallery%2F6.jpg?alt=media&token=c2038583-e502-44ec-81d2-cbd9bee52af6',
        title: '6',
    },
    {
        id: 7,
        img: 'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Gallery%2F7.jpg?alt=media&token=bdbac7a6-70bf-4b8d-af2b-73ccd41973f5',
        title: '7',
    },
    {
        id: 8,
        img: 'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Gallery%2F8.jpg?alt=media&token=87936dd0-2140-4356-855b-4404802e102d',
        title: '8',
    },
    {
        id: 9,
        img: 'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Gallery%2F9.jpg?alt=media&token=18f01588-14fb-4b8e-b878-0f4744b352f9',
        title: '9',
    },
    {
        id: 10,
        img: 'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Gallery%2F10.jpg?alt=media&token=ddd78169-f8a9-4bb4-bdeb-a8762dfcf269',
        title: '10',
    },
    {
        id: 11,
        img: 'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Gallery%2F11.jpg?alt=media&token=864cd9e4-6611-4f35-ad20-035085b20cc1',
        title: '11',
    },
    {
        id: 12,
        img: 'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Gallery%2F12.jpg?alt=media&token=b077501f-ccec-4cea-87e2-16e5959d0150',
        title: '12',
    },
    {
        id: 13,
        img: 'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Gallery%2F13.jpg?alt=media&token=57727741-f813-4f61-8ec2-6a5211035116',
        title: '13',
    },
    {
        id: 14,
        img: 'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Gallery%2F14.jpg?alt=media&token=6f2ee930-a14a-4431-85bb-196c99df69db',
        title: '14',
    },
    {
        id: 15,
        img: 'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Gallery%2F15.jpg?alt=media&token=0da78c0e-933f-4284-8dcb-1052a580c9bf',
        title: '15',
    },
    {
        id: 16,
        img: 'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Gallery%2F16.jpg?alt=media&token=2cadc64b-41ad-47de-abc7-6e9352b46500',
        title: '16',
    },

];
