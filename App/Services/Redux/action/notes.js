//ulr, Method, data, headler
import {URL_GET_CATEGORIES, URL_NOTES} from "../../../Configs/Apis";
import xhr from './axios'


export const getNotes = (search, sort, page, searchBy) => {

    let url = `${URL_NOTES}?search=${(search == undefined) ? '' : search}&sort_by=${(sort == undefined) ? 'desc' : sort}&page=${(page == undefined) ? 1 : page}&limit=10&search_by=${(searchBy == undefined) ? 'title' : searchBy}`;
    return {
        type: (page == 1 || page == undefined) ? 'GET_NOTES' : 'GET_MORE_NOTES',
        payload: xhr(url, "GET")
    };
};

export const postNote = (data) => {
    return {
        type: 'INSERT_NOTES',
        payload: xhr(URL_NOTES, "POST", data),
    };

};

export const getCategories = () => {
    return {
        type: 'GET_CATEGORIES',
        payload: xhr(URL_GET_CATEGORIES, "GET")
    };
};

export const patchNotes = (id, data) => {
    return {
        type: 'UPDATE_NOTES',
        payload: xhr(URL_NOTES + '/' + id, "PATCH", data)
    };
};

export const deleteNote = (id) => {
    return {
        type: 'DELETE_NOTES',
        payload: xhr(URL_NOTES + '/' + id, "DELETE")
    };
};
export const insertCategories = (data) => {
    return {
        type: 'INSERT_CATEGORIES',
        payload: xhr(URL_GET_CATEGORIES + '/', "POST", data)
    };
};

export const deleteCategories = (id) => {
    return {
        type: 'DELETE_CATEGORIES',
        payload: xhr(URL_GET_CATEGORIES + '/' + id, 'DELETE')
    }
};



