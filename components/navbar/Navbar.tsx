"use client";
import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Skeleton, Divider, Toolbar, AppBar, Container, Typography, Button } from '@mui/material';
import { Category, DarkMode, LightMode, Menu } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import getCategories from './GetCategories';
import NavbarMobile from './NavbarMobile';
import NavbarDesktop from './NavbarDesktop';


const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const router = useRouter();

  const categories: any = [
    'Home',
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

  return (
    <div>
      <NavbarMobile />

      <NavbarDesktop />
    </div>
  );
};

export default Navbar;


