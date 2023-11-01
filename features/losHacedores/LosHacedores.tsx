import React from 'react';
import styles from './LosHacedores.module.css';
import Image from 'next/image';
import imagenQuienesSomos from '../../assets/QuienesSomos.png';

const LosHacedores: React.FC = () => {
    return (

        <div className={styles.contenedor}>
            <div className={styles.columnaImagen}>
                <Image src={imagenQuienesSomos} alt="Quienes Somos" />
            </div>
            <div className={styles.columnaTexto}>
                <h1 className={styles.h1Titulo}>Los Hacedores</h1>
                <p>
                    Bienvenidos a un espacio de reconocimiento y celebración, donde tributamos a los verdaderos
                    titanes de la producción, el arte y la cultura de Latinoamérica. &quot;Con honor Latino&quot; es un rincón
                    donde los pioneros y los contemporáneos brillan con luz propia, y donde el talento y la creatividad
                    se elevan a nuevas alturas. Prepárate para un viaje de inspiración a través de las historias y los
                    logros de los protagonistas de la región
                </p>
            </div>
        </div>

    );
};

export default LosHacedores;