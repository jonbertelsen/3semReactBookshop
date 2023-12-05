import { NavLink, Outlet } from 'react-router-dom';
import BookShopImage from '../assets/bookshop.jpg';
import { useState, useEffect } from 'react';

function MainLayout({ bookId, setBookId, books, bookFacade }) {
  const [maxId, setMaxId] = useState();

  useEffect(() => {
    setMaxId(bookFacade.getMaxId());
  }, [books]);

  return (
    <div id="page">
      <div id="container">
        <header>
          <ul className="header">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="books">Booklist</NavLink>
            </li>
            <li>
              <NavLink to="addbook">Add&nbsp;Book</NavLink>
            </li>
          </ul>
          <div id="searchbox">
            <label htmlFor="bookId">Search book by id: </label>
            <input
              id="bookId"
              min="100"
              value={bookId}
              type="number"
              onChange={(event) => setBookId(event.target.value)}
            />
          </div>
        </header>
        <div className="twocol">
          <div className="col-1">
            <h1>Welcome to Book Shop</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut illum
              deleniti pariatur velit reprehenderit quo omnis temporibus
              repellendus fugit ipsam enim suscipit in, dolorum voluptate, illo
              adipisci mollitia unde inventore.
            </p>
          </div>
          <img id="bookshopimage" src={BookShopImage} />
        </div>
        <div>
          <Outlet />
        </div>

        {bookId > 99 && bookId <= maxId && (
          <div id="search-result">
            <h2>The quick'n dirty lookup</h2>
            <p>{bookFacade.findBook(bookId).title} </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainLayout;
