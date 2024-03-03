import styles from './Turismo.module.css';
import Image from 'next/image';

const Derivados: React.FC = () => {
    return (
        <div className={styles.contenedor}>
            <div className={styles.columnaTexto}>
                <h1 className={styles.h1}>TURISMO, ENOTURISMO Y TURISMO TEMÁTICO</h1>
                <p className={styles.p}>
                    Bienvenidos a un rincón especial, donde el vino no es solo una bebida, sino un pasaporte a la
                    magia de los viñedos, las tradiciones y la cultura. En esta sección, te invitamos a explorar el
                    fascinante mundo del enoturismo y el turismo temático, donde los sentidos se despiertan y los
                    viajes se convierten en experiencias inolvidables
                </p>
            </div>
            <div className={styles.columnaImagen}>
                <Image
                    src={'/turismo.jpg'}
                    alt="Imagen"
                    width={489}
                    height={580}
                    className={styles.image}
                />
            </div>
        </div>
    );
};

export default Derivados;
