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
            image: '/Card-Gastronomia.jpeg',
            text: 'SABORES QUE ENCANTAN',
            description: 'Cocinas con identidad y aquellas por descubrir, cultivos autóctonos y por supuesto, las bebidas, elixires que maridan con la vida misma y que dieron la vuelta al mundo desde Latinoamérica.',
            link: '/Rubros/Gastronomia',
        },
        {
            id: 2,
            image: '/Card-GiraEncantadora.jpeg',
            text: 'UNA GIRA ENCANTADORA',
            description: 'Viajar, recorrer y descubrir las rutas de los placeres que conjugan bellezas naturales, templos de elaboraciones deliciosas, sus historias, sus presentes y sus próximos pasos, en la incomparable América latina.',
            link: '/Rubros/Turismo',
        },
        {
            id: 3,
            image: '/Card-Packs.jpeg',
            text: 'PACKS ENCANTADORES',
            description: 'Las más maravillosas combinaciones de productos emblemas de cada país, vinos, chocolates, espirituosas y finas delicias con identidades que se fusionan para producir nuestra verdadera meta: ENCANTARTE.',
            link: '/Comercial',
        },
        {
            id: 4,
            image: '/Card-Arte.jpeg',
            text: 'EL ENCANTO DE LOS PUEBLOS',
            description: 'La cultura y EL ARTE configuran la verdadera identidad y la diversidad de los pueblos que componen el crisol latinoamericano, todo bajo el matiz de la belleza y la inmortalidad plasmada en una obra que constituyen un auténtico TESORO.',
            link: '/Rubros/Arte',
        },
        {
            id: 5,
            image: '/Card-Derivados.jpeg',
            text: 'DERIVADOS ENCANTADOS',
            description: 'De cada producto consolidado y reconocido como deleite se han explorado y elaborado un sin fin de usos maravillosos y hasta novedosos, pues bien, hacia allá vamos con nuestras ansias de descubrir y comunicar las deslumbrantes posibilidades.',
            link: '/Rubros/Derivados',
        },
        {
            id: 6,
            image: 'Card-Noticias.jpeg',
            text: 'NOTICIAS QUE ENCANTAN',
            description: 'Descubrirás, te informarás y asombrarás con las novedades que nuestro equipo periodístico extraerá en su incansable recorrido por los caminos de los placeres latinoamericanos, propuestas regionales, nuevos productos, ferias, congresos y acontecimientos relevantes.',
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
