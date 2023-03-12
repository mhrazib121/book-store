import { SEARCHED, TOGGLED } from "./actionTypes";
import { initialState } from "./initialState";

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLED:
            return {
                ...state,
                status: action.payload,
            }
        case SEARCHED:
            return {
                ...state,
                searchText: action.payload,
            }
        default:
            return state;
    }
};

export default filterReducer;