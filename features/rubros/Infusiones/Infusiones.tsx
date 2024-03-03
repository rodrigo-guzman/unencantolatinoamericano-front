import styles from './Infusiones.module.css'
import Image from 'next/image';

const Infusiones: React.FC = () => {
    return (
        <div className={styles.contenido}>
            <h1 className={`${styles.h1} ${styles.centerText}`}>INFUSIONES</h1>
            <div className={`${styles.contenido} ${styles.centerText}`}>
                <p className={`${styles.p} ${styles.lineSpacing}`}>
                    Te invitamos a un viaje sensorial a través de las exquisitas artes de las infusiones, los tés y los
                    cafés. Esta sección te sumergirá en un universo donde los aromas danzan, los sabores encantan
                    y cada taza es una experiencia que despierta los sentidos. No son solo bebidas, son experiencias
                    que nos conectan con el mundo, con la historia y con nosotros mismos. Acompáñanos en este
                    viaje donde cada sorbo es un paso hacia el placer y el conocimiento. ¡Salud y
                    bienestar en cada taza!</p>
                <Image src={'/infusiones.jpeg'}
                    alt="Imagen" width={705} height={222} className={styles.image} />

            </div>
        </div>
    );
};

export default Infusiones;