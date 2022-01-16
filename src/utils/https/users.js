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