import xhr from './axios'
//ulr, Method, data, headler
import {URL_GET_NOTES} from "../../Configs/Apis";

export const getNotes = () => {
    return xhr(URL_GET_NOTES, "GET");
};