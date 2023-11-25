import Card from './Card';
import styles from '../card/Card.module.css';

interface ICardData {
    id: number;
    image: string;
    text: string;
    description: string;
    link: string;
}

interface CardGridProps {
    indexs: number[];
}

const CardGrid: React.FC<CardGridProps> = ({ indexs }) => {
    const cards: ICardData[] = [
        {
            id: 1,
            image: 'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Card-Gastronomia.jpeg?alt=media&token=dadac21c-3f50-436b-8a91-be1a6b315b7f&_gl=1*wyaneb*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5ODkwMTU0NC42LjEuMTY5ODkwMTY0Ni4zMy4wLjA.',
            text: 'Sabores encantadores',
            description: 'Explora el mundo con nosotros: Turismo de élite a tu alcance en esta exclusiva sección',
            link: '/Rubros/Gastronomia',
        },
        {
            id: 2,
            image: 'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Card-GiraEncantadora.jpeg?alt=media&token=69cb7ab6-65d6-4e50-92ed-edf1859c1f73&_gl=1*10f66ik*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5OTExMDUwMy44LjEuMTY5OTExMTkwMC4yLjAuMA.',
            text: 'Una gira encantadora',
            description: 'Sabores que conquistan: Explora nuestra selección de bebidas y alimentos irresistibles',
            link: '/Rubros/Turismo',
        },
        {
            id: 3,
            image: 'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Card-Packs.jpeg?alt=media&token=42f81a1b-03a5-4363-b9e6-bfdbc5b99f75&_gl=1*lpruoe*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5ODkwMTU0NC42LjEuMTY5ODkwMTc1OC4yOC4wLjA.',
            text: 'Packs especiales',
            description: 'Explora el sendero de las posibilidades: Donde los sueños encuentran su camino en nuestra sección de Oportunidades',
            link: '/Comercial',
        },
        {
            id: 4,
            image: 'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Card-Arte.jpeg?alt=media&token=32ca551c-80e0-4834-b998-6c917520aabc&_gl=1*1wbhl4s*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5ODkwMTU0NC42LjEuMTY5ODkwMTU4Ny4xNy4wLjA.',
            text: 'El encanto de los pueblos',
            description: 'Explora el mundo con nosotros: Turismo de élite a tu alcance en esta exclusiva sección',
            link: '/Rubros/Arte',
        },
        {
            id: 5,
            image: 'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Card-Derivados.jpeg?alt=media&token=f62072dc-5e85-4235-af3a-22b61cf23c0f&_gl=1*1b0ml6p*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5ODkwMTU0NC42LjEuMTY5ODkwMTYxOS42MC4wLjA.',
            text: 'Derivados encantos',
            description: 'Sabores que conquistan: Explora nuestra selección de bebidas y alimentos irresistibles',
            link: '/Rubros/Derivados',
        },
        {
            id: 6,
            image: 'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Card-Noticias.jpeg?alt=media&token=a0c28db2-6823-45fe-95a6-dd9f671e12ab&_gl=1*ccnr0p*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5ODkwMTU0NC42LjEuMTY5ODkwMTcyNi42MC4wLjA.',
            text: 'Noticias que encantan',
            description: 'Explora el sendero de las posibilidades: Donde los sueños encuentran su camino en nuestra sección de Oportunidades',
            link: '/Rubros/NuevosEmprendimientos',
        },
        {
            id: 7,
            image: '/oportunidades.jpeg',
            text: 'Con honor latino',
            description: 'Explora el sendero de las posibilidades: Donde los sueños encuentran su camino en nuestra sección de Oportunidades',
            link: 'Rubros/ruta-de-enlace-3',
        },
    ];

    // Filtrar las tarjetas basadas en los índices recibidos
    const selectedCards = indexs
        .map((index) => cards[index])
        .filter((card): card is ICardData => card !== undefined);

    return (
        <div className={styles.cardGrid}>
            {selectedCards.map((card) => (
                <Card
                    key={card.id}
                    image={card.image}
                    text={card.text}
                    link={card.link}
                    description={card.description}
                />
            ))}
        </div>
    );
};

export default CardGrid;
