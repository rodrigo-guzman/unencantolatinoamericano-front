import Link from 'next/link';
import styles from '../card/Card.module.css'
import Image from 'next/image';

interface CardProps {
    image: string;
    text: string;
    link: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ image, text, link, description }) => {
    return (
        <Link href={link}>
            <div className={styles.card}>
                <img src={image} alt="Imagen" width={275} height={183} className={styles.img} />
                <h3 className={styles.h1}>{text}</h3>
                <p className={styles.p}>{description}</p>
            </div>
        </Link>
    );
};

export default Card;
