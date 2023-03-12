import { addBook, edited } from "../action";

const updateBook = ({ name, author, imgUrl, price, rating, featured, id }) => {
    return async (dispatch) => {
        const res = await fetch(`http://localhost:9000/books/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                id: id,
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
        dispatch(edited(book));
    }
};

export default updateBook;