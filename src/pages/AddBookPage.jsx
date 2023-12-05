import { useState } from 'react';

function AddBookPage({ setBooks, bookFacade }) {
  const bookInit = { id: 0, title: '', info: '' };
  const [newBook, setNewBook] = useState(bookInit);

  function onChange(event) {
    setNewBook({ ...newBook, [event.target.id]: event.target.value });
  }

  function onSubmit(event) {
    event.preventDefault();
    bookFacade.addBook(newBook);
    setBooks([...bookFacade.getBooks()]);
    setNewBook(bookInit);
    alert('Book added - thanks');
  }

  return (
    <div id="subpage">
      <h1>Add a new book</h1>
      <p>Please enter detail below and submit</p>

      <form id="book-form">
        <label htmlFor="title">Title: </label>
        <input
          id="title"
          type="text"
          value={newBook.title}
          onChange={onChange}
        />

        <label htmlFor="title">Info: </label>
        <input id="info" type="text" value={newBook.info} onChange={onChange} />

        <button onClick={onSubmit}>Add book</button>

        <p>{JSON.stringify(newBook)}</p>
      </form>
    </div>
  );
}

export default AddBookPage;
