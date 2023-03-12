import { SEARCHED, TOGGLED } from "./actionTypes"

export const toggled = (text) => {
    return {
        type: TOGGLED,
        payload: text
    };
};

export const search = (text) => {
    return {
        type: SEARCHED,
        payload: text,
    };
};