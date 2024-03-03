import styles from './NuevosEmprendimientos.module.css'
import Image from 'next/image';

const NuevosEmprendimientos: React.FC = () => {
    return (
        <div className={styles.contenido}>
            <h1 className={`${styles.h1} ${styles.centerText}`}>NUEVOS EMPRENDIMIENTOS</h1>
            <div className={`${styles.contenido} ${styles.centerText}`}>
                <p className={`${styles.p} ${styles.lineSpacing}`}>
                    Nos enorgullece presentarte una sección que está destinada a inspirar y sorprender. Aquí, te
                    sumergirás en un emocionante universo de emprendimientos pioneros que fusionan la tradición
                    con la innovación en vitivinicultura, enoturismo, gastronomía, alimentos, infusiones y arte.
                    Prepárate para descubrir visionarios que están transformando el mundo del sabor y el arte.</p>
                <Image
                    src={'/NuevosEmprendimientos.jpeg'}
                    alt="Imagen"
                    width={1038}
                    height={500}
                    className={styles.image} />

            </div>
        </div>
    );
};

export default NuevosEmprendimientos;