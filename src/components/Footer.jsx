import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer class="footer-super">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="footer-arrow">
                                <div class="top-arrow">
                                    <div class="arrow-circle">
                                        <i class="fa fa-solid fa-chevron-up"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-12">
                            <div class="footer-content">
                                <h3>Quick Links</h3>
                                <ul class="unstyle-list">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/career">Careers</a></li>
                                    {/* <li><a href="https://www.supergeneral.com/ae/sitemap">Sitemap</a></li> */}
                                    <li><a href="/about-us">About Us</a></li>
                                    <li><a href="products">Product Details</a></li>
                                    <li><a href="/contact-us">Contact Us</a></li>
                                    {/* <li><a href="https://www.supergeneral.com/ae/media/print">Download Brochure</a></li> */}
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-12">
                            <div class="footer-content mborder-bottom">
                                <h3>Products</h3>
                                <ul class="unstyle-list">
                                    <li><a href="#">Air Conditioners</a></li>

                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-12">
                            <div class="footer-content add-box">
                                <h3>CORPORATE OFFICE</h3>
                                <p class="address">
                                    Super Cool Ac<br />
                                    MPC Building Airport Road<br />
                                    Near Cargo Village,<br />
                                    P.O. Box No: 51027, Dubai, UAE,<br />
                                    Phone No:<a href="#"> </a><br />
                                    Fax No: <br />
                                    Email: <a href="#"></a><br />
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-12">
                            {/* <div class="footer-form">
                            <h3>STAY CONNECTED<br /> FOR LATEST UPDATES</h3>
                            <div id="subscribe-form" class="form">
                                <input type="email" name="footer-email" id="footername" placeholder="Enter email address" />
                                <button class="btn btn-warning">Submit</button>
                            </div>
                            <span class="error"></span>
                            <span class="sucess"></span>
                            <a href="#" class="looking-service">Looking for service?</a>
                        </div> */}
                            <div class="social-icon">
                                <h4>STAY CONNECTED<br /> FOR LATEST UPDATES</h4>
                                <ul class="list-inline">
                                    <li class="list-inline-item">
                                        <a href="#">
                                            <img src="/facebook.png" class="img-fluid lazyload" alt="facebook" />
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="#">
                                            <img src="/twitter.png" class="img-fluid lazyload" alt="twitter" />
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="#">
                                            <img src="/youtube.png" class="img-fluid lazyload" alt="youtube" />
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="#">
                                            <img src="/insta.png" class="img-fluid" alt="instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div class="copyright">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <p>COPYRIGHT © 2023 SUPER GENERAL. ALL RIGHTS RESERVED</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Footer