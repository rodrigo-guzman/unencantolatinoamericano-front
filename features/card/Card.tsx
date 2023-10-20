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
        <div className={styles.card}>
            <Link href={link}>
                <Image src={image} alt="Imagen" width={275} height={183} className={styles.img} />
                <h3>{text}</h3>
                <p>{description}</p>
            </Link>
        </div>
    );
};

export default Card;
