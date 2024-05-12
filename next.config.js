/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.alias['@'] = path.resolve(__dirname);
        }
        return config;
    },
};
module.exports = nextConfig;