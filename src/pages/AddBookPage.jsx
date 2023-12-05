import { useState } from 'react';

function AddBookPage({ setBooks, bookFacade }) {
  const bookInit = { id: 0, title: '', info: '' };
  const [newBook, setNewBook] = useState(bookInit);
  const [message, setMessage] = useState('Please enter details and submit');

  function onChange(event) {
    setNewBook({ ...newBook, [event.target.id]: event.target.value });
    setMessage('');
  }

  function onSubmit(event) {
    event.preventDefault();
    if (newBook.title.length > 0 && newBook.info.length > 0) {
      bookFacade.addBook(newBook);
      setBooks([...bookFacade.getBooks()]);
      setNewBook(bookInit);
      setMessage('Book added - thanks. Check the booklist');
    } else {
      setMessage('Du skal udfylde noget makker');
    }
  }

  return (
    <div id="subpage">
      <h1>Add a new book</h1>

      <div className="two-col">
        <form id="book-form">
          <label htmlFor="title">Title: </label>
          <input
            id="title"
            type="text"
            value={newBook.title}
            onChange={onChange}
          />

          <label htmlFor="title">Info: </label>
          <input
            id="info"
            type="text"
            value={newBook.info}
            onChange={onChange}
          />

          <button onClick={onSubmit}>Add book</button>

          <p>{JSON.stringify(newBook)}</p>
        </form>
        <div id="add-book-message">
          {message && (
            <div>
              <h3>Message</h3>
              <p>{message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddBookPage;
