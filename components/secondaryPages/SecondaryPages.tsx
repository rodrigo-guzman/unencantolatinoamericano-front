import HeaderSecondary from '../headerSecondary/HeaderSecondary'
import Footer from '../footer/Footer'
import React from 'react';

import Proyecto from '../../features/concepto/Proyecto/Proyecto'
import { COOKIE_NAME_PRERENDER_BYPASS } from 'next/dist/server/api-utils';


interface ISecondaryPages {
    componentName: string;
    descriptionTitle: string
}

const SecondaryPages: React.FC<ISecondaryPages> = ({ componentName, descriptionTitle }) => {
    // Mapea el nombre del componente a su importación real
    const componentMap: { [key: string]: React.ComponentType } = {
        Proyecto: require('../../features/concepto/Proyecto/Proyecto').default,
        Body: require('../body/Body').default,
        Footer: require('../footer/Footer').default,
        // Agrega aquí más componentes si es necesario
    };

    const Component = componentMap[componentName];

    if (!Component) {
        // Manejar casos en los que el componente no se encuentra
        return <div>Componente no encontrado</div>;
    }

    console.log('entró al SecondaryPAges')

    return (
        <>
            <HeaderSecondary descriptionTitle={descriptionTitle} />
            <Component />
            <Footer />

        </>
    );
};

export default SecondaryPages;
