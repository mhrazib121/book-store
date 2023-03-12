import { addBook } from "../action";

const addNewBook = ({ name, author, imgUrl, price, rating, featured }) => {
    return async (dispatch) => {
        const res = await fetch("http://localhost:9000/books", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                author: author,
                price: price,
                rating: rating,
                thumbnail: imgUrl,
                featured: featured,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const book = await res.json();
        dispatch(addBook(book));
    }
};

export default addNewBook;