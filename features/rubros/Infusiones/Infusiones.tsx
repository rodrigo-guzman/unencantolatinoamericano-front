import styles from './Infusiones.module.css'
import Image from 'next/image';

const Infusiones: React.FC = () => {
    return (
        <div className={styles.contenedor}>
            <h1 className={styles.h1}>Infusiones</h1>
            <div className={styles.contenido}>
                <p className={styles.p}>
                    Te invitamos a un viaje sensorial a través de las exquisitas artes de las infusiones, los tés y los
                    cafés. Esta sección te sumergirá en un universo donde los aromas danzan, los sabores encantan
                    y cada taza es una experiencia que despierta los sentidos. No son solo bebidas, son experiencias
                    que nos conectan con el mundo, con la historia y con nosotros mismos. Acompáñanos en este
                    viaje donde cada sorbo es un paso hacia el placer y el conocimiento. ¡Salud y
                    bienestar en cada taza!</p>
                <Image src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/infusiones.jpeg?alt=media&token=0394abd5-f01f-4c9b-907b-a86fa25da369&_gl=1*1c0qxic*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5ODg5MDM0NS40LjEuMTY5ODg5MDcwOS40MC4wLjA.'} alt="Imagen" width={705} height={222} className={styles.image} /> 
                
            </div>
        </div>
    );
};

export default Infusiones;