import React from 'react';
import styles from './Comercial.module.css'; // Cambiar 'importar estilos' a 'import styles' para usar los estilos CSS
import Image from 'next/image'; // Asegúrate de importar la biblioteca o componente de imágenes que estás utilizando

const Comercial: React.FC = () => {
    return (
        <div className={styles.contenedor}>
            <div className={styles.columnaTexto}>
                <h1 className={styles.h1Titulo}>Comercial</h1>
                <p>
                    En nuestra sección de Packs de Regalos, no solo creamos obsequios, creamos experiencias inolvidables. Cada detalle es meticulosamente pensado y cada talento seleccionado con esmero, para dar forma a maravillas que serán tuyas para regalar y compartir. Prepárate para descubrir un mundo de regalos que deslumbran
                </p>
            </div>
            <div className={styles.columnaImagen}>
                <Image
                    src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Comercial.jpeg?alt=media&token=d52a64c4-8e24-42e7-9a4f-99fdb029a931&_gl=1*vig0li*_ga*NDg1MDQyNDAwLjE2OTkwMjMzNjM.*_ga_CW55HF8NVT*MTY5OTAyMzM2NC4xLjEuMTY5OTAyMzUxOS41MS4wLjA.'}
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
