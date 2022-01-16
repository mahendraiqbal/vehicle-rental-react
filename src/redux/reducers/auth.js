import { ACTION_STRING } from "../actions/actionString";
import { ActionType } from "redux-promise-middleware";
const initialState = {
    userData: {
        token: JSON.parse(localStorage["vehicle-rental-token"] || null),
        // photo: "",
        // roles_id: 0,
    },
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    err: {}
};

const authReducer = (prevState = initialState, action) => {
    const { loginAuth } = ACTION_STRING;
    const { Pending, Fulfilled, Rejected } = ActionType;
    
    switch (action.type) {
        case loginAuth.concat("_", Pending):
            return {
                ...prevState,
                isPending: true,
                isFulfilled: false,
                isRejected: false,
            };

        case loginAuth.concat("_", Fulfilled):
            const data = action.payload.data;
            const userData = {
                ...prevState.userData,
                token: data.result.result.token,
            }
            // console.log(data)
            // console.log(data.result.result.token)
            return {
                ...prevState,
                isPending: false,
                isFulfilled: true,
                userData,
            };

        case loginAuth.concat("_", Rejected):
            const err = action.payload;
            return {
                ...prevState,
                isPending: false,
                isRejected: true,
                err,
            };
    
        default:
            return prevState;
    }
}

export default authReducer;