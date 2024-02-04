import styles from './Derivados.module.css'
import Image from 'next/image';

const Derivados: React.FC = () => {
    return (
        <div className={styles.contenedor}>
            <div className={styles.columnaTexto}>
                <h1 className={styles.h1}>DERIVADOS</h1>
                <p className={styles.p}>
                    Estamos emocionados de presentar una sección que te llevará a un viaje de rejuvenecimiento y
                    bienestar a través de los regalos de la naturaleza. En esta edición especial, exploraremos la
                    magia de la uva, el café y el cacao, y cómo sus derivados se han convertido en aliados de la
                    salud, la belleza y el bienestar. Únete a nosotros en este autodescubrimiento, donde el placer y la
                    salud se encuentran en una deliciosa sinfonía. ¡Salud y belleza, en cuerpo y alma!
                </p>
            </div>
            <div className={styles.columnaImagen}>
                <Image src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/derivados.jpeg?alt=media&token=45f534d8-cde8-41c0-9526-a3fce3b307c8&_gl=1*15idqoj*_ga*MTQ4ODY2MzM3NS4xNjk4Mjk3MzIx*_ga_CW55HF8NVT*MTY5ODg5MDM0NS40LjEuMTY5ODg5MDY1Ni4xMy4wLjA.'}
                    alt="Imagen" width={550} height={422} className={styles.image} />
            </div>
        </div>
    );
};

export default Derivados;
