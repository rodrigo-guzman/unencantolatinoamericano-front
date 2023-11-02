import React from 'react';
import styles from './QuienesSomos.module.css';
import Image from 'next/image';
import imagenQuienesSomos from '../../assets/QuienesSomos.png';

const QuienesSomos: React.FC = () => {
    return (

        <div className={styles.contenedor}>
            <Image src={''} alt="Imagen" width={855} height={819} className={styles.image} />
            <div className={styles.columnaTexto}>
                <h1 className={styles.h1Titulo}>Quienes Somos</h1>
                <p>
                    Somos más que una empresa, somos una conexión directa con la riqueza de la cultura y el espíritu de
                    América Latina. Con cada proyecto que emprendemos, buscamos resaltar las historias, la artesanía, la
                    música, la gastronomía y el talento que hacen de esta región un auténtico tesoro para el mundo entero.
                    Desafiamos constantemente los límites de la creatividad. Cada campaña, cada proyecto, es una
                    oportunidad para contar una historia única y emocionante. Nuestra creatividad es nuestra arma secreta
                    para destacar y cautivar a destinatarios de todo el mundo
                    Entendemos la importancia de las relaciones humanas, con nuestra experiencia en comunicación y acciones
                    comerciales creamos puentes que unen comunidades, artistas, marcas y amantes de la cultura latina en
                    una danza armoniosa de intercambio.
                </p>
                {/* <Image src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/QuienesSomos.jpeg?alt=media&token=21ecf32f-f4f4-4fd9-b3dd-cc30061d54c6&_gl=1*u3pchn*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5ODg5MDM0NS40LjEuMTY5ODg5MDU0NS42MC4wLjA.'} alt="Imagen" width={855} height={819} className={styles.image} /> */}

            </div>
        </div>

    );
};

export default QuienesSomos;

