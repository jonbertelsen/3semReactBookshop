import { NavLink, useParams } from 'react-router-dom';

function BookPage({ books }) {
  const { id } = useParams();

  return (
    <div id="subpage">
      <h1>Books</h1>
      <div id="books-container">
        <div id="booklist">
          <table className="table-striped">
            <thead>
              <tr>
                <th>id</th>
                <th>Title</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>
                    <NavLink to={`/books/${book.id}`}>View details</NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {id && (
          <div id="bookdetails">
            <h2>The details</h2>
            <p>{books.filter((book) => book.id == id).map((b) => b.info)}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookPage;
