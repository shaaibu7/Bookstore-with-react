import React from 'react';
import styles from './styles/Book.module.css';

const Book = (book) => {
  const { title, author } = book;
  return (
    <div className={styles.item}>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button">Remove</button>
    </div>
  );
};

export default Book;
