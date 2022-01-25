import axios from "axios";

const popularVehicle = axios.get(
    process.env.REACT_APP_HOST + "/transactions/popular"
)

const cardPopular = process.env.REACT_APP_HOST + "/transactions/popular?&limit=4";
export const popular = () => {
    return axios.get(cardPopular)
};

const getVehicle = process.env.REACT_APP_HOST + "/vehicles";
export const vehicle = () => {
    return axios.get(getVehicle)
};

const postVehicle = process.env.REACT_APP_HOST + "/vehicles";
export const addVehicle = (body) => {
    return axios.post(postVehicle, body);
};

const editVehicle = process.env.REACT_APP_HOST + "/vehicles";
export const patchVehicle = (body) => {
    return axios.patch(editVehicle, body);
};

const getCar = axios.get(
    process.env.REACT_APP_HOST + "/vehicles?page=1&limit=4&type=car"
)

const getMotorbike = axios.get(
    process.env.REACT_APP_HOST + "/vehicles?page=1&limit=4&type=motorbike"
)

const getBike = axios.get(
    process.env.REACT_APP_HOST + "/vehicles?page=1&limit=4&type=bicycle"
)

export const allVehicle = () => {
    return axios.all([popularVehicle, getCar, getMotorbike, getBike])
}
