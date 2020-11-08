const path = require('path');

const customAlias = {
    '@store': path.resolve(__dirname, 'src/store/'),
    '@assets': path.resolve(__dirname, 'src/assets/'),
    '@components': path.resolve(__dirname, 'src/components')
};

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
        config.resolve.alias = { ...config.resolve.alias, ...customAlias };
        config.module.rules.push(
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            }
        );
        return config
    }
}
