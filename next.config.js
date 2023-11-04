//** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['firebasestorage.googleapis.com'],
    },
    output: {
        // Ruta relativa a la carpeta del proyecto donde se exportará la aplicación.
        // En tu caso, deseas exportar a la carpeta 'out'.
        outputPath: 'out',
    },
};

module.exports = nextConfig;
