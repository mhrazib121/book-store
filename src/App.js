import './App.css';
import { Provider, useSelector } from 'react-redux';
import store from './Redux/store';
import Navbar from './Components/Navbar';
import AddBookForm from './Components/AddBookFrom';
import BookList from './Components/BookList';
import { useState } from 'react';
import MainSection from './Components/MainSection';

function App() {

  return (
    <Provider store={store}>
      <Navbar />
      <main class="py-12 2xl:px-6">

        <MainSection />

      </main>
    </Provider>
  );
}

export default App;
