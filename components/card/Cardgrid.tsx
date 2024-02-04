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
            text: 'SABORES QUE ENCANTAN',
            description: 'Cocinas con identidad y aquellas por descubrir, cultivos autóctonos y por supuesto, las bebidas, elixires que maridan con la vida misma y que dieron la vuelta al mundo desde Latinoamérica.',
            link: '/Rubros/Gastronomia',
        },
        {
            id: 2,
            image: 'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Card-GiraEncantadora.jpeg?alt=media&token=69cb7ab6-65d6-4e50-92ed-edf1859c1f73&_gl=1*10f66ik*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5OTExMDUwMy44LjEuMTY5OTExMTkwMC4yLjAuMA.',
            text: 'UNA GIRA ENCANTADORA',
            description: 'Viajar, recorrer y descubrir las rutas de los placeres que conjugan bellezas naturales, templos de elaboraciones deliciosas, sus historias, sus presentes y sus próximos pasos, en la incomparable América latina.',
            link: '/Rubros/Turismo',
        },
        {
            id: 3,
            image: 'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Card-Packs.jpeg?alt=media&token=42f81a1b-03a5-4363-b9e6-bfdbc5b99f75&_gl=1*lpruoe*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5ODkwMTU0NC42LjEuMTY5ODkwMTc1OC4yOC4wLjA.',
            text: 'PACKS ENCANTADORES',
            description: 'Las más maravillosas combinaciones de productos emblemas de cada país, vinos, chocolates, espirituosas y finas delicias con identidades que se fusionan para producir nuestra verdadera meta: ENCANTARTE.',
            link: '/Comercial',
        },
        {
            id: 4,
            image: 'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Card-Arte.jpeg?alt=media&token=32ca551c-80e0-4834-b998-6c917520aabc&_gl=1*1wbhl4s*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5ODkwMTU0NC42LjEuMTY5ODkwMTU4Ny4xNy4wLjA.',
            text: 'EL ENCANTO DE LOS PUEBLOS',
            description: 'La cultura y EL ARTE configuran la verdadera identidad y la diversidad de los pueblos que componen el crisol latinoamericano, todo bajo el matiz de la belleza y la inmortalidad plasmada en una obra que constituyen un auténtico TESORO.',
            link: '/Rubros/Arte',
        },
        {
            id: 5,
            image: 'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Card-Derivados.jpeg?alt=media&token=f62072dc-5e85-4235-af3a-22b61cf23c0f&_gl=1*1b0ml6p*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5ODkwMTU0NC42LjEuMTY5ODkwMTYxOS42MC4wLjA.',
            text: 'DERIVADOS ENCANTADOS',
            description: 'De cada producto consolidado y reconocido como deleite se han explorado y elaborado un sin fin de usos maravillosos y hasta novedosos, pues bien, hacia allá vamos con nuestras ansias de descubrir y comunicar las deslumbrantes posibilidades.',
            link: '/Rubros/Derivados',
        },
        {
            id: 6,
            image: 'https://firebasestorage.googleapis.com/v0/b/un-encanto-latinoamericano.appspot.com/o/Card-Noticias.jpeg?alt=media&token=a0c28db2-6823-45fe-95a6-dd9f671e12ab&_gl=1*ccnr0p*_ga*MTQ4ODY2MzM3NS4xNjk0Mjk3MzIx*_ga_CW55HF8NVT*MTY5ODkwMTU0NC42LjEuMTY5ODkwMTcyNi42MC4wLjA.',
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
