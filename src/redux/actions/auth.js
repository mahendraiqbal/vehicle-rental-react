import { ACTION_STRING } from "./actionString";
import { login } from "../../utils/https/auth"

export const loginAction = (body) => {
    return {
        type: ACTION_STRING.loginAuth,
        payload: login(body),
    };
};