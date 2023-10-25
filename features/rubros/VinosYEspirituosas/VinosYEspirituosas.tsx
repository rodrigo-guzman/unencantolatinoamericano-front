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
                <Image src={'/Vinosyespirituosas.jpeg'} alt="Imagen" width={755} height={227} className={styles.image} />
            </div>
        </div>
    );
};

export default VinosYEspirituosas;