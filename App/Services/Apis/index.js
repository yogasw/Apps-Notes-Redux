import xhr from './axios'
//ulr, Method, data, headler
import {URL_GET_CATEGORIES, URL_NOTES} from "../../Configs/Apis";

export const getNotes = (search = '') => {
    let url = `${URL_NOTES}?search=${search}`;
    console.log("url adalah " + url);
    return xhr(url, "GET");
};

export const postNote = (data) => {
    return xhr(URL_NOTES, "POST", data);
};
export const getCategories = () => {
    return xhr(URL_GET_CATEGORIES, "GET");
};
export const patchNotes = (id, data) => {
    return xhr(URL_NOTES + '/' + id, "PATCH", data);
};

export const deleteNote = (id) => {
    return xhr(URL_NOTES + '/' + id, "DELETE");
};
