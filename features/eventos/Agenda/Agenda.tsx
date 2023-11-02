import styles from './Agenda.module.css'
import Image from 'next/image';

const Agenda: React.FC = () => {
    return (
        <div className={styles.contenedor}>
            <h1 className={styles.h1}>AGENDA</h1>
            <div className={styles.contenido}>
                <p className={styles.p}>
                    En Un Encanto Latinoamericano, celebramos con entusiasmo las innumerables realizaciones,
                    Agenda, ferias, premiaciones y más que dan vida a nuestra región. Para nuestros seguidores
                    exigentes e informados, ofrecemos una agenda nutritiva llena de sorpresas y descubrimientos.
                    Prepárate para un emocionante recorrido por los logros que hacen de Latinoamérica un encanto
                    inigualable.</p>
                {/* <Image src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/EventosAgenda.jpeg?alt=media&token=8c3d4f15-cc4d-4d23-b153-f2b6a92cf878&_gl=1*1hb4ekm*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5ODg5MDM0NS40LjAuMTY5ODg5MDM0NS42MC4wLjA.'} alt="Imagen" width={571} height={633} className={styles.image} /> */}
                <Image src={''} alt="Imagen" width={571} height={633} className={styles.image} />
            </div>
        </div>
    );
};

export default Agenda;