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
}


export default BookDetail;
