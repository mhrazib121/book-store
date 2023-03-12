import { EDITID } from "./actionTypes"

export const getEditId = (id) => {
    return {
        type: EDITID,
        payload: id
    };
};