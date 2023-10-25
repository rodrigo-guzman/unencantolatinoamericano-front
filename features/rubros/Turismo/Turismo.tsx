import styles from './Turismo.module.css'
import Image from 'next/image';

const Turismo: React.FC = () => {
    return (
        <div className={styles.contenedor}>
            <h1 className={styles.h1}>Turismo / Enoturismo y Turismo Temático</h1>
            <div className={styles.contenido}>
                <p className={styles.p}>
                    Bienvenidos a un rincón especial, donde el vino no es solo una bebida, sino un pasaporte a la
                    magia de los viñedos, las tradiciones y la cultura. En esta sección, te invitamos a explorar el
                    fascinante mundo del enoturismo y el turismo temático, donde los sentidos se despiertan y los
                    viajes se convierten en experiencias inolvidables.</p>
                <Image src={'/GiraEncantadora.jpeg'} alt="Imagen" width={649} height={800} className={styles.image} />
            </div>
        </div>
    );
};

export default Turismo;