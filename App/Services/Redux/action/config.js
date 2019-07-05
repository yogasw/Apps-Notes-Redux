export const onPage = (page) => {
    return {
        type: 'ON_PAGE',
        payload: page
    }
};


export const searchBy = (by) => {
    return {
        type: 'SEARCH_BY',
        payload: by
    }
};
