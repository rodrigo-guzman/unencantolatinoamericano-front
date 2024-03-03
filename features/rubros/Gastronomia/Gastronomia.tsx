import styles from './Gastronomia.module.css'
import Image from 'next/image';

const Gastronomia: React.FC = () => {
    return (
        <div className={styles.contenido}>
            <h1 className={`${styles.h1} ${styles.centerText}`}>GASTRONOMÍA</h1>
            <div className={`${styles.contenido} ${styles.centerText}`}>
                <p className={`${styles.p} ${styles.lineSpacing}`}>
                    Bienvenidos a una experiencia única en donde los aromas, sabores y colores se unen en una
                    danza culinaria que te transportará a rincones inexplorados de Latinoamérica. En esta sección,
                    nos adentramos en el apasionante universo de la gastronomía, explorando las delicias que
                    deleitan paladares y enriquecen almas. Cada plato es una historia, cada sabor es una emoción y
                    cada experiencia es un viaje. Acompáñanos en esta travesía de deleite para tus sentidos y
                    descubre cómo la comida puede ser mucho más que una necesidad, es una forma de arte y
                    expresión. ¡Que cada bocado sea una celebración!</p>
                <Image
                    src={'/Gastronomia.jpeg'}
                    alt="Imagen"
                    width={811} // Ajusta el ancho de la imagen según tus preferencias
                    height={602} // Ajusta la altura de la imagen según tus preferencias
                    className={styles.image}
                />
            </div>
        </div>
    );
};

export default Gastronomia;