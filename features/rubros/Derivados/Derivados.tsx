import styles from './Derivados.module.css'
import Image from 'next/image';

const Derivados: React.FC = () => {
    return (
        <div className={styles.contenedor}>
            <h1 className={styles.h1}>Derivados</h1>
            <div className={styles.contenido}>
                <p className={styles.p}>
                    Estamos emocionados de presentar una sección que te llevará a un viaje de rejuvenecimiento y
                    bienestar a través de los regalos de la naturaleza. En esta edición especial, exploraremos la
                    magia de la uva, el café y el cacao, y cómo sus derivados se han convertido en aliados de la
                    salud, la belleza y el bienestar. Únete a nosotros en este autodescubrimiento, donde el placer y la
                    salud se encuentran en una deliciosa sinfonía. ¡Salud y belleza, en cuerpo y alma!</p>
                <Image src={'/Derivados.jpeg'} alt="Imagen" width={550} height={422} className={styles.image} />
            </div>
        </div>
    );
};

export default Derivados;