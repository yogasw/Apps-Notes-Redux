export const onPage = (page) => {
    return {
        type: 'ON_PAGE',
        payload: page
    }
};

export const search = (string) => {
    return {
        type: 'SEARCH',
        payload: string
    }
};

export const searchBy = (by) => {
    return {
        type: 'SEARCH_BY',
        payload: by
    }
};
export const sortBy = (by) => {
    return {
        type: 'SORT_BY',
        payload: by
    }
};
