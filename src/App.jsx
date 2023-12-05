import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import AddBookPage from './pages/AddBookPage';
import BookPage from './pages/BookPage';
import { useState } from 'react';

function App({ bookFacade }) {
  const [bookId, setBookId] = useState('');
  const [books, setBooks] = useState(bookFacade.getBooks());

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <MainLayout
            bookId={bookId}
            setBookId={setBookId}
            books={books}
            bookFacade={bookFacade}
          />
        }
      >
        <Route
          path="books"
          element={<BookPage bookId={bookId} books={books} />}
        >
          <Route path=":id" element={<BookPage books={books} />} />
        </Route>
        <Route
          path="addbook"
          element={<AddBookPage setBooks={setBooks} bookFacade={bookFacade} />}
        />
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
}

export default App;
