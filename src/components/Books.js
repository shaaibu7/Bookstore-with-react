import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';
import styles from './styles/Books.module.css';
import { getBooks } from '../redux/books/bookSlice';

const Books = () => {
  const { books, isLoading } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  let display;
  if (isLoading) display = <h3>Loading....</h3>;

  if (books?.length > 0) {
    display = books.map((book) => (
      <Book
        key={book.item_id}
        id={book.item_id}
        title={book.title}
        author={book.author}
        category={book.category}
      />
    ));
  }

  if (!isLoading && books.length === 0) {
    display = <h3>No books to display...</h3>;
  }
  return (
    <>
      <section className={styles.books}>
        {display}
      </section>
      <Form />
    </>
  );
};

export default Books;
