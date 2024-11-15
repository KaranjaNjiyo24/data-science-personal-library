import React, { useEffect, useState }from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import AddBook from './components/AddBook';
import About from './components/About';
import Search from './components/Search';
import './App.css'

const App = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([])

  useEffect(() => {
    fetch('https://data-science-books.onrender.com/books')
      .then((res) => res.json())
      .then((data) => {
        setBooks(data)
        setFilteredBooks(data)
      });
  }, []);

  const handleAddBook = (newBook) => {
    fetch('https://data-science-books.onrender.com/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((data) => {
        setBooks((prevBooks) => [...prevBooks, data])
        setFilteredBooks((prevBooks) => [...prevBooks, data]);
      });  
  };

  const handleUpdateStatus = (bookId, newStatus) => {
    const updatedBooks = books.map((book) =>
      book.id === bookId ? { ...book, status: newStatus } : book
    );

    fetch(`https://data-science-books.onrender.com/books/${bookId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((res) => res.json())
      .then(() => setBooks(updatedBooks));
  };

  const handleAddReview = (bookId, newReview) => {
    const updatedBooks = books.map((book) => {
      if (book.id === bookId) {
        return { ...book, reviews: [...book.reviews, newReview] };
      }
      return book;
    });

    fetch(`https://data-science-books.onrender.com/books/${bookId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ reviews: updatedBooks.find((b) => b.id === bookId).reviews }),
    })
      .then((res) => res.json())
      .then(() => {
        setBooks(updatedBooks);
        setFilteredBooks(updatedBooks);
      });
  };

  
  const handleEditReview = (bookId, reviewIndex, updatedReview) => {
    const book = books.find((b) => b.id === bookId);
    const updatedReviews = [...book.reviews];
    updatedReviews[reviewIndex] = updatedReview;
    const updatedBooks = books.map((b) =>
      b.id === bookId ? { ...b, reviews: updatedReviews } : b
    );

    fetch(`https://data-science-books.onrender.com/books/${bookId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ reviews: updatedReviews }),
    })
      .then((res) => res.json())
      .then(() => {
        setBooks(updatedBooks)
        setFilteredBooks(updatedBooks)
      });
  };

  const handleDeleteReview = (bookId, reviewIndex) => {
    const book = books.find((b) => b.id === bookId);
    const updatedReviews = book.reviews.filter((_, index) => index !== reviewIndex);
    const updatedBooks = books.map((b) =>
      b.id === bookId ? { ...b, reviews: updatedReviews } : b
    );

    fetch(`https://data-science-books.onrender.com/books/${bookId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ reviews: updatedReviews }),
    })
      .then((res) => res.json())
      .then(() => {
        setBooks(updatedBooks)
        setFilteredBooks(updatedBooks)
      });
  };

  const handleSearchResults = (results) => {
    setFilteredBooks(results)
  }

  return (
    <Router>
      <div className="app">
        <NavBar />
        <main className="main-content">
          <Search books={books} onSearchResults={handleSearchResults} /> 
          <Routes>
            <Route path="/" element={<BookList books={filteredBooks} />} />
            <Route
              path="/book/:id"
              element={
                <BookDetail
                  books={books}
                  onUpdateStatus={handleUpdateStatus}
                  onAddReview={handleAddReview}
                  onEditReview={handleEditReview}
                  onDeleteReview={handleDeleteReview}
                />
              }
            />
            <Route path="/add" element={<AddBook onAddBook={handleAddBook} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
