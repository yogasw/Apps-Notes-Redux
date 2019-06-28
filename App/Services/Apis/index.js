import xhr from './axios'
//ulr, Method, data, headler
import {URL_GET_CATEGORIES, URL_NOTES} from "../../Configs/Apis";

export const getNotes = () => {
    return xhr(URL_NOTES, "GET");
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
