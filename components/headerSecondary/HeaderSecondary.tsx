import styles from './HeaderSecondary.module.css';
import Navbar from '../navbar/Navbar';
import SocialMediaLinks from '../socialMediaLinks/SocialMediaLinks';

interface IHeaderSecondary {
    descriptionTitle: string
}

const HeaderSecondary: React.FC<IHeaderSecondary> = ({ descriptionTitle }) => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.navbar}>
                    <div className={styles.logo}></div>
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
