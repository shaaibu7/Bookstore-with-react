import Book from './Book';
import Form from './Form';
import styles from './styles/Books.module.css';

const bookList = [
  { id: 1, title: 'The morning', author: 'James Alton' },
  { id: 2, title: 'The quest', author: 'Philips Stocker' },
];

const Books = () => (
  <section className={styles.books}>
    {
        bookList.map((book) => (<Book key={book.id} title={book.title} author={book.author} />))
      }
    <Form />
  </section>
);

export default Books;
