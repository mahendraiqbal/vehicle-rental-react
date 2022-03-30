import axios from "axios";

const URL = process.env.REACT_APP_HOST + "/auth";
export const login = (body) => {
    return axios.post(URL, body);
}

const register = process.env.REACT_APP_HOST + "/auth/new";
export const regitser = (body) => {
    return axios.post(register, body);
}

const url = process.env.REACT_APP_HOST + "/auth/logout";
export const logout = (token) => {
    return axios.delete(url, {
        headers: {
            "x-access-token": token,
        },
    });
};

const forgotPassURL = process.env.REACT_APP_HOST + "/auth/forgot-password";
export const forgotPass = (body) => {
  return axios.post(forgotPassURL, body);
};

const verifyURL = process.env.REACT_APP_HOST + "/auth/checkOTP";
export const verifyOTP = (body) => {
  return axios.post(verifyURL, body);
};

const resetURL = process.env.REACT_APP_HOST + "/auth/resetPassword";
export const resetPassword = (body) => {
  return axios.post(resetURL, body);
};