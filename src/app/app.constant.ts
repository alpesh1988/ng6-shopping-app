export const AppConstants = {
    fetchAPI: '/api?query=[:query]:[:sortOrder]:category:[:category]&currentPage=[:currentPage]&pageSize=[:pageSize]',
    query: 'sugar',
    totalItems: 0, // total items
    currentPage: 0,  // current page number
    pageSize: 12, // items per page
    category: 1,  // category all = 1
    maxSize: 10,
    sortOrder: 'relevance'
}