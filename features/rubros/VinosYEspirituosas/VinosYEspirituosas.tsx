import styles from './VinosYEspirituosas.module.css'
import Image from 'next/image';

const VinosYEspirituosas: React.FC = () => {
    return (
        <div className={styles.contenedor}>
            <h1 className={styles.h1}>VINOS Y ESPIRITUOSAS</h1>
            <div className={styles.contenido}>
                <p className={styles.p}>
                    Nos complace llevarte en un viaje emocionante a través de los sabores, los aromas y la elegancia
                    de los vinos y las bebidas espirituosas. En nuestra nueva sección exploraremos la magia que se
                    esconde detrás de estas exquisitas creaciones que han conquistado paladares alrededor del
                    mundo. ¡Prepárate para un viaje inigualable que despertará tus sentidos y tu curiosidad!</p>
                {/* <Image src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Vinosyespirituosas.jpeg?alt=media&token=0f5d7e5d-268a-406a-b20f-1329c71f7c5f&_gl=1*1a8cw15*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5ODg5MDM0NS40LjEuMTY5ODg5MDc4MS4zMC4wLjA.'} alt="Imagen" width={755} height={227} className={styles.image} /> */}
                <Image src={''} alt="Imagen" width={755} height={227} className={styles.image} />
            </div>
        </div>
    );
};

export default VinosYEspirituosas;