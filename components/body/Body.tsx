import YouTubeComponent from '../YouTube/YouTubeComponent';
import CardGrid from '../card/Cardgrid';
import ImageCarrousel from '../imageGallery/ImageCarrousel';
import ImageGallery from '../imageGallery/ImageGallery';
import ImageGalleryUp from '../imageGallery/ImageGalleryUp';
import styles from './Body.module.css'

const imagesCarouselPie = [
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
    // {
    //     img: '/masajes.jpg',
    //     title: 'Burger',
    // },
    {
        img: '/pincho.jpg',
        title: 'Camera',
    },
    {
        img: '/6.jpg',
        title: 'Coffee',
    },
];

const imagesCarouselHeader = [
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

const Body: React.FC = () => {
    return (
        <>
            <div className={styles.body}>
                <ImageCarrousel images={imagesCarouselHeader} />
                <CardGrid indexs={[0, 1, 2]} />
                <YouTubeComponent />
                <CardGrid indexs={[3, 4, 5]} />
                <ImageCarrousel images={imagesCarouselPie} />
            </div>
        </>
    );
};

export default Body;
