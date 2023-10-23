import React from 'react';
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import styles from './SocialMediaLinks.module.css'

const SocialMediaLinks = () => {
    return (
        <div>
            <IconButton className={styles.socialIcon}>
                <a href="https://www.facebook.com/tupagina" target="_blank" rel="noopener noreferrer">
                    <FacebookIcon />
                </a>
            </IconButton>
            <IconButton className={styles.socialIcon}>
                <a href="https://www.instagram.com/tupagina" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon />
                </a>
            </IconButton>
            <IconButton className={styles.socialIcon}>
                <a href="https://www.youtube.com/tupagina" target="_blank" rel="noopener noreferrer">
                    <YouTubeIcon />
                </a>
            </IconButton>
        </div>
    );
};

export default SocialMediaLinks;
