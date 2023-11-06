import styles from './Eventos.module.css'
import Image from 'next/image';

const Eventos: React.FC = () => {
    return (
        <div className={styles.contenedor}>
            <h1 className={styles.h1}>EVENTOS</h1>
            <div className={styles.contenido}>
            
                <p className={styles.p}>
                    Latinoamérica es un continente vivo y vibrante, donde la belleza natural, la gastronomía exquisita
                    y la diversidad cultural se entrelazan de manera fascinante. A través de una serie de exquisitos y
                    originales eventos, te llevaremos a recorrer esta región apasionante, donde la naturaleza, el sabor
                    y el arte convergen para ofrecerte experiencias inolvidables. Prepárate para un emocionante viaje
                    a través de los tesoros de Latinoamérica.</p>
                <Image src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/EventosAgenda.jpeg?alt=media&token=8c3d4f15-cc4d-4d23-b153-f2b6a92cf878&_gl=1*1hb4ekm*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5ODg5MDM0NS40LjAuMTY5ODg5MDM0NS42MC4wLjA.'} alt="Imagen" width={571} height={633} className={styles.image} /> 
                
            </div>
        </div>
    );
};

export default Eventos;