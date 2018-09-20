export const AppConstants = {
    fetchAPI: '/api?query=[:query]:[:sortOrder]:category:[:category]&currentPage=[:currentPage]&pageSize=[:pageSize]',
    query: '',
    totalItems: 0, // total items
    currentPage: 0,  // current page number
    pageSize: 12, // items per page
    category: 1,  // category all = 1
    maxSize: 10,
    sortOrder: 'relevance',
    itemsPerPageConstant: [{
        label: '12 Articles',
        value: 12
    }, {
        label: '24 Articles',
        value: 24
    }, {
        label: '36 Articles',
        value: 36
    }, {
        label: '48 Articles',
        value: 48
    }],
    sortOrderConstant: [{
        label: 'Relevance',
        value: 'relevance'
    }, {
        label: 'Price (Ascending)',
        value: 'price-asc'
    }, {
        label: 'Price (Descending)',
        value: 'price-desc'
    }, {
        label: 'Name (Ascending)',
        value: 'name-asc'
    }, {
        label: 'Name (Descending)',
        value: 'name-desc'
    }],
    socialIconConstant: [{
        name: 'Facebook',
        iconClass: 'fa fa-facebook-square fa-2x',
        // iconColor: '#3b5998',
        iconColor: 'white',
        link: 'https://www.real.de'
    }, {
        name: 'Instagram',
        iconClass: 'fa fa-instagram fa-2x',
        // iconColor: '#262626',
        iconColor: 'white',
        link: 'https://www.real.de'
    }, {
        name: 'Twitter',
        iconClass: 'fa fa-twitter-square fa-2x',
        // iconColor: '#1da1f2',
        iconColor: 'white',
        link: 'https://www.real.de'
    }, {
        name: 'Youtube',
        iconClass: 'fa fa-youtube-square fa-2x',
        // iconColor: '#ff0000',
        iconColor: 'white',
        link: 'https://www.real.de'
    }]
}