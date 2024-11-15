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
      return (
        <div className="add-book">
          <h1 className="form-title">Add New Book</h1>
          <form onSubmit={handleSubmit} className="book-form">
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Author</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Publication Year</label>
              <input
                type="number"
                name="publicationYear"
                value={formData.publicationYear}
                onChange={(e) => setFormData({ ...formData, publicationYear: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>ISBN</label>
              <input
                type="text"
                name="ISBN"
                value={formData.ISBN}
                onChange={(e) => setFormData({ ...formData, ISBN: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Cover Image URL</label>
              <input
                type="url"
                name="coverImage"
                value={formData.coverImage}
                onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Upload Cover Image</label>
              <input type="file" accept="image/*" onChange={handleImageChange} />
              {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
            </div>
            <div className="form-group">
              <label>Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              >
                <option value="Unread">Unread</option>
                <option value="Reading">Reading</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <button type="submit" className="submit-button">Add Book</button>
          </form>
        </div>
      );
}

export default AddBook;
