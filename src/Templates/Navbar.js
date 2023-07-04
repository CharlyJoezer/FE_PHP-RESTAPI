import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import "../css/Navbar.css";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [searchImage, setSearchImage] = useState(true);

  function inputSearchFocus() {
    return setSearchImage(false);
  }

  function inputSearchFocusOut() {
    if (search !== "") {
      return setSearchImage(false);
    } else {
      return setSearchImage(true);
    }
  }

  function inputSearchChange(event) {
    return setSearch(event.target.value)
  }

  return (
    <nav className="navbar">
      <div className="brand-image">
        <Link to="/">
          <img
            src="https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fitemku%2Fitemku-logo-color-transparent.png&w=140&q=75"
            alt="test"
          />
        </Link>
      </div>
      <div className="category">
        <img src="assets/icon/category.png" alt="category" />
        <span>Kategori</span>
      </div>
      <div className="input-search">
        <input
          type="text"
          name="search"
          onChange={inputSearchChange}
          onFocus={inputSearchFocus}
          onBlur={inputSearchFocusOut}
        />
        {searchImage && (
          <img src="assets/icon/search-icon.png" alt="search-icon" />
        )}
      </div>
      <div className="cart-icon">
        <img src="assets/icon/cart-icon.png" alt="cart-icon" />
      </div>
      <div className="bell-icon">
        <img src="assets/icon/bell-icon.png" alt="bell-icon" />
      </div>
      <div className="vertical-line"></div>
      <div className="btn-login">
        <Link to="/login">Masuk</Link>
      </div>
    </nav>
  );
}
