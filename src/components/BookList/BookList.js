import React from 'react';
import './BookList.css';
import { useSelector } from 'react-redux';
import AddBook from '../AddBook';
import BookItem from './BookItem';

function BookList() {
  const { books } = useSelector((store) => store.books);
  return (
    <div className="book-wrapper">
      <section className="books">
        {books.map((book) => (
          <BookItem
            key={book.item_id}
            item_id={book.item_id}
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
