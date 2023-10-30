import React from 'react';
import styles from './RegionesLatinoAm.module.css';




const Regiones: React.FC = () => {
    return (


        <div className={styles.contenedor}>
            <div className={styles.columnaImagen}>
                
            </div>
            <div className={styles.columnaTexto}>
                <h1 className={styles.h1Titulo}>Regiones</h1>
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