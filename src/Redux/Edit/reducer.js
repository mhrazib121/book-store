import { EDITID } from "./actionTypes";
import { initialState } from "./initialState";

const editReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDITID:
            return {
                ...state,
                editId: action.payload,
            }
        default:
            return state;
    }
};

export default editReducer;