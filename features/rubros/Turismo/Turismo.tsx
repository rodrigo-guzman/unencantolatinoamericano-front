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
                    src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/turismo%20tematico.png?alt=media&token=d2e3c465-645e-4eaa-90a9-9aed12e18b91&_gl=1*1vyciru*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5OTExMDUwMy44LjEuMTY5OTExMDcxOC40MC4wLjA.'}
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
