const { override, 
        fixBabelImports,
        addLessLoader,
        addWebpackAlias,
     } = require('customize-cra');

const path = require('path');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    addLessLoader({
        javascriptEnable: true,
        modifyVars: { '@brand-primary': '#1DA57A' },
    }),
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
        'assets': '@/assets',
        'components': '@/components',
        'hocs': '@/hocs',
        'router': '@/router',
        'views': '@/views',

    }),
);
