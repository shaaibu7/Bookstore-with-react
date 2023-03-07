import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/bookSlice';
import styles from './styles/Book.module.css';

const Book = ({
  id, category, title, author,
}) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.item}>
      <p>{category}</p>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
