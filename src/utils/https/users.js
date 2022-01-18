import axios from "axios";

const profile = process.env.REACT_APP_HOST + "/users";
const token = JSON.parse(localStorage.getItem("vehicle-rental-token"));
export const usersProfile = () => {
    return axios.get(profile, {
        headers: {
            "x-access-token": token,
        },
    });
};

const editProfile = process.env.REACT_APP_HOST = "/users";
export const editUsers = (body) => {
    return axios.patch(editProfile, body);
}

const userById = process.env.REACT_APP_HOST = "/users/:id";
export const getUsersById = (body) => {
    return axios.get(userById, body);
}