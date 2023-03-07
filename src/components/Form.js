import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { addBook } from '../redux/books/bookSlice';
import styles from './styles/Form.module.css';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = (e) => {
    e.preventDefault();
    dispatch(addBook({ title, author }));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleAddBook}>
      <h3>ADD NEW BOOK</h3>
      <input
        className={styles.form}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Book Title"
        required
      />
      <input
        className={styles.form}
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        type="text"
        placeholder="Book Author"
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
};
export default Form;
