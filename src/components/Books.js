import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';
import styles from './styles/Books.module.css';

const Books = () => {
  const { bookList } = useSelector((state) => state.books);
  return (
    <section className={styles.books}>
      {
        bookList.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))
        }
      <Form />
    </section>
  );
};

export default Books;
