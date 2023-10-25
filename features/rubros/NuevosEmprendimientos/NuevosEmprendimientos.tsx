import styles from './NuevosEmprendimientos.module.css'
import Image from 'next/image';

const NuevosEmprendimientos: React.FC = () => {
    return (
        <div className={styles.contenedor}>
            <h1 className={styles.h1}>Nuevos Emprendimientos</h1>
            <div className={styles.contenido}>
                <p className={styles.p}>
                    Nos enorgullece presentarte una sección que está destinada a inspirar y sorprender. Aquí, te
                    sumergirás en un emocionante universo de emprendimientos pioneros que fusionan la tradición
                    con la innovación en vitivinicultura, enoturismo, gastronomía, alimentos, infusiones y arte.
                    Prepárate para descubrir visionarios que están transformando el mundo del sabor y el arte.</p>
                <Image src={'/NuevosEmprendimientos.jpeg'} alt="Imagen" width={1111} height={551} className={styles.image} />
            </div>
        </div>
    );
};

export default NuevosEmprendimientos;