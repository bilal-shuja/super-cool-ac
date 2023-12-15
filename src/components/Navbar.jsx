import React,{useState} from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbarBtns , setNavbarBtns] = useState("")
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
          <Link  onClick={()=> setNavbarBtns("")} to="/" className="navbar-logo fa-solid fa-lightbulb fs-1" />
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
                onClick={()=> setNavbarBtns("Products")}
              >
                <Link
                  to="/productDetails"
                  className={navbarBtns === "Products" ?"nav-link px-2 bg-info text-white rounded-pill me-5":"nav-link px-2 text-dark me-5"}
                >
                  Products
                </Link>
              </li>
              <li
               onClick={()=> setNavbarBtns("About")}
              >
                <Link to="/AboutUs" className={navbarBtns === "About" ?"nav-link px-2 bg-info text-white rounded-pill me-5":"nav-link px-2 text-dark me-5"}>
                  About
                </Link>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-dark me-5">
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link px-2 text-dark"
                  style={{ marginRight: "9em" }}
                >
                  Blogs
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <span className="input-group-text bg-white">
                <i className="fa-solid fa-magnifying-glass"></i>
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
