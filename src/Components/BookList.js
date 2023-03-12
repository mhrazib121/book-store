import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchBooks from '../Redux/AddBook/Thunk/fetchBooks';
import { toggled } from '../Redux/Filter/action';
import BookCard from './BookCard';

const BookList = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books);
    const filters = useSelector((state) => state.filters);

    useEffect(() => {
        dispatch(fetchBooks);
    }, [dispatch]);

    const filterBySearch = (book) => {
        if (filters.searchText !== "") {
            return (book.name.toLowerCase().includes(filters.searchText.toLowerCase()))
        }
        return true;
    };

    const filterByStatus = (book) => {
        if (filters.status === "Featured") {
            return book.featured;
        };
        return book
    };

    return (
        <div class="order-2 xl:-order-1">
            <div class="flex items-center justify-between mb-12">
                <h4 class="mt-2 text-xl font-bold">Book List</h4>

                <div class="flex items-center space-x-4">
                    <button class={`filter-btn ${filters.status === "All" ? "active-filter" : null}`} id="lws-filterAll"
                        onClick={() => dispatch(toggled("All"))}
                    >All</button>
                    <button class={`filter-btn ${filters.status === "Featured" ? "active-filter" : null}`} id="lws-filterFeatured"
                        onClick={() => dispatch(toggled("Featured"))}
                    >Featured</button>
                </div>
            </div>
            <div class="lws-bookContainer">
                {/* <!-- Card 1 --> */}
                {books
                    .filter(filterByStatus)
                    .filter(filterBySearch)
                    .map((book) => <BookCard key={book.id} book={book} />)}

            </div>
        </div>
    );
};

export default BookList;