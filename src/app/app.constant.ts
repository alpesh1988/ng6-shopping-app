export const AppConstants = {
    fetchAPI: '/api?query=[:query]:[:sortOrder]:category:[:category]&currentPage=[:currentPage]&pageSize=[:pageSize]',
    query: 'sugar',
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
    }]
}