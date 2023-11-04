import styles from './Turismo.module.css';
import Image from 'next/image';

const Derivados: React.FC = () => {
    return (
        <div className={styles.contenedor}>
            <div className={styles.columnaTexto}>
                <h1 className={styles.h1}>TURISMO / ENOTURISMO Y TURISMO TEMÁTICO</h1>
                <p className={styles.p}>
                Bienvenidos a un rincón especial, donde el vino no es solo una bebida, sino un pasaporte a la
magia de los viñedos, las tradiciones y la cultura. En esta sección, te invitamos a explorar el
fascinante mundo del enoturismo y el turismo temático, donde los sentidos se despiertan y los
viajes se convierten en experiencias inolvidables
                </p>
            </div>
            <div className={styles.columnaImagen}>
                <Image
                    src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/derivados.jpeg?alt=media&token=45f534d8-cde8-41c0-9526-a3fce3b307c8&_gl=1*15idqoj*_ga*MTQ4ODY2MzM3NS4xNjk4Mjk3MzIx*_ga_CW55HF8NVT*MTY5ODg5MDM0NS40LjEuMTY5ODg5MDY1Ni4xMy4wLjA.'}
                    alt="Imagen"
                    width={550}
                    height={422}
                    className={styles.image}
                />
            </div>
        </div>
    );
};

export default Derivados;
