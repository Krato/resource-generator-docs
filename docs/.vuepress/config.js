module.exports = {
    title: 'Nova Resource Generator',
    description: 'Master Your Universe',
    base: '/resource-generator-docs/',
    serviceWorker: true,
    head: [
        [
            'link', {
                href: 'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,800,800i,900,900i',
                rel: 'stylesheet',
                type: 'text/css',
            },
        ],
    ],
    toc: { includeLevel: [1, 2] },
    theme: 'yuu',
    themeConfig: {
        // logo: '/assets/img/logo.svg',
        displayAllHeaders: false,
        sidebarDepth: 0,

        nav: [
            {text: '1.0', link: '/1.0/'},
            {text: 'GitHub', link: 'https://github.com/cloudstudio/resource-generator'},
        ],

        sidebar: {
            '/1.0/': require('./1.0'),
        },

        yuu: {
            colorThemes: ['blue', 'red'],
        },
        lastUpdated: false,
    },
    markdown: {
        lineNumbers: true
    }
}