import styles from './Turismo.module.css'
import Image from 'next/image';
import turismo from '../../../assets/turismoTematico.png'

const Turismo: React.FC = () => {
    return (
        <div className={styles.contenedor}>
            <h1 className={styles.h1}>Una gira encantadora</h1>
            <div className={styles.contenido}>
                <p className={styles.p}>
                    Bienvenidos a un rincón especial, donde el vino no es solo una bebida, sino un pasaporte a la
                    magia de los viñedos, las tradiciones y la cultura. En esta sección, te invitamos a explorar el
                    fascinante mundo del enoturismo y el turismo temático, donde los sentidos se despiertan y los
                    viajes se convierten en experiencias inolvidables.</p>
                {/* <Image src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/turismo.jpg?alt=media&token=771da26c-8192-439c-b49c-81eb758c5958&_gl=1*vtqnuz*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5ODg5MDM0NS40LjEuMTY5ODg5MDc1MS42MC4wLjA.'} alt="Imagen" className={styles.image} /> */}
                <Image src={''} alt="Imagen" className={styles.image} />
            </div>
        </div>
    );
};

export default Turismo;