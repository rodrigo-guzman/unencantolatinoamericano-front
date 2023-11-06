import styles from './Proyecto.module.css';
import Image from 'next/image';

const Proyecto: React.FC = () => {
    return (
        <div className={styles.contenedor}>
            <div className={styles.contenido}>
                <h1 className={styles.h1}>CONCEPTO</h1>

                <div className={styles.parrafoContainer}>
                    <p className={styles.p1}>
                        En el corazón vibrante de América Latina, donde la cultura, el sabor y la pasión convergen,
                        nace Un Encanto Latinoamericano un emprendimiento apasionado dedicado a la comunicación, la difusión y la
                        comercialización de todo lo que hace que esta región sea única en el mundo.
                    </p>
                </div>

                <div className={styles.parrafoContainer}>
                    <p className={styles.p2}>
                        Contamos con una vasta red de colaboradores, creadores y expertos en toda la región. Esto nos permite
                        acceder a historias únicas y productos excepcionales que compartimos con el mundo a través de viajes
                        deslumbrantes a los parajes más encantadores de cada rincón de Latinoamérica.
                    </p>
                </div>

                <div className={styles.parrafoContainer}>
                    <p className={styles.p3}>
                        Creamos conexiones auténticas que permiten a nuestro público experimentar el latido de América Latina
                        de una manera única, no solo promovemos la belleza sino que también la celebramos. Si buscas una forma
                        auténtica y apasionada de conectarte con esta región rica en cultura y diversidad, has llegado al lugar
                        adecuado.
                    </p>
                </div>
            </div>

            <div className={styles.imageContainer}>
                <Image
                    src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Regiones.jpeg?alt=media&token=c485f45f-6291-4977-8a5c-aa222c6958c0&_gl=1*c1gn17*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5ODg5Mjc3Ni41LjEuMTY5ODg5Mjc5MS40NS4wLjA.'}
                    alt="Imagen"
                    width={723}
                    height={623}
                    className={styles.image}
                />
            </div>
        </div>
    );
};

export default Proyecto;
