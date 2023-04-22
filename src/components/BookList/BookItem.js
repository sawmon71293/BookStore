import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../../features/books/booksSlice';

const BookItem = ({
  itemId, title, author, category,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="book-panel" id={itemId}>
      <div className="book-card">
        <div className="book-heading">
          <small className="school-of">{category}</small>
          <h3 className="title">{title}</h3>
          <span className="author">{author}</span>
        </div>
        <div className="actions">
          <button type="button" className="comments">
            Comment
          </button>
          <button
            type="button"
            className="remove"
            onClick={() => {
              dispatch(removeBook(itemId));
            }}
          >
            Remove
          </button>
          <button type="button" className="edit">
            Edit
          </button>
        </div>
      </div>
      <div className="percentage-container">
        <div className="oval border" />
        <div className="percentage-complete">
          <span className="percentage">64%</span>
          <span className="completed">Completed</span>
        </div>
      </div>
      <div>
        <div className="current-chapter">Current Chapter</div>
        <div className="chapter">Chapter 7</div>
        <button className="update-progress" type="button">
          Update Progress
        </button>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  itemId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookItem;
