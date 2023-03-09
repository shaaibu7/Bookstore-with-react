import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { booksActions, postBook } from '../redux/books/bookSlice';
import styles from './styles/Form.module.css';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const onSetTitle = (event) => {
    setTitle(event.target.value);
  };

  const onSetAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;

    const bookData = {
      item_id: uuidv4(),
      title,
      author,
      category: 'Fiction',
    };
    dispatch(booksActions.addBook(bookData));
    dispatch(postBook(bookData));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h3>ADD NEW BOOK</h3>
      <input
        className={styles.form}
        value={title}
        onChange={onSetTitle}
        type="text"
        placeholder="Book Title"
        required
      />
      <input
        className={styles.form}
        value={author}
        onChange={onSetAuthor}
        type="text"
        placeholder="Book Author"
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
};
export default Form;
