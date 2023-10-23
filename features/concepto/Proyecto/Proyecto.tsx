import styles from './Proyecto.module.css'

const Proyecto: React.FC = () => {
    return (
        <div className={styles.contenedor}>
            <h1>CONCEPTO</h1>
            <p>En el corazón vibrante de América Latina, donde la cultura, el sabor y la pasión convergen, nace <b>Un Encanto
                Latinoamericano</b> un emprendimiento apasionado dedicado a la comunicación, la difusión y la
                comercialización de todo lo que hace que esta región sea única en el mundo.</p>
            <p>
                Contamos con una vasta red de colaboradores, creadores y expertos en toda la región. Esto nos permite
                acceder a historias únicas y productos excepcionales que compartimos con el mundo a través de viajes
                deslumbrantes a los parajes mas encantadores de cada rincón de Latinoamérica.
            </p>
            <p>
                Creamos conexiones auténticas que permiten a nuestros publico experimentar el latido de América Latina
                de una manera única, no solo promovemos la belleza sino que también la celebramos. Si buscas una forma
                auténtica y apasionada de conectarte con esta región rica en cultura y diversidad, has llegado al lugar
                adecuado.
            </p>
        </div>
    );
};

export default Proyecto;