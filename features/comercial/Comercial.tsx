import React from 'react';
import styles from './Comercial.module.css';
import Image from 'next/image';
import imagenComercial from '../../assets/comercial.png';

const QuienesSomos: React.FC = () => {
    return (

        <div className={styles.contenedor}>
            <div className={styles.columnaTexto}>
                <h1 className={styles.h1Titulo}>Comercial</h1>
                <p>
                    En nuestra sección de Packs de Regalos, no solo creamos obsequios, creamos experiencias
                    inolvidables. Cada detalle es meticulosamente pensado y cada talento seleccionado con esmero,
                    para dar forma a maravillas que serán tuyas para regalar y compartir. Prepárate para descubrir un
                    mundo de regalos que deslumbran
                </p>
                {/* <Image src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Comercial.jpeg?alt=media&token=d52a64c4-8e24-42e7-9a4f-99fdb029a931&_gl=1*g1liws*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5ODg5Mjc3Ni41LjEuMTY5ODg5MzAwMS41Mi4wLjA.'} alt="Imagen" width={607} height={596} className={styles.image} /> */}
            </div>
            <div className={styles.columnaImagen}>
                <Image src={imagenComercial} alt="Comercial" />
            </div>
        </div>

    );
};

export default QuienesSomos;