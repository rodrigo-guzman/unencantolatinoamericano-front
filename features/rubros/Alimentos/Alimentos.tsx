import styles from './Alimentos.module.css'
import Image from 'next/image';

const Alimentos: React.FC = () => {
    return (
        <div className={styles.contenedor}>
            <h1 className={styles.h1}>Alimentos</h1>
            <div className={styles.contenido}>
                <p className={styles.p}>
                    Nos enorgullece presentarte una sección que te llevará al apasionante universo de los productos
                    alimenticios que te sumergirán en un mundo donde la calidad es la norma, la exquisitez es una
                    promesa y los sabores son una experiencia única. Prepárate para un viaje que estimulará tus
                    sentidos y elevará tus expectativas culinarias a nuevas alturas.</p>
                <Image src={'/Alimentos.jpeg'} alt="Imagen" width={879} height={242} className={styles.image} />
            </div>
        </div>
    );
};

export default Alimentos;