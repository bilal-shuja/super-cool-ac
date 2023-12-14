import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = () => {
    return (
    <section className='mt-5'>
        <div className='container'>
            <section className="text-center">
                <h2 className="text-dark mb-5">Our <span className='fw-bold'>Blogs</span></h2>
                <div className="row">
                    <div className="col-lg-4 col-md-12 mb-4">
                        <div className="card bg-white border border-2">
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" className="img-fluid p-3" alt=''/>
                                {/* <Link to="/blogs">
                                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                </Link> */}
                            </div>
                            <div className="card-body">
                                <p className='text-muted' style={{ textAlign: 'left', fontSize: "16px", fontWeight: "600" }}>28 Nov 2023</p>
                                <h5 className="card-title text-dark fw-bold" style={{ textAlign: 'left',  fontSize: "17px" }}>Energy-efficient fridges – The solution to save money and the planet!</h5>
                                <p className="card-text " style={{ textAlign: 'left' , marginTop:"1em" }}>
                                    Refrigerators can consume lots of energy at home, so optimizing their energy can
                                    impact electricity and energy efficiency bills....
                                </p>
                                <Link to="/blogs" className="btn btn-outline-info font-monospace float-start">Read...</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card bg-white border border-2" >
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <img src="https://mdbootstrap.com/img/new/standard/nature/023.jpg" className="img-fluid p-3" alt=''/>
                                {/* <Link to="/blogs">
                                    <div className="mask" style={{ backgroundColor: " rgba(251, 251, 251, 0.15)" }}></div>
                                </Link> */}
                            </div>
                            <div className="card-body">
                                <p className='text-muted' style={{ textAlign: 'left', fontSize: "16px", fontWeight: "600" }}>28 Nov 2023</p>
                                <h5 className="card-title text-dark fw-bold" style={{ textAlign: 'left' , fontSize: "17px" }}>Guide to Purchasing a Dishwashe.r</h5>
                                <p className="card-text" style={{ textAlign: 'left' , marginTop:"1em" }}>
                                    The dishwasher's becoming common in all households,
                                    Here's a fun way to do your dishes daily without a sweat! Read here to know how
                                    you should get a dishwasher for home...
                                </p>
                                <Link to="/blogs" className="btn btn-outline-info float-start font-monospace">Read...</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card bg-white border border-2">
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" className="img-fluid p-3" alt='' />
                                {/* <Link to="/blogs">
                                    <div className="mask" style={{ backgroundColor: " rgba(251, 251, 251, 0.15)" }}></div>
                                </Link> */}
                            </div>
                            <div className="card-body">
                                <p  className="text-muted" style={{ textAlign: 'left', fontSize: "16px", fontWeight: "600" }}>28 Nov 2023</p>
                                <h5 className="card-title text-dark fw-bold" style={{ textAlign: 'left',  fontSize: "17px" }}>The Ultimate Guide to Buying Refrigerators</h5>
                                <p className="card-text" style={{ textAlign: 'left'  , marginTop:"1em" }}>
                                    A refrigerator acts as more than just a storage unit. It uplifts any room in your
                                    house with its design. If you want to get a new stylish ...
                                </p>
                                <Link to="/blogs" className="btn btn-outline-info float-start font-monospace" >Read...</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </section>
    )
}

export default Blogs