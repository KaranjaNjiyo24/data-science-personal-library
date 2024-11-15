# 📚 Data Science Personal Library

A web application to track and manage your personal data science library! Organize your books, keep track of your reading progress, write reviews, and explore your collection with an integrated search functionality.

---

## 🌐 Live Demo

Check out the live version of the app on **Vercel**:

👉 [Data Science Personal Library on Vercel](https://data-science-personal-library.vercel.app/)

---

## 🌟 Features

- **Book Management**: Add, view, edit, and delete books in your library.
- **Reading Status Tracking**: Update the reading status of each book (Unread, Reading, or Completed).
- **Review System**: Write, edit, and delete reviews for each book.
- **Search Functionality**: Search books by title, author, or genre.
- **Interactive UI**: Elegant golden, black, and white theme with responsive design.
- **Dynamic Data Handling**: All data is managed locally using `db.json` later deployed on Render.

---

## 🛠️ Tech Stack

- **Frontend**: React.js (with functional components and hooks)
- **Styling**: CSS (custom styling for a polished look)
- **Routing**: React Router
- **Backend**: JSON Server deployed on Render
- **Deployment**: Vercel (for hosting and live demo)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

---

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/KaranjaNjiyo24/data-science-personal-library.git
   cd data-science-personal-library
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the JSON server:
   ```bash
   json-server --watch db.json 
   ```

4. Start the React development server:
   ```bash
   npm start
   ```

---

## 📂 Project Structure

```
data-science-library/
├── public/                 # Public assets
├── src/
│   ├── components/         # React components
│   │   ├── NavBar.js       # Navigation bar
│   │   ├── BookList.js     # Book list component
│   │   ├── BookDetail.js   # Book detail component
│   │   ├── AddBook.js      # Add book form
│   │   ├── Search.js       # Search bar component
│   └── App.js              # Main app file
├── db.json                 # Mock database for books and reviews
├── package.json            # Project configuration
└── README.md               # Project documentation
```

---

## ✨ How to Use

1. **Add Books**: Navigate to the "Add Book" page to add new books to your library.
2. **View Details**: Click on any book to view its details, including reviews and reading status.
3. **Write Reviews**: Add detailed reviews for each book and edit or delete them as needed.
4. **Search Library**: Use the search bar to quickly find books by title, author, or genre.
5. **Track Progress**: Update the reading status for each book.

---

## 🖌️ Screenshots

### Home Page
![Home Page]

### Book Detail
![Book Detail]

### Add Book
![Add Book]

---

## 🧩 Future Enhancements

- **Authentication**: Add user login and profiles to personalize the library.
- **Export Data**: Allow users to export their library in CSV or JSON format.
- **Themes**: Add dark mode or other theme options.

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

---

## 📝 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## 📬 Contact

- **Author**: [Karanja Njiyo]([https://github.com/KaranjaNjiyo24])
- **Email**: karanjaandrew2000@gmail.com
- **GitHub**: [My GitHub](https://github.com/KaranjaNjiyo24)

Feel free to reach out with questions, suggestions, or feedback!
