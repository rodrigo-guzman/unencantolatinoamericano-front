// components/Navbar.tsx
import styles from './Navbar.module.css'

import React from 'react';

const Navbar: React.FC = () => {
  return (

    <ul className={styles.ul}>
      <li className={styles.li}><a href="#">Concepto</a>
        <ul className={styles.ul}>
          <li className={styles.li2}><a href="#">Idea del Proyecto</a></li>
          <li className={styles.li2}><a href="#">Quienes Somos</a></li>
          <li className={styles.li2}><a href="#">Participan, Apoyan, Colaboran</a></li>
        </ul>
      </li>
      <li className={styles.li}><a href="#">Rubros</a>
        <ul className={styles.ul}>
          <li className={styles.li2}><a href="#">Vinos y Espirituosas</a></li>
          <li className={styles.li2}><a href="#">Infusiones</a></li>
          <li className={styles.li2}><a href="#">Alimenticios</a></li>
          <li className={styles.li2}><a href="#">Gastronomía</a></li>
          <li className={styles.li2}><a href="#">Derivados</a></li>
          <li className={styles.li2}><a href="#">Turismo/ Enoturismo</a></li>
          <li className={styles.li2}><a href="#">Cultura</a></li>
          <li className={styles.li2}><a href="#">Novedades</a></li>
        </ul>
      </li>
      <li className={styles.li}><a href="#">Regiones</a>
        <ul className={styles.ul}>
          <li className={styles.li2}><a href="#">Mapa de Latinoamérica</a></li>
        </ul>
      </li>
      <li className={styles.li}><a href="#">Eventos</a>
        <ul className={styles.ul}>
          <li className={styles.li2}><a href="#">Eventos propios</a></li>
          <li className={styles.li2}><a href="#">Agenda</a></li>
        </ul>
      </li>
      <li className={styles.li}><a href="#">Imágenes y Videos</a>
      </li>
      <li className={styles.li}><a href="#">Los Hacedores</a>
      </li>
      <li className={styles.li}><a href="#">Comercial</a>
      </li>
      <li className={styles.li}><a href="#">Contacto</a>
      </li>
    </ul>

  );
};

export default Navbar;


