import styles from './Header.module.css';
import Navbar from '../navbar/Navbar';
import SocialMediaLinks from '../socialMediaLinks/SocialMediaLinks';
import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <>
            <div className={styles.header}>
                {/* <div className={styles.logo}></div> */}
                <div className={styles.navbar}>
                    <Navbar />

                </div>

                <div className={styles.content}>
                    {/* <div >
                        <Image
                            src={'logo.jpg'}
                            alt="Imagen"
                            width={375}
                            height={375}
                            className={styles.logo}
                        />
                    </div> */}
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
