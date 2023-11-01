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
            image: '/vinos-y-alimentos.jpeg',
            text: 'Sabores encantadores',
            description: 'Explora el mundo con nosotros: Turismo de élite a tu alcance en esta exclusiva sección',
            link: '/GastronomiaPage',
        },
        {
            id: 2,
            image: '/turismo.jpg',
            text: 'Una gira encantadora',
            description: 'Sabores que conquistan: Explora nuestra selección de bebidas y alimentos irresistibles',
            link: '/TurismoPage',
        },
        {
            id: 3,
            image: '/oportunidades.jpeg',
            text: 'Packs especiales',
            description: 'Explora el sendero de las posibilidades: Donde los sueños encuentran su camino en nuestra sección de Oportunidades',
            link: '/ComercialPage',
        },
        {
            id: 4,
            image: '/vinos-y-alimentos.jpeg',
            text: 'El encanto de los pueblos',
            description: 'Explora el mundo con nosotros: Turismo de élite a tu alcance en esta exclusiva sección',
            link: '/ArtePage',
        },
        {
            id: 5,
            image: '/turismo.jpg',
            text: 'Derivados encantos',
            description: 'Sabores que conquistan: Explora nuestra selección de bebidas y alimentos irresistibles',
            link: '/DerivadosPage',
        },
        {
            id: 6,
            image: '/oportunidades.jpeg',
            text: 'Noticias que encantan',
            description: 'Explora el sendero de las posibilidades: Donde los sueños encuentran su camino en nuestra sección de Oportunidades',
            link: '/ruta-de-enlace-3',
        },
        {
            id: 7,
            image: '/oportunidades.jpeg',
            text: 'Con honor latino',
            description: 'Explora el sendero de las posibilidades: Donde los sueños encuentran su camino en nuestra sección de Oportunidades',
            link: '/ruta-de-enlace-3',
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
