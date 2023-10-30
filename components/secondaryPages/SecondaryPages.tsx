import HeaderSecondary from '../headerSecondary/HeaderSecondary'
import Footer from '../footer/Footer'
import React from 'react';
import styles from './SecondaryPages.module.css'
import Proyecto from '../../features/eventos/Eventos/Eventos'
import { COOKIE_NAME_PRERENDER_BYPASS } from 'next/dist/server/api-utils';


interface ISecondaryPages {
    componentName: string;
    descriptionTitle: string
}

const SecondaryPages: React.FC<ISecondaryPages> = ({ componentName, descriptionTitle }) => {
    // Mapea el nombre del componente a su importación real
    const componentMap: { [key: string]: React.ComponentType } = {
        Proyecto: require('../../features/concepto/Proyecto/Proyecto').default,
        QuienesSomos: require('../../features/quienesSomos/QuienesSomos').default,
        VinosYEspirituosas: require('../../features/rubros/VinosYEspirituosas/VinosYEspirituosas').default,
        Infusiones: require('../../features/rubros/Infusiones/Infusiones').default,
        Alimentos: require('../../features/rubros/Alimentos/Alimentos').default,
        Gastronomia: require('../../features/rubros/Gastronomia/Gastronomia').default,
        Derivados: require('../../features/rubros/Derivados/Derivados').default,
        Turismo: require('../../features/rubros/Turismo/Turismo').default,
        NuevosEmprendimientos: require('../../features/rubros/NuevosEmprendimientos/NuevosEmprendimientos').default,
        Arte: require('../../features/rubros/Arte/Arte').default,
        Eventos: require('../../features/eventos/Eventos/Eventos').default,
        Agenda: require('../../features/eventos/Agenda/Agenda').default,
        Imagenes: require('../../features/imagenes/Imagenes/Imagenes').default,
        Regiones: require('../../features/regiones/latinoAmerica/RegionesLatinoAm').default,
        Contacto: require('../../features/contacto/Contacto').default,
        Comercial: require('../../features/comercial/Comercial').default,
        // Agrega aquí más componentes si es necesario
    };

    const Component = componentMap[componentName];

    if (!Component) {
        // Manejar casos en los que el componente no se encuentra
        return <div>Componente no encontrado</div>;
    }

    return (
        <>
            <HeaderSecondary descriptionTitle={descriptionTitle} />
            <div className={styles.component}>
                <Component />
            </div>
            <Footer />
        </>
    );
};

export default SecondaryPages;
