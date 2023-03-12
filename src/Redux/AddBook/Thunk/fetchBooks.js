import { loaded } from "../action";


const fetchBooks = async (dispatch) => {
    const res = await fetch("http://localhost:9000/books");
    const books = await res.json();

    dispatch(loaded(books));

};

export default fetchBooks;