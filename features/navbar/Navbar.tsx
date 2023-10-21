//@ts-check
"use client";
import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Skeleton, Divider, Toolbar, AppBar, Container, Typography, Button } from '@mui/material';
import { DarkMode, LightMode, Menu } from '@mui/icons-material';
import { Link, NavLink } from 'react-router-dom';


const Navbar: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleMenu = () => {
    console.log("entró")
    setMenuVisible(!menuVisible);
  };

  const categories: any = [
    'Conceptos',
    'Rubros',
    'Eventos',
    'Imágenes y Videos',
    'Los Hacedores',
    'Comercial',
    'Contacto'
  ];

  const subcategories: any = [
    'Vinos',
    'Turismo'
  ]

  return (
    <div>

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
                    <Link
                      to={`/`}
                      key={label}
                      className='nav-link'
                      onClick={() => setIsDrawerOpen(false)}
                      style={{ textDecoration: 'none' }}
                    >
                      <ListItem>
                        <ListItemButton sx={{ paddingX: '50px' }}>
                          <ListItemText sx={{ textAlign: 'center' }} primary={label} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
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



      {/* <button className={styles.hamburgerButton} onClick={toggleMenu}>
        ☰
      </button> */}
      <ul className={`${styles.ul} ${menuVisible ? styles.visibleMenu : ''}`}>
        <li className={styles.li}>
          <a href="#">Concepto</a>
          <ul className={styles.ul}>
            <li className={styles.li2}><a href="#">Idea del Proyecto</a></li>
            <li className={styles.li2}><a href="#">Quienes Somos</a></li>
            <li className={styles.li2}><a href="#">Participan, Apoyan, Colaboran</a></li>
          </ul>
        </li>
        <li className={styles.li}>
          <a href="#">Rubros</a>
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
    </div>
  );
};

export default Navbar;


