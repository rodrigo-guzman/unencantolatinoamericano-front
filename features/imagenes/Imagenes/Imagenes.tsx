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
                <Image src={'/Imagenes.jpeg'} alt="Imagen" width={1024} height={680} className={styles.image} />
            </div>
        </div>
    );
};

export default Imagenes;