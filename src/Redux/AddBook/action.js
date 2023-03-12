import { ADDED, DELETED, EDITED, LOADED } from "./actionTypes";

export const addBook = (bookData) => {
    return {
        type: ADDED,
        payload: bookData,
    }
};

export const loaded = (books) => {
    return {
        type: LOADED,
        payload: books,
    };
};
export const deleted = (id) => {
    return {
        type: DELETED,
        payload: id,
    };
};
export const edited = (book) => {
    return {
        type: EDITED,
        payload: book,
    };
};