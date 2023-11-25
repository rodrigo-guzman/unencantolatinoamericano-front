"use client";
import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const NavbarDesktop: React.FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const router = useRouter();


    return (
        <ul className={styles.ul}>
            <li className={styles.li}>
                <Link href='/'>Home</Link>
            </li>
            <li className={styles.li}>
                <Link href='/Concepto/Proyecto'>Concepto</Link>
                <ul className={styles.ul}>
                    <li className={styles.li2}><Link href='/Concepto/Proyecto'>Proyecto</Link></li>
                </ul>
            </li>
            <li className={styles.li}>
                <Link href='/QuienesSomos'>Quienes Somos</Link>
            </li>
            <li className={styles.li}>Rubros
                <ul className={styles.ul}>
                    <li className={styles.li2}>
                        <Link href='/Rubros/VinosYEspirituosas'>Vino y Espirituosas</Link>
                    </li>
                    <li className={styles.li2}>
                        <Link href='/Rubros/Infusiones'>Infusiones</Link>
                    </li>
                    <li className={styles.li2}>
                        <Link href='/Rubros/Alimentos'>Alimentos</Link>
                    </li>
                    <li className={styles.li2}>
                        <Link href='/Rubros/Gastronomia'>Gastronomía</Link>
                    </li>
                    <li className={styles.li2}>
                        <Link href='/Rubros/Derivados'>Derivados</Link>
                    </li>
                    <li className={styles.li2}>
                        <Link href='/Rubros/Turismo'>Turismo/Enoturismo y Turismo Temático</Link>
                    </li>
                    <li className={styles.li2}>
                        <Link href='/Rubros/NuevosEmprendimientos'>Nuevos Emprendimientos</Link>
                    </li>
                    <li className={styles.li2}>
                        <Link href='/Rubros/Arte'>Arte</Link>
                    </li>
                </ul>
            </li>
            <li className={styles.li}>Regiones
                <ul className={styles.ul}>
                    <li className={styles.li2}><Link href="/RegionesLatAm">LatinoAmérica</Link></li>
                </ul>
            </li>
            <li className={styles.li}><Link href='/Eventos/Eventos'>Eventos</Link>
                <ul className={styles.ul}>
                    <li className={styles.li2}><Link href='/Eventos/Eventos'>Eventos</Link></li>
                    <li className={styles.li2}><Link href='/Eventos/Agenda'>Agenda</Link></li>
                </ul>
            </li>
            <li className={styles.li}><Link href='/Imagenes'>Imágenes y Videos</Link>
            </li>
            <li className={styles.li}><Link href="/LosHacedores">Los Hacedores</Link>
            </li>
            <li className={styles.li}><Link href='/Comercial'>Comercial</Link>
            </li>
            <li className={styles.li}><Link href='/Contacto'>Contacto</Link>
            </li>
        </ul>
    );
};

export default NavbarDesktop;
