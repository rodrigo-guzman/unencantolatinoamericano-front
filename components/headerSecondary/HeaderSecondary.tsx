import styles from './HeaderSecondary.module.css';
import Navbar from '../navbar/Navbar';

interface IHeaderSecondary {
    descriptionTitle: string
}

const HeaderSecondary: React.FC<IHeaderSecondary> = ({ descriptionTitle }) => {
    return (
        <>
            <div className={styles.header}>
                <video autoPlay loop muted className={styles.video}>
                    <source src="/Portada.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                    <h3 className={styles.h3}>{descriptionTitle}</h3>
                </video>

                <div className={styles.navbar}>
                    <Navbar />
                </div>
                <div className={styles.content}>
                    <h3 className={styles.h3}>{descriptionTitle}</h3>
                </div>
            </div>
        </>
    );
};

export default HeaderSecondary;
