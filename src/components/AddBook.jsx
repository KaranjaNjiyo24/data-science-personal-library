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
}

export default AddBook;
