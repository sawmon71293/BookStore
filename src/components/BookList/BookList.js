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
            <div className="oval" />
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
            <div className="oval" />
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
      </section>
      <section className="form-container">
        <h3 className="addBook-title">ADD NEW BOOK</h3>
        <form id="add-book">
          <div>
            <input type="text" placeholder="Book title" />
            <select className="select-category">
              <option value="default" selected>Category</option>
            </select>
            <button type="button">Add Book</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default BookList;
