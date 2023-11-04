import React from 'react';
import styles from './RegionesLatinoAm.module.css';
import Image from 'next/image';


const Regiones: React.FC = () => {
    return (
        

        <div className={styles.contenedor}>
        
        <Image src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Regiones.jpeg?alt=media&token=c485f45f-6291-4977-8a5c-aa222c6958c0&_gl=1*c1gn17*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5ODg5Mjc3Ni41LjEuMTY5ODg5Mjc5MS40NS4wLjA.'} alt="Imagen" width={1023} height={1023} className={styles.image} /> 
        
            <div className={styles.columnaTexto}>
                <h1 className={styles.h1Titulo}>Latinoamérica</h1>
                <p>
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