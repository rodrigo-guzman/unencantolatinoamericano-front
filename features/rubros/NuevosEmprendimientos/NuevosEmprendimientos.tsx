import styles from './NuevosEmprendimientos.module.css'
import Image from 'next/image';

const NuevosEmprendimientos: React.FC = () => {
    return (
        <div className={styles.contenedor}>
            <h1 className={styles.h1}>Nuevos Emprendimientos</h1>
            <div className={styles.contenido}>
                <p className={styles.p}>
                    Nos enorgullece presentarte una sección que está destinada a inspirar y sorprender. Aquí, te
                    sumergirás en un emocionante universo de emprendimientos pioneros que fusionan la tradición
                    con la innovación en vitivinicultura, enoturismo, gastronomía, alimentos, infusiones y arte.
                    Prepárate para descubrir visionarios que están transformando el mundo del sabor y el arte.</p>
                {/* <Image src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/NuevosEmprendimientos.jpeg?alt=media&token=1ca02a49-c485-4550-8c2d-829faf25483a&_gl=1*99r2xz*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5ODg5MDM0NS40LjEuMTY5ODg5MDczMS4xOC4wLjA.'} alt="Imagen" width={1111} height={551} className={styles.image} /> */}
                <Image src={''} alt="Imagen" width={1111} height={551} className={styles.image} />
            </div>
        </div>
    );
};

export default NuevosEmprendimientos;