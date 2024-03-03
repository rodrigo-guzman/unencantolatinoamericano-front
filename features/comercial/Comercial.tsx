import React from 'react';
import styles from './Comercial.module.css'; // Cambiar 'importar estilos' a 'import styles' para usar los estilos CSS
import Image from 'next/image'; // Asegúrate de importar la biblioteca o componente de imágenes que estás utilizando

const Comercial: React.FC = () => {
    return (
        <div className={styles.contenedor}>
            <div className={styles.columnaTexto}>
                <h1 className={styles.h1Titulo}>PACKS Y REGALOS EMPRESARIALES</h1>
                <p className={styles.p}>
                    En nuestra sección de Packs de Regalos, no solo creamos obsequios, creamos experiencias inolvidables. Cada detalle es meticulosamente pensado y cada talento seleccionado con esmero, para dar forma a maravillas que serán tuyas para regalar y compartir. Prepárate para descubrir un mundo de regalos que deslumbran.
                </p>
            </div>
            <div className={styles.columnaImagen}>
                <Image
                    src={'/Comercial.jpeg'}
                    alt="Imagen"
                    width={375}
                    height={375}
                    className={styles.image}
                />
            </div>

        </div>
    );
};

export default Comercial;