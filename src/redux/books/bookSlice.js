import { createSlice } from '@reduxjs/toolkit';
import bookList from '../../bookList';

const initialState = {
  bookList,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const {
        title, author, category,
      } = action.payload;
      const newBook = {
        item_id: `item${state.bookList.length + 1}`,
        title,
        author,
        category,
      };
      state.bookList.push(newBook);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      console.log(bookId);
      return {
        ...state,
        bookList: state.bookList.filter((book) => book.item_id !== bookId),
      };
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
