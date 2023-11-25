import React from 'react';
import styles from './Comercial.module.css';
import Image from 'next/image';
import imagenComercial from '../../assets/comercial.png';

const Comercial: React.FC = () => {
    return (

        <div className={styles.contenedor}>
            <h1 className={styles.h1}>COMERCIAL</h1>
            <div className={styles.contenido}>
                <p className={styles.p}>
                    En nuestra sección de Packs de Regalos, no solo creamos obsequios, creamos experiencias
                    inolvidables. Cada detalle es meticulosamente pensado y cada talento seleccionado con esmero,
                    para dar forma a maravillas que serán tuyas para regalar y compartir. Prepárate para descubrir un
                    mundo de regalos que deslumbran
                </p>
                {/* <Image src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/EventosAgenda.jpeg?alt=media&token=8c3d4f15-cc4d-4d23-b153-f2b6a92cf878&_gl=1*1hb4ekm*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5ODg5MDM0NS40LjAuMTY5ODg5MDM0NS42MC4wLjA.'} alt="Imagen" width={571} height={633} className={styles.image} /> */}
                <Image src={''} alt="Imagen" width={607} height={596} className={styles.image} />
            </div>
        </div>
    );
};

export default Comercial;