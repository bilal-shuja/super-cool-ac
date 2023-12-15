import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = () => {
    return (
        <section className='mt-5 text-center'>
            <div className='container'>
                <h1 className="mb-5">
                    <strong>Blogs</strong></h1>
                <div className="row">
                    <div className="col-lg-4 col-md-12 mb-4">
                        <div className="card" style={{ height: '100%' }}>
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" className="img-fluid" />
                                <Link to="/blogs">
                                    <div className="mask" style={{ backgroundColor: " rgba(251, 251, 251, 0.15)" }}></div>
                                </Link>
                            </div>
                            <div className="card-body">
                                <p style={{ color: "#2E327D", textAlign: 'left', fontSize: "16px", fontWeight: "600" }}>28 Nov 2023</p>
                                <h5 className="card-title" style={{ textAlign: 'left' }}>Energy-efficient fridges – The solution to save money and the planet!</h5>
                                <p className="card-text" style={{ textAlign: 'left' }}>
                                    Refrigerators can consume lots of energy at home, so optimizing their energy can
                                    impact electricity and energy efficiency bills. Here are the top reasons you
                                    should choose Super General's energy-efficient refrigerator models for your
                                    kitchen.
                                </p>
                                <Link to="/blogs" className="btn btn-primary" style={{ backgroundColor: "#2E327D" }}>Read</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card" style={{ height: '100%' }}>
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <img src="https://mdbootstrap.com/img/new/standard/nature/023.jpg" className="img-fluid" />
                                <Link to="/blogs">
                                    <div className="mask" style={{ backgroundColor: " rgba(251, 251, 251, 0.15)" }}></div>
                                </Link>
                            </div>
                            <div className="card-body">
                                <p style={{ color: "#2E327D", textAlign: 'left', fontSize: "16px", fontWeight: "600" }}>28 Nov 2023</p>
                                <h5 className="card-title" style={{ textAlign: 'left' }}>Guide to Purchasing a Dishwasher</h5>
                                <p className="card-text" style={{ textAlign: 'left' }}>
                                    The dishwasher's becoming common in all households, owing to their convenience.
                                    Here's a fun way to do your dishes daily without a sweat! Read here to know how
                                    you should get a dishwasher for home from UAE's most famous brand
                                    – Super General!
                                </p>
                                <Link to="/blogs" className="btn btn-primary" style={{ backgroundColor: "#2E327D" }}>Read</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card" style={{ height: '100%' }}>
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" className="img-fluid" />
                                <Link to="/blogs">
                                    <div className="mask" style={{ backgroundColor: " rgba(251, 251, 251, 0.15)" }}></div>
                                </Link>
                            </div>
                            <div className="card-body">
                                <p style={{ color: "#2E327D", textAlign: 'left', fontSize: "16px", fontWeight: "600" }}>28 Nov 2023</p>
                                <h5 className="card-title" style={{ textAlign: 'left' }}>The Ultimate Guide to Buying Refrigerators</h5>
                                <p className="card-text" style={{ textAlign: 'left' }}>
                                    A refrigerator acts as more than just a storage unit. It uplifts any room in your
                                    house with its design. If you want to get a new stylish and super affordable
                                    model, read to know why you must choose a Super General model!
                                </p>
                                <Link to="/blogs" className="btn btn-primary" style={{ backgroundColor: "#2E327D" }}>Read</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blogs