import styles from './Arte.module.css'
import Image from 'next/image';

const Arte: React.FC = () => {
    return (
        <div className={styles.contenedor}>
            <h1 className={styles.h1}>Arte</h1>
            <div className={styles.contenido}>
                <p className={styles.p}>
                    Nos complace presentarte una sección que es un tributo a la esencia misma de la vida: la cultura,
                    el arte y la música. Aquí, te llevamos a un viaje donde los colores, las notas y las expresiones se
                    convierten en un caleidoscopio de emociones y creatividad. Prepárate para sumergirte en un
                    mundo de inspiración sin límites.</p>
                <Image src={'/Arte.jpeg'} alt="Imagen" width={673} height={236} className={styles.image} />
            </div>
        </div>
    );
};

export default Arte;