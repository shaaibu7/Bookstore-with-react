/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { booksActions, deleteBook } from '../redux/books/bookSlice';
import styles from './styles/Book.module.css';

const Book = ({
  id, category, title, author,
}) => {
  const dispatch = useDispatch();

  const removeBookHandler = (event) => {
    const { id } = event.target.dataset;
    dispatch(booksActions.removeBook(id))
    dispatch(deleteBook(id));
  }
  return (
    <div className={styles.item}>
      <p>{category}</p>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button" data-id={id} onClick={removeBookHandler}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  // category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
