import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../features/books/booksSlice';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const reset = () => {
    setAuthor('');
    setTitle('');
    setCategory('');
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (title !== '' && author !== '' && category !== '') {
      const payload = {
        item_id: uuidv4(),
        title,
        author,
        category,
      };
      dispatch(addBook(payload));
    }
    reset();
  };

  return (
    <section className="form-container">
      <h3 className="addBook-title">ADD NEW BOOK</h3>
      <form id="add-book">
        <div>
          <input
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Book Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            type="text"
            placeholder="Book Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <button type="button" onClick={handleForm}>
            Add Book
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddBook;
