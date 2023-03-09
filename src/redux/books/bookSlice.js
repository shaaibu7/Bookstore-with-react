/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/k8MdY5XhccnfoorlnLjO';

export const postBook = createAsyncThunk('books/postBook',
  async (bookData, thunkApi) => {
    try {
      const resData = await axios.post(`${url}/books`, bookData);
      return resData.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error?.data?.message || 'Something went wrong');
    }
  });

export const getBooks = createAsyncThunk('books/getBooks', async (_, thunkApi) => {
  try {
    const res = await axios(`${url}/books`);
    return res.data;
  } catch (error) {
    return thunkApi.rejectWithValue(
      error?.data?.message || 'Something went wrong',
    );
  }
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (id, thunkApi) => {
  try {
    const res = await axios.delete(`${url}/books/${id}`);
    return res.data;
  } catch (error) {
    return thunkApi.rejectWithValue(
      error?.data?.message || 'Something went wrong',
    );
  }
});

const initialState = {
  books: [],
  isLoading: false,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.books = [...state.books, newBook];
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      return {
        ...state,
        books: state.books.filter((book) => book.item_id !== bookId),
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postBook.pending, (state) => {
      state.isLoading = true;
    })
      .addCase(postBook.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(postBook.rejected, (state) => {
        state.isLoading = true;
      });
    builder.addCase(getBooks.pending, (state) => {
      state.isLoading = true;
    })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        const resData = action.payload;
        const newBookArray = Object.keys(resData).map((id) => {
          const bookObj = resData[id][0];
          bookObj.item_id = id;
          return bookObj;
        });
        state.books = newBookArray;
      })
      .addCase(getBooks.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const booksActions = bookSlice.actions;
export default bookSlice.reducer;
