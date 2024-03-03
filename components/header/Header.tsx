import styles from './Header.module.css';
import Navbar from '../navbar/Navbar';
import SocialMediaLinks from '../socialMediaLinks/SocialMediaLinks';
import React from 'react';

const Header: React.FC = () => {
    return (
        <>
            <div className={styles.header}>
                <video autoPlay loop muted className={styles.video}>
                    <source src="/Portada.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className={styles.navbar}>
                    <Navbar />
                </div>

                <div className={styles.content}>
                    <h1 className={styles.h1}>Un Encanto Latinoamericano</h1>
                    <div className={styles.pSandrina}>
                        <p className={styles.p}>Sinfonia de placeres</p>
                    </div>
                    <SocialMediaLinks />
                </div>
            </div>
        </>
    );
};

export default Header;
