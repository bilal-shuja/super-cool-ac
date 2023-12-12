import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <section>
            <div className="Container fluid">
                <div className="top-bar d-none d-md-block bg-light">
                    <div className="container fluid ">
                        <div className="row ">
                            <div className="col-lg-2 col-md-3 col-12 ms-auto ">
                                <ul className="social-media list-inline m-0 p-0">
                                    <li className="list-inline-item">
                                        <a href="#" target="_blank">
                                            <img src="/facebook.png" alt="facebook" className="img-fluid lazyload" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" target="_blank">
                                            <img src="/insta.png" alt="Instagram" className="img-fluid lazyload" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="# " target="_blank">
                                            <img src="/youtube.png" alt="youtube" className="img-fluid lazyload" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" target="_blank">
                                            <img src="/linked.png" alt="linkedin" className="img-fluid lazyload " width="26px" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <div className="container fluid w-100 d-flex ">
                                <div className='d-flex flex-row justify-content-between'>
                                    <button className="navbar-toggler me-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <a className="navbar-brand mb-0 h1" href='/'>
                                        <h1>Super Cool AC</h1>
                                    </a>
                                </div>
                                <form className="d-flex w-50 form" style={{ marginRight: "25%" }}>
                                    <input className="form-control me-2 rounded-3" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-light bg-light" style={{ color: "black" }} type="submit">Search</button>
                                </form>
                            </div>
                        </nav>
                    </div>
                </div>
            </div >
            <div className='row'>
                <div className='col-12'>
                    <div className='container'>
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item me-5">
                                            <Link className="nav-link " style={{ fontWeight: "bolder", color: "black" }} to="/productDetails">Product Details</Link>
                                        </li>
                                        <li className="nav-item me-5">
                                            <Link className="nav-link " to="/aboutus" style={{ fontWeight: "bolder", color: "black" }}>About Us</Link>
                                        </li>
                                        <li className="nav-item me-5">
                                        <Link className="nav-link " style={{ fontWeight: "bolder", color: "black" }} to="/careers">Careers</Link>
                                        </li>
                                        <li className="nav-item me-5">
                                        <Link className="nav-link " style={{ fontWeight: "bolder", color: "black" }} to="/contact">Contact Us</Link>
                                        </li>
                                        <li className="nav-item me-5">
                                        <Link className="nav-link " style={{ fontWeight: "bolder", color: "black" }} to="/blogs">Blogs</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </section >
        // menue 

    )
}

export default Navbar