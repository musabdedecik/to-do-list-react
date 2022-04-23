import axios from "axios";
import { LOADING_START, LOADING_END } from "../redux/actions/types";
const API_URL = process.env.NODE_ENV === "development" ? process.env.REACT_APP_DEV_API_URL : process.env.REACT_APP_PROD_API_URL;

export const getQuery = async (path) => {
    try {
        const { data } = await axios.get(`${API_URL}/${path}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return data
    } catch (error) {
        console.error(error);
        return error
    }
};

export const postQuery = async (path, values) => {
    try {
        const { data } = await axios.post(`${API_URL}/${path}`, { ...values }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return data
    } catch (error) {
        console.error(error);
        return error
    }
};

export const deleteQuery = async (path, id) => {
    try {
        const { data } = await axios.delete(`${API_URL}/${path}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return data
    } catch (error) {
        console.error(error);
        return error
    }
};
