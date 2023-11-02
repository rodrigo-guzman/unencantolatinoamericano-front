import styles from './Imagenes.module.css'
import Image from 'next/image';

const Imagenes: React.FC = () => {
    return (
        <div className={styles.contenedor}>
            <h1 className={styles.h1}>IMÁGENES</h1>
            <div className={styles.contenido}>
                <p className={styles.p}>
                    Prepárate para un viaje visual como ningún otro. En nuestra sección dedicada a las bellezas
                    latinoamericanas, te llevamos a través de un deslumbrante despliegue de imágenes y videos que
                    capturan la esencia única y cautivadora de esta región. Cada imagen es una ventana a un mundo
                    de maravillas que te dejará sin aliento.</p>
                {/* <Image src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Imagenes.jpeg?alt=media&token=79208106-4a45-441a-8870-fc4a56cdd2d6&_gl=1*joot36*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5ODg5MDM0NS40LjEuMTY5ODg5MDM4MC4yNS4wLjA.'} alt="Imagen" width={1024} height={680} className={styles.image} /> */}
                <Image src={''} alt="Imagen" width={1024} height={680} className={styles.image} />
            </div>
        </div>
    );
};

export default Imagenes;