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
                <Image src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Arte.jpeg?alt=media&token=dc7bc322-cbfc-4efb-adaa-984bf1c983af&_gl=1*xtrm6o*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5ODg5MDM0NS40LjEuMTY5ODg5MDYwOS42MC4wLjA.'} alt="Imagen" width={673} height={236} className={styles.image} /> 
                
            </div>
        </div>
    );
};

export default Arte;