import styles from './Eventos.module.css'
import Image from 'next/image';

const Eventos: React.FC = () => {
    return (
        <div className={styles.contenedor}>

            <div className={styles.columnaTexto}>
                <h1 className={styles.h1}>EVENTOS</h1>

                <p className={styles.p}>
                    Latinoamérica es un continente vivo y vibrante, donde la belleza natural, la gastronomía exquisita
                    y la diversidad cultural se entrelazan de manera fascinante. A través de una serie de exquisitos y
                    originales eventos, te llevaremos a recorrer esta región apasionante, donde la naturaleza, el sabor
                    y el arte convergen para ofrecerte experiencias inolvidables. Prepárate para un emocionante viaje
                    a través de los tesoros de Latinoamérica.</p>


            </div>
            <div className={styles.columnaImagen}>
                <Image src={'/EventosAgenda.jpeg'}
                    alt="Imagen"
                    width={471}
                    height={533}
                    className={styles.image} />
            </div>
        </div>
    );
};

export default Eventos;