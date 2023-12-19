import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useGetSearchProductsQuery } from "../features/ProductSlice/SearchProductSlice";

const Navbar = () => {
  const navigate= useNavigate();
  const [navbarBtns, setNavbarBtns] = useState("")
  const[keyword,setKeyword] = useState('');
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform the search action using the keyword
    navigate(`/search?keyword=${encodeURIComponent(keyword)}`)
    console.log("Perform search with keyword:", keyword);
    
  };
  useEffect(() => {
    localStorage.setItem('searchkeyword', keyword);
  }, [keyword])
  
  return (
    <>
      <div className="d-flex justify-content-center text-white fw-bold bg-info p-1 font-monospace fs-5 ">
        <span className="me-2">Verity of things and much more!</span>
        <i className="fa-brands fa-facebook fs-3 me-3" />
        <i className="fa-brands fa-instagram fs-3 me-3" />
        <i className="fa-brands fa-youtube fs-3 me-3" />
        <i className="fa-brands fa-linkedin fs-3 " />
      </div>

      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white p-3"
        style={{ borderBottom: "1px solid #0dcaf0" }}
      >
        <div className="container">
          <Link onClick={() => setNavbarBtns("")} to="/" className="navbar-logo fa-solid fa-lightbulb fs-1" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav ms-auto mb-2 mb-lg-0"
              style={{ fontFamily: "'Fira Sans', sans-serif" }}
            >
              <li
                onClick={() => setNavbarBtns("Products")}
              >
                <Link
                  to="/productDetails"
                  className={navbarBtns === "Products" ? "nav-link px-2 bg-info text-white rounded-pill me-5" : "nav-link px-2 text-dark me-5"}
                >
                  Products
                </Link>
              </li>
              <li
                onClick={() => setNavbarBtns("About")}
              >
                <Link to="/AboutUs" className={navbarBtns === "About" ? "nav-link px-2 bg-info text-white rounded-pill me-5" : "nav-link px-2 text-dark me-5"}>
                  About
                </Link>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-dark me-5">
                  Careers
                </a>
              </li>
              <li
                onClick={() => setNavbarBtns("Blogs")}
              >
                <Link
                  to="/blogs"
                  className={navbarBtns === "About" ? "nav-link px-2 bg-info text-white rounded-pill me-5" : "nav-link px-2 text-dark me-5"}
                >
                  Blogs
                </Link>
              </li>
              <li
                onClick={() => setNavbarBtns("Contact Us")}>
                <Link to="/ContactUs"
                style={{ marginRight: "9em" }} 
                className={navbarBtns === "Contact" ? "nav-link px-2 bg-info text-white rounded-pill me-5" : "nav-link px-2 text-dark me-5"}>
                  Contact
                </Link>
              </li>


            </ul>
            <form className="d-flex" onSubmit={handleSearchSubmit}>
              <input
                className="form-control"
                type="search"
                placeholder="Search..."
                aria-label="Search"
                value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              />
              <span className="input-group-text bg-white" >
                <button className="btn "  type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i></button>
                
              </span>
            </form>
          </div>
        </div>
      </nav>
      {/* Navbar */}
    </>
  );
};

export default Navbar;
