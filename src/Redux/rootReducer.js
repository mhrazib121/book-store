import { combineReducers } from "redux";
import bookAddReducer from "./AddBook/reducer";
import editReducer from "./Edit/reducer";
import filterReducer from "./Filter/reducer";

const rootReducer = combineReducers({
    books: bookAddReducer,
    filters: filterReducer,
    editId: editReducer,
});

export default rootReducer;