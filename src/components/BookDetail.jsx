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


    
    
}


export default BookDetail;
