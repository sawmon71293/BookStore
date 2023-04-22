import React, { useEffect } from 'react';
import './BookList.css';
import { useSelector, useDispatch } from 'react-redux';
import AddBook from '../AddBook';
import BookItem from './BookItem';
import { getBooks } from '../../features/books/booksSlice';

function BookList() {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.books.books);
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <div className="book-wrapper">
      <section className="books">
        {books
          && books.map((book) => (
            <BookItem
              key={book.item_id}
              itemId={book.item_id}
              title={book.title}
              author={book.author}
              category={book.category}
            />
          ))}
      </section>
      <AddBook />
    </div>
  );
}

export default BookList;
