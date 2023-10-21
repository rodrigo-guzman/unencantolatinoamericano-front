import styles from './Header.module.css'
import Navbar from '../navbar/Navbar'
import SocialMediaLinks from '../socialMediaLinks/SocialMediaLinks';

const Header: React.FC = () => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.navbar}>
                    <div className={styles.logo}></div>
                    <Navbar />
                </div>
                <div className={styles.content}>
                    <h1>Un Encanto Latinoamericano</h1>
                    <p className={styles.p}>Descripción de la cabecera</p>
                    <SocialMediaLinks />
                </div>

            </div>
        </>
    )
}

export default Header;