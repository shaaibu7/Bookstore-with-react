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
      <div className={styles.display}>
      <div className={styles.info}>
      <p className={styles.school}>{category}</p>
      <h3 className={styles.bookName}>{title}</h3>
      <p className={styles.author}>{author}</p>
      </div>
      <div className={styles.btns}>
      <button type='button'>Comments</button>
      <div className={styles.gery}></div>
      <button type="button" data-id={id} onClick={removeBookHandler}>Remove</button>
      <div className={styles.gery}></div>
      <button type='button'>Edit</button>
      </div>
      </div>

      <div className={styles.contain}>
        <div className={styles.ovalContainer}>
          <div className={styles.Oval} />
        </div>
        <div>
          <div className={styles.completion}>98%</div>
          <div className={styles.completed}>completed</div>
        </div>
      </div>

      <div className={styles.bar}></div>
      <div className={styles.chapterContainer}>
        <div className={styles.chapterone}>CURRENT CHAPTER</div>
        <div className={styles.chapter}>Chapter Twelve</div>
        <div className={styles.chapterBtn}><span className={styles.update}>UPDATE PROGRESS</span></div>
      </div>
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
