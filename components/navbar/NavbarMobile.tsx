"use client";
import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Skeleton, Divider, Toolbar, AppBar, Container, Typography, Button } from '@mui/material';
import { Category, DarkMode, LightMode, Menu } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import getCategories from './GetCategories';


const NavbarMobile: React.FC = () => {
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
                                        <React.Fragment key={label}>
                                            <ListItem>
                                                <ListItemButton sx={{ paddingX: '50px' }}>
                                                    <ListItemText
                                                        sx={{ textAlign: 'start', typography: 'subtitle2' }}
                                                        primary={label}
                                                        onClick={() => router.push(`/${getCategories(label).link}`)}
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            {getCategories(label).SubCategories.length > 0 && (
                                                <List>
                                                    {getCategories(label).SubCategories.map((subCategory: any) => (
                                                        <ListItem key={subCategory.title}>
                                                            <ListItemButton sx={{ paddingX: '50px' }}>
                                                                <ListItemText
                                                                    sx={{ textAlign: 'center' }}
                                                                    primary={subCategory.title}
                                                                    onClick={() => router.push(`/${subCategory.link}`)}
                                                                />
                                                            </ListItemButton>
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            )}
                                        </React.Fragment>
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
    );
};

export default NavbarMobile;