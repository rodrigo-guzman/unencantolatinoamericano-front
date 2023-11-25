interface ISubCategories {
    title: string;
    link: string;
}

interface ICategories {
    link: string;
    SubCategories: ISubCategories[];
}

const getCategories = (category: string): ICategories => {
    switch (category) {
        case 'Home':
            return { link: '/', SubCategories: [] };

        case 'Concepto':
            return { link: 'Concepto/Proyecto', SubCategories: [{ title: 'Proyecto', link: 'Concepto/Proyecto' }] };

        case 'Quienes Somos':
            return { link: 'QuienesSomos', SubCategories: [] };

        case 'Rubros':
            return {
                link: '',
                SubCategories: [
                    { title: 'Vinos y Espirituosas', link: 'Rubros/VinosYEspirituosas' },
                    { title: 'Infusiones', link: 'Rubros/Infusiones' },
                    { title: 'Alimentos', link: 'Rubros/Alimentos' },
                    { title: 'Gastronomia', link: 'Rubros/Gastronomia' },
                    { title: 'Derivados', link: 'Rubros/Derivados' },
                    { title: 'Turismo/Enoturismo y Turismo Temático', link: 'Rubros/Turismo' },
                    { title: 'Nuevos Emprendimientos', link: 'Rubros/NuevosEmprendimientos' },
                    { title: 'Arte', link: 'Rubros/Arte' },
                ],
            };

        case 'Regiones':
            return { link: 'Regiones', SubCategories: [{ title: 'LatinoAmerica', link: 'RegionesLatAm' }] };

        case 'Eventos':
            return {
                link: '',
                SubCategories: [
                    { title: 'Eventos', link: 'Eventos/Eventos' },
                    { title: 'Agenda', link: 'Eventos/Agenda' },
                ],
            };

        case 'Imágenes y Videos':
            return { link: 'Imagenes', SubCategories: [] };

        case 'Los Hacedores':
            return { link: 'LosHacedores', SubCategories: [] };
        case 'Comercial':
        case 'Contacto':
            return { link: category, SubCategories: [] };

        default:
            throw new Error(`Categoria no reconocida: ${category}`);
    }
}

export default getCategories;