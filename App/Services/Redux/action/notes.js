//ulr, Method, data, headler
import {URL_GET_CATEGORIES, URL_NOTES} from "../../../Configs/Apis";
import xhr from './axios'

export const getNotes = (search = '', sort = 'DESC') => {
    let url = `${URL_NOTES}?search=${search}&sort=${sort}`;
    return {
        type: 'GET_NOTES',
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
    return xhr(URL_NOTES + '/' + id, "PATCH", data);
};

export const deleteNote = (id) => {
    return xhr(URL_NOTES + '/' + id, "DELETE");
};
