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
          <Link href='/'>Concepto</Link>
          <ul className={styles.ul}>
            <li className={styles.li2}><Link href='/ProyectoPage'>Proyecto</Link></li>
          </ul>
        </li>
        <li className={styles.li}>
          <Link href='/QuienesSomosPage'>Quienes Somos</Link>
        </li>
        <li className={styles.li}><a href="#">Rubros</a>

          <ul className={styles.ul}>
            <li className={styles.li2}>
              <Link href='/VinosYEspirituosasPage'>Vino y Espirituosas</Link>
            </li>
            <li className={styles.li2}><a href="#">Turismo</a>
              <ul className={styles.ul}>
                <li className={styles.li2}><a href="#">Enoturismo</a></li>
                <li className={styles.li2}><a href="#">Turismo Temático</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li className={styles.li}><a href="#">Regiones</a>
          <ul className={styles.ul}>
            <li className={styles.li2}><a href="#">LatinoAmérica</a></li>
          </ul>
        </li>
        <li className={styles.li}><a href="#">Eventos</a>
          <ul className={styles.ul}>
            <li className={styles.li2}><a href="#">Eventos</a></li>
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
    </div>
  );
};

export default Navbar;


