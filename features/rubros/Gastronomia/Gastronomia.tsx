import styles from './Gastronomia.module.css'
import Image from 'next/image';

const Gastronomia: React.FC = () => {
    return (
        <div className={styles.contenedor}>
            <div className={styles.columnaTexto}>
                <h1 className={styles.h1}>GASTRONOMÍA</h1>

                <p className={styles.p}>
                    Bienvenidos a una experiencia única en donde los aromas, sabores y colores se unen en una
                    danza culinaria que te transportará a rincones inexplorados de Latinoamérica. En esta sección,
                    nos adentramos en el apasionante universo de la gastronomía, explorando las delicias que
                    deleitan paladares y enriquecen almas. Cada plato es una historia, cada sabor es una emoción y
                    cada experiencia es un viaje. Acompáñanos en esta travesía de deleite para tus sentidos y
                    descubre cómo la comida puede ser mucho más que una necesidad, es una forma de arte y
                    expresión. ¡Que cada bocado sea una celebración!</p>
            </div>
            <div className={styles.columnaImagen}>
                <Image
                    src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Gastronomia%20.png?alt=media&token=9e95426d-64ab-490a-a91f-f562d1b5f60a&_gl=1*1kly9on*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5OTExMDUwMy44LjEuMTY5OTExMDU0Ny4xNi4wLjA.'}
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