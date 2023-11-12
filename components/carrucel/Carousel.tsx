import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './Carousel.module.css';
import Image from 'next/image';
import $ from 'jquery'; // Importa jQuery

const CarouselComponent = () => {
    useEffect(() => {
        const fila = $('.contenedorCarrusel .carrusel');
        const flechaIzquierda = $('.contenedorPrincipal .flechaIzquierda');
        const flechaDerecha = $('.contenedorPrincipal .flechaDerecha');

        // Event Listener para la flecha derecha
        flechaDerecha.on('click', () => {
            fila.scrollLeft(fila.scrollLeft() + fila.width());

            const indicadorActivo = $('.indicadores .activo');
            if (indicadorActivo && indicadorActivo.next()) {
                indicadorActivo.next().addClass('activo');
                indicadorActivo.removeClass('activo');
            }
        });

        // Event Listener para la flecha izquierda
        flechaIzquierda.on('click', () => {
            fila.scrollLeft(fila.scrollLeft() - fila.width());

            const indicadorActivo = $('.indicadores .activo');
            if (indicadorActivo && indicadorActivo.prev()) {
                indicadorActivo.prev().addClass('activo');
                indicadorActivo.removeClass('activo');
            }
        });

        // Paginación
        const numeroPaginas = Math.ceil($('.pelicula').length / 5);
        for (let i = 0; i < numeroPaginas; i++) {
            const indicador = $('<button></button>');

            if (i === 0) {
                indicador.addClass('activo');
            }

            $('.indicadores').append(indicador);

            indicador.on('click', (e) => {
                fila.scrollLeft(i * fila.width());

                const indicadorActivo = $('.indicadores .activo');
                if (indicadorActivo) {
                    indicadorActivo.removeClass('activo');
                }

                $(e.target).addClass('activo');
            });
        }

        // Hover
        $('.pelicula').on('mouseenter', (e) => {
            const elemento = $(e.currentTarget);
            setTimeout(() => {
                $('.pelicula').removeClass('hover');
                if (elemento) {
                    elemento.addClass('hover');
                }
            }, 300);
        });

        fila.on('mouseleave', () => {
            $(

                '.pelicula').removeClass('hover');
        });
    }, []); // El segundo argumento vacío asegura que este efecto se ejecute solo una vez

    return (
        <div className={styles.peliculasRecomendadas}>
            <div className={styles.contenedorTituloControles}>
                <h3>Carusel imágenes</h3>
                <div className={styles.indicadores}></div>
            </div>
            <div className={styles.contenedorPrincipal}>
                <button role="button" id="flechaIzquierda" className={styles.flechaIzquierda}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <div className={styles.contenedorCarrusel}>
                    <div className={styles.carrusel}>
                        <div className={styles.pelicula}>
                            <a href="#">
                                <img
                                    src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Comercial.jpeg?alt=media&token=d52a64c4-8e24-42e7-9a4f-99fdb029a931&_gl=1*vig0li*_ga*NDg1MDQyNDAwLjE2OTkwMjMzNjM.*_ga_CW55HF8NVT*MTY5OTAyMzM2NC4xLjEuMTY5OTAyMzUxOS41MS4wLjA.'}
                                    alt=""
                                    style={{ width: '200px', height: '300px' }} // Cambia el tamaño según tus necesidades
                                />
                            </a>
                        </div>
                        <div className={styles.pelicula}>
                            <a href="#">
                                <img
                                    src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Comercial.jpeg?alt=media&token=d52a64c4-8e24-42e7-9a4f-99fdb029a931&_gl=1*vig0li*_ga*NDg1MDQyNDAwLjE2OTkwMjMzNjM.*_ga_CW55HF8NVT*MTY5OTAyMzM2NC4xLjEuMTY5OTAyMzUxOS41MS4wLjA.'}
                                    alt=""
                                    style={{ width: '200px', height: '300px' }} // Cambia el tamaño según tus necesidades
                                />
                            </a>
                        </div>
                        <div className={styles.pelicula}>
                            <a href="#">
                                <img
                                    src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Comercial.jpeg?alt=media&token=d52a64c4-8e24-42e7-9a4f-99fdb029a931&_gl=1*vig0li*_ga*NDg1MDQyNDAwLjE2OTkwMjMzNjM.*_ga_CW55HF8NVT*MTY5OTAyMzM2NC4xLjEuMTY5OTAyMzUxOS41MS4wLjA.'}
                                    alt=""
                                    style={{ width: '200px', height: '300px' }} // Cambia el tamaño según tus necesidades
                                />
                            </a>
                        </div>
                        <div className={styles.pelicula}>
                            <a href="#">
                                <img
                                    src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Comercial.jpeg?alt=media&token=d52a64c4-8e24-42e7-9a4f-99fdb029a931&_gl=1*vig0li*_ga*NDg1MDQyNDAwLjE2OTkwMjMzNjM.*_ga_CW55HF8NVT*MTY5OTAyMzM2NC4xLjEuMTY5OTAyMzUxOS41MS4wLjA.'}
                                    alt=""
                                    style={{ width: '200px', height: '300px' }} // Cambia el tamaño según tus necesidades
                                />
                            </a>
                        </div>
                        <div className={styles.pelicula}>
                            <a href="#">
                                <img
                                    src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Comercial.jpeg?alt=media&token=d52a64c4-8e24-42e7-9a4f-99fdb029a931&_gl=1*vig0li*_ga*NDg1MDQyNDAwLjE2OTkwMjMzNjM.*_ga_CW55HF8NVT*MTY5OTAyMzM2NC4xLjEuMTY5OTAyMzUxOS41MS4wLjA.'}
                                    alt=""
                                    style={{ width: '200px', height: '300px' }} // Cambia el tamaño según tus necesidades
                                />
                            </a>
                        </div>
                        <div className={styles.pelicula}>
                            <a href="#">
                                <img
                                    src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Comercial.jpeg?alt=media&token=d52a64c4-8e24-42e7-9a4f-99fdb029a931&_gl=1*vig0li*_ga*NDg1MDQyNDAwLjE2OTkwMjMzNjM.*_ga_CW55HF8NVT*MTY5OTAyMzM2NC4xLjEuMTY5OTAyMzUxOS41MS4wLjA.'}
                                    alt=""
                                    style={{ width: '200px', height: '300px' }} // Cambia el tamaño según tus necesidades
                                />
                            </a>
                        </div>
                        <div className={styles.pelicula}>
                            <a href="#">
                                <img
                                    src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Comercial.jpeg?alt=media&token=d52a64c4-8e24-42e7-9a4f-99fdb029a931&_gl=1*vig0li*_ga*NDg1MDQyNDAwLjE2OTkwMjMzNjM.*_ga_CW55HF8NVT*MTY5OTAyMzM2NC4xLjEuMTY5OTAyMzUxOS41MS4wLjA.'}
                                    alt=""
                                    style={{ width: '200px', height: '300px' }} // Cambia el tamaño según tus necesidades
                                />
                            </a>
                        </div>
                        <div className={styles.pelicula}>
                            <a href="#">
                                <img
                                    src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Comercial.jpeg?alt=media&token=d52a64c4-8e24-42e7-9a4f-99fdb029a931&_gl=1*vig0li*_ga*NDg1MDQyNDAwLjE2OTkwMjMzNjM.*_ga_CW55HF8NVT*MTY5OTAyMzM2NC4xLjEuMTY5OTAyMzUxOS41MS4wLjA.'}
                                    alt=""
                                    style={{ width: '200px', height: '300px' }} // Cambia el tamaño según tus necesidades
                                />
                            </a>
                        </div>
                        <div className={styles.pelicula}>
                            <a href="#">
                                <img
                                    src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Comercial.jpeg?alt=media&token=d52a64c4-8e24-42e7-9a4f-99fdb029a931&_gl=1*vig0li*_ga*NDg1MDQyNDAwLjE2OTkwMjMzNjM.*_ga_CW55HF8NVT*MTY5OTAyMzM2NC4xLjEuMTY5OTAyMzUxOS41MS4wLjA.'}
                                    alt=""
                                    style={{ width: '200px', height: '300px' }} // Cambia el tamaño según tus necesidades
                                />
                            </a>
                        </div>
                        <div className={styles.pelicula}>
                            <a href="#">
                                <img
                                    src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Comercial.jpeg?alt=media&token=d52a64c4-8e24-42e7-9a4f-99fdb029a931&_gl=1*vig0li*_ga*NDg1MDQyNDAwLjE2OTkwMjMzNjM.*_ga_CW55HF8NVT*MTY5OTAyMzM2NC4xLjEuMTY5OTAyMzUxOS41MS4wLjA.'}
                                    alt=""
                                    style={{ width: '200px', height: '300px' }} // Cambia el tamaño según tus necesidades
                                />
                            </a>
                        </div>
                        <div className={styles.pelicula}>
                            <a href="#">
                                <img
                                    src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Comercial.jpeg?alt=media&token=d52a64c4-8e24-42e7-9a4f-99fdb029a931&_gl=1*vig0li*_ga*NDg1MDQyNDAwLjE2OTkwMjMzNjM.*_ga_CW55HF8NVT*MTY5OTAyMzM2NC4xLjEuMTY5OTAyMzUxOS41MS4wLjA.'}
                                    alt=""
                                    style={{ width: '200px', height: '300px' }} // Cambia el tamaño según tus necesidades
                                />
                            </a>
                        </div>
                        <div className={styles.pelicula}>
                            <a href="#">
                                <img
                                    src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Comercial.jpeg?alt=media&token=d52a64c4-8e24-42e7-9a4f-99fdb029a931&_gl=1*vig0li*_ga*NDg1MDQyNDAwLjE2OTkwMjMzNjM.*_ga_CW55HF8NVT*MTY5OTAyMzM2NC4xLjEuMTY5OTAyMzUxOS41MS4wLjA.'}
                                    alt=""
                                    style={{ width: '200px', height: '300px' }} // Cambia el tamaño según tus necesidades
                                />
                            </a>
                        </div>
                        <div className={styles.pelicula}>
                            <a href="#">
                                <img
                                    src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Comercial.jpeg?alt=media&token=d52a64c4-8e24-42e7-9a4f-99fdb029a931&_gl=1*vig0li*_ga*NDg1MDQyNDAwLjE2OTkwMjMzNjM.*_ga_CW55HF8NVT*MTY5OTAyMzM2NC4xLjEuMTY5OTAyMzUxOS41MS4wLjA.'}
                                    alt=""
                                    style={{ width: '200px', height: '300px' }} // Cambia el tamaño según tus necesidades
                                />
                            </a>
                        </div>
                        <div className={styles.pelicula}>
                            <a href="#">
                                <img
                                    src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Comercial.jpeg?alt=media&token=d52a64c4-8e24-42e7-9a4f-99fdb029a931&_gl=1*vig0li*_ga*NDg1MDQyNDAwLjE2OTkwMjMzNjM.*_ga_CW55HF8NVT*MTY5OTAyMzM2NC4xLjEuMTY5OTAyMzUxOS41MS4wLjA.'}
                                    alt=""
                                    style={{ width: '200px', height: '300px' }} // Cambia el tamaño según tus necesidades
                                />
                            </a>
                        </div>
                        <div className={styles.pelicula}>
                            <a href="#">
                                <img
                                    src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Comercial.jpeg?alt=media&token=d52a64c4-8e24-42e7-9a4f-99fdb029a931&_gl=1*vig0li*_ga*NDg1MDQyNDAwLjE2OTkwMjMzNjM.*_ga_CW55HF8NVT*MTY5OTAyMzM2NC4xLjEuMTY5OTAyMzUxOS41MS4wLjA.'}
                                    alt=""
                                    style={{ width: '200px', height: '300px' }} // Cambia el tamaño según tus necesidades
                                />
                            </a>
                        </div>
                        <div className={styles.pelicula}>
                            <a href="#">
                                <img
                                    src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Comercial.jpeg?alt=media&token=d52a64c4-8e24-42e7-9a4f-99fdb029a931&_gl=1*vig0li*_ga*NDg1MDQyNDAwLjE2OTkwMjMzNjM.*_ga_CW55HF8NVT*MTY5OTAyMzM2NC4xLjEuMTY5OTAyMzUxOS41MS4wLjA.'}
                                    alt=""
                                    style={{ width: '200px', height: '300px' }} // Cambia el tamaño según tus necesidades
                                />
                            </a>
                        </div>
                        <div className={styles.pelicula}>
                            <a href="#">
                                <img
                                    src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Comercial.jpeg?alt=media&token=d52a64c4-8e24-42e7-9a4f-99fdb029a931&_gl=1*vig0li*_ga*NDg1MDQyNDAwLjE2OTkwMjMzNjM.*_ga_CW55HF8NVT*MTY5OTAyMzM2NC4xLjEuMTY5OTAyMzUxOS41MS4wLjA.'}
                                    alt=""
                                    style={{ width: '200px', height: '300px' }} // Cambia el tamaño según tus necesidades
                                />
                            </a>
                        </div>
                        <div className={styles.pelicula}>
                            <a href="#">
                                <img
                                    src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Comercial.jpeg?alt=media&token=d52a64c4-8e24-42e7-9a4f-99fdb029a931&_gl=1*vig0li*_ga*NDg1MDQyNDAwLjE2OTkwMjMzNjM.*_ga_CW55HF8NVT*MTY5OTAyMzM2NC4xLjEuMTY5OTAyMzUxOS41MS4wLjA.'}
                                    alt=""
                                    style={{ width: '200px', height: '300px' }} // Cambia el tamaño según tus necesidades
                                />
                            </a>
                        </div>
                        <div className={styles.pelicula}>
                            <a href="#">
                                <img
                                    src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Comercial.jpeg?alt=media&token=d52a64c4-8e24-42e7-9a4f-99fdb029a931&_gl=1*vig0li*_ga*NDg1MDQyNDAwLjE2OTkwMjMzNjM.*_ga_CW55HF8NVT*MTY5OTAyMzM2NC4xLjEuMTY5OTAyMzUxOS41MS4wLjA.'}
                                    alt=""
                                    style={{ width: '200px', height: '300px' }} // Cambia el tamaño según tus necesidades
                                />
                            </a>
                        </div>
                        <div className={styles.pelicula}>
                            <a href="#">
                                <img
                                    src={'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Comercial.jpeg?alt=media&token=d52a64c4-8e24-42e7-9a4f-99fdb029a931&_gl=1*vig0li*_ga*NDg1MDQyNDAwLjE2OTkwMjMzNjM.*_ga_CW55HF8NVT*MTY5OTAyMzM2NC4xLjEuMTY5OTAyMzUxOS41MS4wLjA.'}
                                    alt=""
                                    style={{ width: '200px', height: '300px' }} // Cambia el tamaño según tus necesidades
                                />
                            </a>
                        </div>

                    </div>
                </div>
                <button role="button" id="flechaDerecha" className={styles.flechaDerecha}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
        </div>
    );
};

export default CarouselComponent;
