import React from 'react';
import './BookList.css';

function BookList() {
  return (
    <div className="book-wrapper">
      <section className="books">
        <div className="book-panel">
          <div className="book-card">
            <div className="book-heading">
              <small className="school-of">Action</small>
              <h3 className="title">The Hunger Game</h3>
              <span className="author">Suzanne Collins</span>
            </div>
            <div className="actions">
              <button
                type="button"
                className="comments"
              >
                Comment
              </button>
              <button
                type="button"
                className="remove"
              >
                Remove
              </button>
              <button
                type="button"
                className="edit"
              >
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
            <button
              className="update-progress"
              type="button"
            >
              Update Progress
            </button>
          </div>
        </div>
        <div className="book-panel">
          <div className="book-card">
            <div className="book-heading dune-padding">
              <small className="school-of">Action</small>
              <h3 className="title">Dune</h3>
              <span className="author">Frank Herbert</span>
            </div>
            <div className="actions">
              <button
                type="button"
                className="comments"
              >
                Comment
              </button>
              <button
                type="button"
                className="remove"
              >
                Remove
              </button>
              <button
                type="button"
                className="edit"
              >
                Edit
              </button>
            </div>
          </div>
          <div className="percentage-container">
            <div className="oval" />
            <div className="percentage-complete">
              <span className="percentage">8%</span>
              <span className="completed">Completed</span>
            </div>
          </div>
          <div>
            <div className="current-chapter">Current Chapter</div>
            <div className="chapter">Chapter 7</div>
            <button
              className="update-progress"
              type="button"
            >
              Update Progress
            </button>
          </div>
        </div>
        <div className="book-panel">
          <div className="book-card">
            <div className="book-heading">
              <small className="school-of">Action</small>
              <h3 className="title">Capital in the Twenty-first Century</h3>
              <span className="author">Suzanne Collins</span>
            </div>
            <div className="actions">
              <button
                type="button"
                className="comments"
              >
                Comment
              </button>
              <button
                type="button"
                className="remove"
              >
                Remove
              </button>
              <button
                type="button"
                className="edit"
              >
                Edit
              </button>
            </div>
          </div>
          <div className="percentage-container">
            <div className="oval" />
            <div className="percentage-complete">
              <span className="percentage">0%</span>
              <span className="completed">Completed</span>
            </div>
          </div>
          <div>
            <div className="current-chapter">Current Chapter</div>
            <div className="chapter">Chapter 7</div>
            <button
              className="update-progress"
              type="button"
            >
              Update Progress
            </button>
          </div>
        </div>
      </section>
      <section className="form-container">
        <h3 className="addBook-title">ADD NEW BOOK</h3>
        <form id="add-book">
          <div>
            <input type="text" placeholder="Book title" />
            <div className="select-wrapper">
              <select className="select-category">
                <option value="default" selected>Category </option>
                <option value="option1">Action</option>
                <option value="option2">Science Fiction</option>
                <option value="option3">Economy</option>
              </select>
              <button type="button">Add Book</button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default BookList;
