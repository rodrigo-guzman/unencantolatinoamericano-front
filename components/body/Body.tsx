import YourComponent from '../YouTube/YouTubeComponent';
import CardGrid from '../card/Cardgrid';
import ImageGallery from '../imageGallery/ImageGallery';
import styles from './Body.module.css'

const Body: React.FC = () => {
    return (
        <>
            <div className={styles.body}>
                <CardGrid indexs={[0, 1, 2]} />
                <YourComponent />
                <CardGrid indexs={[3, 4, 5]} />
                <ImageGallery />
            </div>
        </>
    );
};

export default Body;
