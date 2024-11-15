// BookList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './BookList.css';

const BookList = ({ books }) => (
  <div className="book-grid">
    {books.map(book => (
      <Link to={`/book/${book.id}`} key={book.id} className="book-card-link">
        <div className="book-card">
          <img src={book.coverImage} alt={book.title} className="book-cover" />
          <div className="book-info">
            <h2 className="book-title">{book.title}</h2>
            <p className="book-author">By {book.author}</p>
            <p className="book-year">Published: {book.publicationYear}</p>
            <div className="book-status">
              <span className="status-badge">{book.status}</span>
            </div>
          </div>
        </div>
      </Link>
    ))}
  </div>
);

export default BookList;
