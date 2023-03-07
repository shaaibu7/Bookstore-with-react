import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');

  const handleAddBook = (e) => {
    e.preventDefault();
    dispatch(addBook({ bookTitle, bookAuthor }));
    setBookTitle('');
    setBookAuthor('');
  };

  return (
    <form onSubmit={handleAddBook}>
      <h3>ADD NEW BOOK</h3>
      <input
        value={bookTitle}
        onChange={(e) => setBookTitle(e.target.value)}
        type="text"
        placeholder="Book Title"
        required
      />
      <input
        value={bookAuthor}
        onChange={(e) => setBookAuthor(e.target.value)}
        type="text"
        placeholder="Book Author"
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
};
export default Form;
