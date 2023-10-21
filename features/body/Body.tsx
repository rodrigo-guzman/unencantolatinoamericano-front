import YourComponent from '../YouTube/YouTubeComponent';
import CardGrid from '../card/Cardgrid';
import ImageGallery from '../imageGallery/ImageGallery';
import styles from './Body.module.css'

const Body: React.FC = () => {
    return (
        <>
            <div className={styles.body}>
                <CardGrid />
                <YourComponent />
                <CardGrid />
                <ImageGallery />
            </div>
        </>
    );
};

export default Body;
