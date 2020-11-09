const path = require('path');

const customAlias = {
    '@store': path.resolve(__dirname, 'store/'),
    '@assets': path.resolve(__dirname, 'public/'),
    '@components': path.resolve(__dirname, 'components/')
};

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
        config.resolve.alias = { ...config.resolve.alias, ...customAlias };

        return config
    },
    env: {
        API_URL: 'http://localhost:4000/movies',
        API_SEARCH_ATTR_NAME: 'search',
        API_LIMIT_ATTR_NAME: 'limit',
        API_SORT_BY_ATTR_NAME: 'sortBy',
        API_SORT_ORDER_ATTR_NAME: 'sortOrder',
        API_SORT_ORDER_DEFAULT_VALUE: 'asc',
        API_FILTER_ATTR_NAME: 'filter'
    }
}
