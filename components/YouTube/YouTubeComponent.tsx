import React from 'react';
import styles from '../YouTube/YouTubeComponent.module.css'

const YourComponent: React.FC = () => {
    return (
        <div className={styles.containerYouTube}>
            <div className={styles.column1}>
                <h2>CON  HONOR  LATINO</h2>
                <p>En el corazón vibrante de América Latina, donde la cultura, el sabor y la pasión convergen,
                    nace Un Encanto Latinoamericano un emprendimiento apasionado dedicado a la comunicación, la difusión y la
                    comercialización de todo lo que hace que esta región sea única en el mundo</p>
            </div>
            <div className={styles.column2}>
                <iframe
                    id="ytplayer"
                    width="100%"
                    height="405"
                    src="https://www.youtube.com/embed/5J6_FqscBO8?si=XQaOilQrqQZ4moAp?controls=0&loop=1&modestbranding=1"
                >
                </iframe>
            </div>
        </div>
    );
};

export default YourComponent;
