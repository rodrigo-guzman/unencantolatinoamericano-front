import styles from './Gastronomia.module.css'
import Image from 'next/image';
import gastronomia from '../../../assets/Gastronomia .png'
const Gastronomia: React.FC = () => {
    return (
        <div className={styles.contenedor}>
            <h1 className={styles.h1}>Gastronomía</h1>
            <div className={styles.contenido}>
                <p className={styles.p}>
                    Bienvenidos a una experiencia única en donde los aromas, sabores y colores se unen en una
                    danza culinaria que te transportará a rincones inexplorados de Latinoamérica. En esta sección,
                    nos adentramos en el apasionante universo de la gastronomía, explorando las delicias que
                    deleitan paladares y enriquecen almas. Cada plato es una historia, cada sabor es una emoción y
                    cada experiencia es un viaje. Acompáñanos en esta travesía de deleite para tus sentidos y
                    descubre cómo la comida puede ser mucho más que una necesidad, es una forma de arte y
                    expresión. ¡Que cada bocado sea una celebración!</p>
                {/* <Image src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Gastronomia.jpeg?alt=media&token=b5d37a05-2ce9-4787-a2e0-256e469ec355&_gl=1*17z1ohe*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5ODg5MDM0NS40LjEuMTY5ODg5MDY4OS42MC4wLjA.'} alt="Imagen" className={styles.image} /> */}
                <Image src={''} alt="Imagen" className={styles.image} />

            </div>
        </div>
    );
};

export default Gastronomia;