import React from 'react';
import styles from './Footer.module.css'
import SocialMediaLinks from '../socialMediaLinks/SocialMediaLinks';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <p>UN ENCANTO LATINOAMERICANO | Say & Do Producciones SAS / 2023 - Todos los derechos reservados ® </p>
            </div>
            <p>Registro de la propiedad intelectual número 123456</p>
            <div>
                <p>Argentina | Teléfono: (351) 157123456 / (351) 158654987 | E-mail: nombre@unencantolatinoamericano.com</p>
            </div>
            <div className={styles.socialMediaLinks}>
                <SocialMediaLinks />
            </div>
        </footer>
    );
};

export default Footer;
