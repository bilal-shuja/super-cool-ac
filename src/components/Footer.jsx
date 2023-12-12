import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        // <!-- ======= Footer ======= -->
        // <footer id="footer" className="footer">

        //     <div className="container footer-top">
        //         <div className="row gy-4">
        //             <div className="col-lg-5 col-md-12 footer-about">
        //                 <Link to="/" className="logo d-flex align-items-center">
        //                     <span>Super Cool Ac</span>
        //                 </Link>
        //                 <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
        //                 <div className="social-links d-flex mt-4">
        //                     <a href=""><i className="fa-brands fa-twitter"></i></a>
        //                     <a href=""><i className="fa-brands fa-facebook"></i></a>
        //                     <a href=""><i className="fa-brands fa-instagram"></i></a>
        //                     <a href=""><i className="fa-brands fa-linkedin"></i></a>
        //                 </div>
        //             </div>

        //             <div className="col-lg-2 col-6 footer-links">
        //                 <h4>Useful Links</h4>
        //                 <ul>
        //                     <li><a href="#">Home</a></li>
        //                     <li><a href="#">About us</a></li>
        //                     <li><a href="#">Services</a></li>
        //                     <li><a href="#">Terms of service</a></li>
        //                     <li><a href="#">Privacy policy</a></li>
        //                 </ul>
        //             </div>

        //             <div className="col-lg-2 col-6 footer-links">
        //                 <h4>Our Services</h4>
        //                 <ul>
        //                     <li><a href="#">Web Design</a></li>
        //                     <li><a href="#">Web Development</a></li>
        //                     <li><a href="#">Product Management</a></li>
        //                     <li><a href="#">Marketing</a></li>
        //                     <li><a href="#">Graphic Design</a></li>
        //                 </ul>
        //             </div>

        //             <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
        //                 <h4>Contact Us</h4>
        //                 <p>A108 Adam Street</p>
        //                 <p>New York, NY 535022</p>
        //                 <p>United States</p>
        //                 <p className="mt-4"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
        //                 <p><strong>Email:</strong> <span>info@example.com</span></p>
        //             </div>

        //         </div>
        //     </div>

        //     <div className="container copyright text-center mt-4">
        //         <p>&copy; <span>Copyright</span> <strong className="px-1">Append</strong> <span>All Rights Reserved</span></p>
        //         <div className="credits">
        //             {/* <!-- All the links in the footer should remain intact. -->
        //   <!-- You can delete the links only if you've purchased the pro version. -->
        //   <!-- Licensing information: https://bootstrapmade.com/license/ -->
        //   <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] --> */}
        //             Designed by <a href="#">Super Cool Ac</a>
        //         </div>
        //     </div>

        // </footer>
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