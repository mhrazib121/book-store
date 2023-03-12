import { ADDED, DELETED, EDITED, LOADED } from "./actionTypes";
import { initialState } from "./initialState";

const nextId = (state) => {
    const maxId = state.reduce((maxNum, product) => Math.max(product.id, maxNum), -1);
    return maxId + 1;
}

const bookAddReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            const { name, author, price, rating, thumbnail, featured } = action.payload;
            return [
                ...state,
                {
                    id: nextId(state),
                    name: name,
                    author: author,
                    price: price,
                    rating: rating,
                    thumbnail: thumbnail,
                    featured: featured,
                }
            ]
        case EDITED:
            // const { name, author, price, rating, thumbnail, featured } = action.payload;
            return state.map((book) => {
                if (book.id === action.payload.id) {
                    return {
                        ...book,
                        id: action.payload.id,
                        name: action.payload.name,
                        author: action.payload.author,
                        price: action.payload.price,
                        rating: action.payload.rating,
                        thumbnail: action.payload.thumbnail,
                        featured: action.payload.featured,

                    }
                }
                return book;
            })

        case LOADED:
            return action.payload;

        case DELETED:
            return state.filter((book) => book.id !== action.payload);


        default:
            return state;
    }
};

export default bookAddReducer;