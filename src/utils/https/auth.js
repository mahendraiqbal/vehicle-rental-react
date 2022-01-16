import axios from "axios";

const URL = process.env.REACT_APP_HOST + "/auth";
export const login = (body) => {
    // console.log(body)
    // console.log(URL)
    return axios.post(URL, body);
}

const register = process.env.REACT_APP_HOST + "/auth/new";
export const regitser = (body) => {
    return axios.post(register, body);
}