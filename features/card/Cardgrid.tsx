import Card from './Card';
import styles from '../card/Card.module.css'

const CardGrid = () => {
    const cards = [
        {
            id: 1,
            image: '/vinos-y-alimentos.jpeg',
            text: 'Vinos y Alimentos',
            description: 'Explora el mundo con nosotros: Turismo de élite a tu alcance en esta exclusiva sección',
            link: '/ruta-de-enlace-1',
        },
        {
            id: 2,
            image: '/turismo.jpg',
            text: 'Turismo',
            description: 'Sabores que conquistan: Explora nuestra selección de bebidas y alimentos irresistibles',
            link: '/ruta-de-enlace-2',
        },
        {
            id: 3,
            image: '/oportunidades.jpeg',
            text: 'Oportunidades',
            description: 'Explora el sendero de las posibilidades: Donde los sueños encuentran su camino en nuestra sección de Oportunidades',
            link: '/ruta-de-enlace-3',
        },
    ];

    return (
        <div className={styles.cardGrid}>
            {cards.map((card) => (
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
