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
        title, author,
      } = action.payload;
      const newBook = {
        item_id: `item${state.bookList.length + 1}`,
        title,
        author,
      };
      // eslint-disable-next-line no-param-reassign
      state.bookList = [...state.bookList, newBook];
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      return {
        ...state,
        bookList: state.bookList.filter((book) => book.item_id !== bookId),
      };
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
