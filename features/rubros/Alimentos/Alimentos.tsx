import styles from './Alimentos.module.css'
import Image from 'next/image';

const Alimentos: React.FC = () => {
    return (
        <div className={styles.contenedor}>
            <h1 className={styles.h1}>ALIMENTOS</h1>
            <div className={styles.contenido}>
                <p className={styles.p}>
                    Nos enorgullece presentarte una sección que te llevará al apasionante universo de los productos
                    alimenticios que te sumergirán en un mundo donde la calidad es la norma, la exquisitez es una
                    promesa y los sabores son una experiencia única. Prepárate para un viaje que estimulará tus
                    sentidos y elevará tus expectativas culinarias a nuevas alturas.</p>
                <Image src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Alimentos.jpeg?alt=media&token=03fcd023-f388-46fc-8d2a-f5be7f628ce6&_gl=1*19vjudc*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5ODg5MDM0NS40LjEuMTY5ODg5MDU4Ny4xOC4wLjA.'} alt="Imagen" width={879} height={242} className={styles.image} />

            </div>
        </div>
    );
};

export default Alimentos;