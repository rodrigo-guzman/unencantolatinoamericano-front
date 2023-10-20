import React from 'react';
import styles from '../YouTube/YouTubeComponent.module.css'

const YourComponent: React.FC = () => {
    return (
        <div className={styles.containerYouTube}>
            <div className={styles.column1}>
                <h2>Presentación</h2>
                <p>Agregar video a su sitio web puede mejorar significativamente el compromiso, aumentar las conversiones y dejar una impresión duradera en su audiencia.</p>
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
