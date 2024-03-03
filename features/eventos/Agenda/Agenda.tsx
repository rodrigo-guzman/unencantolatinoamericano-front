import styles from './Agenda.module.css'
import Image from 'next/image';

const Agenda: React.FC = () => {
    return (
        <div className={styles.contenedor}>

            <div className={styles.columnaTexto}>
                <h1 className={styles.h1}>AGENDA</h1>

                <p className={styles.p}>
                    En Un Encanto Latinoamericano, celebramos con entusiasmo las innumerables realizaciones, Agenda, ferias, premiaciones y más que dan vida a nuestra región. Para nuestros seguidores exigentes e informados, ofrecemos una agenda nutritiva llena de sorpresas y descubrimientos. Prepárate para un emocionante recorrido por los logros que hacen de Latinoamérica un encanto inigualable.</p>

            </div>
            <div className={styles.columnaImagen}>
                <Image src={'/EventosAgenda.jpeg'}
                    alt="Imagen"
                    width={471}
                    height={533} className={styles.image} />
            </div>
        </div>
    );
};

export default Agenda;