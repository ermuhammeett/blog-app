/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
    images: {
        loader: 'custom',
        loaderFile: './lib/imageLoader.js',
    },
}

module.exports = nextConfig
