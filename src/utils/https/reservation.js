import axios from "axios";

export const reservation = (body, token) => {
    const url = `${process.env.REACT_APP_HOST}/transactions`;
    return axios.post(url, body, {
        headers: {
            'x-access-token': token,
        }
    });
};

export const getTransactions = (token) => {
    const url = process.env.REACT_APP_HOST + '/transactions/byId';
    return axios.get(url, {
        headers: {
            "x-access-token": token,
        }
    });
};

export const deleteTransactions = (id) => {
    const url = process.env.REACT_APP_HOST + '/transactions';
    return axios.delete(url + id)
}