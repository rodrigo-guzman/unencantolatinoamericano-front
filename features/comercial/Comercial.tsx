import React from 'react';
import styles from './Comercial.module.css';
import Image from 'next/image';
import imagenComercial from '../../assets/comercial.png';

const QuienesSomos: React.FC = () => {
    return (

        <div className={styles.contenedor}>
            <div className={styles.columnaImagen}>
                <Image src={imagenComercial} alt="Comercial" />
            </div>
            <div className={styles.columnaTexto}>
                <h1 className={styles.h1Titulo}>Comercial</h1>
                <p>
                    En nuestra sección de Packs de Regalos, no solo creamos obsequios, creamos experiencias
                    inolvidables. Cada detalle es meticulosamente pensado y cada talento seleccionado con esmero,
                    para dar forma a maravillas que serán tuyas para regalar y compartir. Prepárate para descubrir un
                    mundo de regalos que deslumbran
                </p>
            </div>
        </div>

    );
};

export default QuienesSomos;