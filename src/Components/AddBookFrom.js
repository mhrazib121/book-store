import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import addNewBook from '../Redux/AddBook/Thunk/addNewBook';
import updateBook from '../Redux/AddBook/Thunk/updateBook';
import { getEditId } from '../Redux/Edit/action';

const AddBookFrom = ({ editableBook }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [price, setPrice] = useState(null);
    const [rating, setRating] = useState(null);
    const [featured, setFeatured] = useState(false);

    useEffect(() => {
        setName(editableBook?.name || "");
        setAuthor(editableBook?.author);
        setPrice(editableBook?.price);
        setRating(editableBook?.rating);
        setFeatured(editableBook?.featured);
        setImgUrl(editableBook?.thumbnail);

    }, [editableBook])

    const addBookHandler = (e) => {
        e.preventDefault();

        dispatch(addNewBook({
            name,
            author,
            imgUrl,
            price,
            rating,
            featured
        }));

        // From reset
        setName("");
        setAuthor("");
        setImgUrl("");
        setPrice(null);
        setRating(null);
        setFeatured(false);
    };

    const bookUpdateHandler = (e) => {
        e.preventDefault();

        dispatch(updateBook({
            id: editableBook.id,
            name,
            author,
            imgUrl,
            price,
            rating,
            featured
        }));

        dispatch(getEditId(""))

        // From reset
        setName("");
        setAuthor("");
        setImgUrl("");
        setPrice("");
        setRating("");
        setFeatured(false);
    };

    return (
        <div class="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
            <h4 class="mb-8 text-xl font-bold text-center">Add New Book</h4>
            <form class="book-form">
                <div class="space-y-2">
                    <label for="name">Book Name</label>
                    <input required class="text-input" type="text" id="input-Bookname" name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div class="space-y-2">
                    <label for="category">Author</label>
                    <input required class="text-input" type="text" id="input-Bookauthor" name="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>

                <div class="space-y-2">
                    <label for="image">Image Url</label>
                    <input required class="text-input" type="text" id="input-Bookthumbnail" name="thumbnail"
                        value={imgUrl}
                        onChange={(e) => setImgUrl(e.target.value)}
                    />
                </div>

                <div class="grid grid-cols-2 gap-8 pb-4">
                    <div class="space-y-2">
                        <label for="price">Price</label>
                        <input required class="text-input" type="number" id="input-Bookprice" name="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <div class="space-y-2">
                        <label for="quantity">Rating</label>
                        <input required class="text-input" type="number" id="input-Bookrating" name="rating" min="1" max="5"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        />
                    </div>
                </div>

                <div class="flex items-center">
                    <input id="input-Bookfeatured" type="checkbox" name="featured" class="w-4 h-4"
                        value={featured}
                        checked={featured}
                        onClick={() => setFeatured(!featured)} />
                    <label for="featured" class="ml-2 text-sm"> This is a featured book </label>
                </div>

                {editableBook !== undefined ?
                    <button type="submit" class="submit" id="submit" onClick={(e) => bookUpdateHandler(e)} >Update Book</button>
                    :
                    <button type="submit" class="submit" id="submit" onClick={(e) => addBookHandler(e)} >Add Book</button>
                }
            </form>
        </div>
    );
};

export default AddBookFrom;