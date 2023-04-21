import { createSlice } from '@reduxjs/toolkit';
import books from '../../bookItems';

const initialState = {
  books,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    },
    removeBook(state, { payload }) {
      return {
        ...state,
        books: state.books.filter((book) => book.item_id !== payload.itemId),
      };
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
