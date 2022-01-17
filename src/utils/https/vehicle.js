import axios from "axios";

const popularVehicle = process.env.REACT_APP_HOST + "/transactions/popular"
export const popular = () => {
    return axios.get(popularVehicle)
}

const getVehicle = process.env.REACT_APP_HOST + "/vehicles"
export const vehicle = () => {
    return axios.get(getVehicle)
}