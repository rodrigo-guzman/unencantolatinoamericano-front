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
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/TU_VIDEO_ID_AQUI"
                    title="Video 1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
            </div>
        </div>
    );
};

export default YourComponent;
