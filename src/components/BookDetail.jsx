import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookDetail.css';

const BookDetail = ({ books, onUpdateStatus, onAddReview, onEditReview, onDeleteReview }) => {
    const { id } = useParams();
    const book = books.find((b) => b.id === parseInt(id));
    const [newReview, setNewReview] = useState({ rating: 5, review: '', reviewer: '' });
    const [editingReviewIndex, setEditingReviewIndex] = useState(null);
    const [editingReview, setEditingReview] = useState({});
  
    if (!book) return <div className="not-found">Book not found</div>;

    const handleStatusChange = (e) => {
        const newStatus = e.target.value;
        onUpdateStatus(book.id, newStatus);
      };

    const handleAddReviewSubmit = (e) => {
        e.preventDefault();
        onAddReview(book.id, newReview);
        setNewReview({ rating: 5, review: '', reviewer: '' });
      };
    
    const handleEditReviewSubmit = (e) => {
        e.preventDefault();
        onEditReview(book.id, editingReviewIndex, editingReview);
        setEditingReviewIndex(null);
        setEditingReview({});
      };
    
    const startEditingReview = (index, review) => {
        setEditingReviewIndex(index);
        setEditingReview(review);
      };

    return (
        <div className="book-detail">
        <div className="book-header">
          <img src={book.coverImage} alt={book.title} className="book-cover" />
          <div className="book-info">
            <h1 className="detail-title">{book.title}</h1>
            <div className="status-selector">
              <label>Status:</label>
              <select value={book.status} onChange={handleStatusChange}>
                <option value="Unread">Unread</option>
                <option value="Reading">Reading</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Year:</strong> {book.publicationYear}</p>
            <p><strong>Genre:</strong> {book.genre}</p>
            <p><strong>ISBN:</strong> {book.ISBN}</p>
          </div>
        </div>
        <div className="reviews-section">
          <h2>Reviews</h2>
          <form onSubmit={handleAddReviewSubmit} className="review-form">
            <div className="form-group">
              <label>Rating:</label>
              <select
                value={newReview.rating}
                onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num} Stars
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Review:</label>
              <textarea
                value={newReview.review}
                onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Reviewer:</label>
              <input
                type="text"
                value={newReview.reviewer}
                onChange={(e) => setNewReview({ ...newReview, reviewer: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="submit-button">Add Review</button>
          </form>
          {book.reviews.map((review, index) => (
            <div key={index} className="review">
              {editingReviewIndex === index ? (
                <form onSubmit={handleEditReviewSubmit} className="edit-review-form">
                  <div className="form-group">
                    <label>Edit Rating:</label>
                    <select
                      value={editingReview.rating}
                      onChange={(e) =>
                        setEditingReview({ ...editingReview, rating: parseInt(e.target.value) })
                      }
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num} Stars
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Edit Review:</label>
                    <textarea
                      value={editingReview.review}
                      onChange={(e) =>
                        setEditingReview({ ...editingReview, review: e.target.value })
                      }
                    />
                  </div>
                  <div className="edit-buttons">
                    <button type="submit" className="submit-button">Save</button>
                    <button
                      type="button"
                      className="cancel-button"
                      onClick={() => setEditingReviewIndex(null)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <div className="rating">
                    <span className="stars-filled">{'★'.repeat(review.rating)}</span>
                    <span className="stars-empty">{'★'.repeat(5 - review.rating)}</span>
                  </div>
                  <p className="review-text">{review.review}</p>
                  <p className="reviewer">- {review.reviewer}</p>
                  <div className="review-actions">
                    <button
                      onClick={() => startEditingReview(index, review)}
                      className="edit-button"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDeleteReview(book.id, index)}
                      className="delete-button"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    )    
}


export default BookDetail;
