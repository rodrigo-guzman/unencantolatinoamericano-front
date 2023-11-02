"use client";
import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Skeleton, Divider, Toolbar, AppBar, Container, Typography, Button } from '@mui/material';
import { DarkMode, LightMode, Menu } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const router = useRouter();

  const categories: any = [
    'Concepto',
    'Quienes Somos',
    'Rubros',
    'Regiones',
    'Eventos',
    'Imágenes y Videos',
    'Los Hacedores',
    'Comercial',
    'Contacto'
  ];

  const subcategories: any = [
    'Vinos',
    'Una gira encantadora'
  ]

  return (
    <div>
      <div className={styles.menuHamburguesa}>
        <Container>
          <Toolbar>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              sx={{ display: { xs: 'flex', md: 'none' } }}
              title='icononono'
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              style={{ backgroundColor: 'white' }}
            >
              <Menu />
            </IconButton>
            <Drawer
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
            >
              <List>
                {
                  categories.length ?
                    categories.map((label: any) => (
                      // <Link
                      //   to={`/`}
                      //   key={label}
                      //   className='nav-link'
                      //   onClick={() => setIsDrawerOpen(false)}
                      //   style={{ textDecoration: 'none' }}
                      // >
                      <ListItem key={label}>
                        <ListItemButton sx={{ paddingX: '50px' }}>
                          <ListItemText
                            sx={{ textAlign: 'center' }}
                            primary={label}
                            onClick={() => router.push('/quienes-somos')} />
                        </ListItemButton>
                      </ListItem>
                      // </Link>
                    ))
                    :
                    <>
                      <ListItem>
                        <ListItemButton sx={{ paddingX: '50px' }}>
                          <Skeleton width='115px' height='40px' />
                        </ListItemButton>
                      </ListItem>
                      <ListItem>
                        <ListItemButton sx={{ paddingX: '50px' }}>
                          <Skeleton width='115px' height='40px' />
                        </ListItemButton>
                      </ListItem>
                      <ListItem>
                        <ListItemButton sx={{ paddingX: '50px' }}>
                          <Skeleton width='115px' height='40px' />
                        </ListItemButton>
                      </ListItem>
                    </>
                }
              </List>
              <Divider />
            </Drawer>
          </Toolbar>
        </Container>
      </div>

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
    </div>
  );
};

export default Navbar;


