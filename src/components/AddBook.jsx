import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddBook.css';

const AddBook = ({ onAddBook }) => {
    const [formData, setFormData] = useState({
      title: '',
      author: '',
      publicationYear: '',
      genre: 'Programming',
      ISBN: '',
      status: 'Unread',
      coverImage: '',
      reviews: []
    });
    const [imagePreview, setImagePreview] = useState(null);
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newBook = {
        ...formData,
        id: Date.now(),
        coverImage: imagePreview || formData.coverImage
      };
}

export default AddBook;
