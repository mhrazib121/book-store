import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BookList from './BookList';
import AddBookForm from './AddBookFrom';

const MainSection = () => {
    // const [editBookId, setEditId] = useState("");
    const editBook = useSelector((state) => state.editId);
    const books = useSelector((state) => state.books);
    const editableBook = books.filter((book) => editBook.editId === book.id);

    return (
        <div class="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
            <BookList />
            <div>
                {editBook !== "" ?
                    <AddBookForm editableBook={editableBook[0]} /> :
                    <AddBookForm />
                }
            </div>
        </div>
    );
};

export default MainSection;