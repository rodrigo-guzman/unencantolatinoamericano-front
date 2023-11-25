import React from 'react';
import styles from './RegionesLatinoAm.module.css';
import Image from 'next/image';


const Regiones: React.FC = () => {
    return (


        <div className={styles.contenedor}>


            <Image src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Proyecto-un-encanto.jpeg?alt=media&token=e1c2b337-e934-438b-a48f-081cc31e10c7'} alt="Imagen" width={1023} height={1023} className={styles.image} />
            <div className={styles.columnaTexto}>
                <h1 className={styles.h1Titulo}>Latinoamérica</h1>
                <p className={styles.p}>
                    Bienvenidos a un viaje mágico por las maravillas, los sabores y la pasión de Latinoamérica. Desde
                    las cumbres andinas hasta las playas tropicales, este continente es un tesoro escondido que brilla
                    con una luz propia. En esta presentación, celebraremos la riqueza de Latinoamérica en sus
                    productos, bellezas turísticas y su creciente pujanza a nivel mundial.
                </p>
            </div>
        </div>


    );
};

export default Regiones;