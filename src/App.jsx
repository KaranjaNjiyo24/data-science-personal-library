import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import AddBook from './components/AddBook';
import About from './components/About';

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const handleAddBook = (newBook) => {
    fetch('http://localhost:3000/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((data) => {
        setBooks((prevBooks) => [...prevBooks, data]);
      });  
  };

  const handleUpdateStatus = (bookId, newStatus) => {
    const updatedBooks = books.map((book) =>
      book.id === bookId ? { ...book, status: newStatus } : book
    );

    fetch(`http://localhost:3000/books/${bookId}`, {
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
    const book = books.find((b) => b.id === bookId);
    const updatedReviews = [...book.reviews, newReview];
    const updatedBooks = books.map((b) =>
      b.id === bookId ? { ...b, reviews: updatedReviews } : b
    );

    fetch(`http://localhost:3000/books/${bookId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ reviews: updatedReviews }),
    })
      .then((res) => res.json())
      .then(() => setBooks(updatedBooks));
  };

  
  const handleEditReview = (bookId, reviewIndex, updatedReview) => {
    const book = books.find((b) => b.id === bookId);
    const updatedReviews = [...book.reviews];
    updatedReviews[reviewIndex] = updatedReview;
    const updatedBooks = books.map((b) =>
      b.id === bookId ? { ...b, reviews: updatedReviews } : b
    );

    fetch(`http://localhost:3000/books/${bookId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ reviews: updatedReviews }),
    })
      .then((res) => res.json())
      .then(() => setBooks(updatedBooks));
  };

  const handleDeleteReview = (bookId, reviewIndex) => {
    const book = books.find((b) => b.id === bookId);
    const updatedReviews = book.reviews.filter((_, index) => index !== reviewIndex);
    const updatedBooks = books.map((b) =>
      b.id === bookId ? { ...b, reviews: updatedReviews } : b
    );

    fetch(`http://localhost:3000/books/${bookId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ reviews: updatedReviews }),
    })
      .then((res) => res.json())
      .then(() => setBooks(updatedBooks));
  };




  return (
    <Router>
      <div className="app">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/add" element={<AddBook onAddBook={handleAddBook} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
