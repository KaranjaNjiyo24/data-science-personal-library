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
      fetch('http://localhost:3000/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook),
      })
        .then((res) => res.json())
        .then((data) => {
          onAddBook(data);
          setFormData({
            title: '',
            author: '',
            publicationYear: '',
            genre: 'Programming',
            ISBN: '',
            status: 'Unread',
            coverImage: '',
            reviews: []
          });
          setImagePreview(null);
          navigate("/"); 
        });
    };
    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setImagePreview(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };
}

export default AddBook;
