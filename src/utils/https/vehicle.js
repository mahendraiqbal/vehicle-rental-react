import axios from "axios";

const popularVehicle = process.env.REACT_APP_HOST + "/transactions/popular";
export const popular = () => {
    return axios.get(popularVehicle)
}

const getVehicle = process.env.REACT_APP_HOST + "/vehicles";
export const vehicle = () => {
    return axios.get(getVehicle)
}

const postVehicle = process.env.REACT_APP_HOST + "/vehicles";
export const addVehicle = (body) => {
    return axios.post(postVehicle, body);
}

const editVehicle = process.env.REACT_APP_HOST + "/vehicles";
export const patchVehicle = (body) => {
    return axios.patch(editVehicle, body);
}