import React from 'react'

const ProductInfo = () => {
    return (
        // Features Section - Home Page 
        <section id="features" className="features " style={{backgroundColor: '#f7f7f7'}}>
            <div className="container mt-3">
                <div className="row gy-4 align-items-center features-item">
                    <div className="col-lg-5 order-2 order-lg-1" >
                        <h5 style={{ fontSize: "2rem" }}>Unleash cooling comfort with our</h5>
                        <h3 style={{ color: "#2E327D" }}>Air Conditioners</h3>
                        <p>
                            Explore our range of exceptional AC units, designed to transform your space into a
                            sanctuary of refreshing coolness. Whether you seek energy-efficient split systems,
                            sleek window units, or innovative portable options, we have the perfect air marvel
                            to match your needs.
                        </p>
                        <a href="#" className="btn btn-primary " style={{ backgroundColor: "#2E327D" }}>Learn More</a>
                    </div>
                    <div className="col-lg-7 order-1 order-lg-2 d-flex align-items-center" >
                        <div className="image-stack">
                            <img src="assets/img/features-light-1.jpg" alt="" className="stack-front" />
                            <img src="assets/img/features-light-2.jpg" alt="" className="stack-back" />
                        </div>
                    </div>
                </div>
                {/* <!-- Features Item --> */}

                <div className="row gy-4 align-items-stretch justify-content-between features-item ">
                    <div className="col-lg-6 d-flex align-items-center features-img-bg image-stack" >
                        <img src="assets/img/features-light-3.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-5 d-flex justify-content-center flex-column" data-aos="fade-up">
                        <h5 style={{ fontSize: "2rem" }}>Unleash cooling comfort with our</h5>
                        <h3 style={{ color: "#2E327D" }}>Sunt consequatur ad ut est nulla</h3>
                        <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
                        <ul>
                            <li><i className="bi bi-check"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                            <li><i className="bi bi-check"></i><span> Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                            <li><i className="bi bi-check"></i> <span>Facilis ut et voluptatem aperiam. Autem soluta ad fugiat</span>.</li>
                        </ul>
                        <a href="#" className="btn btn-primary  align-self-start" style={{ backgroundColor: "#2E327D", }}>Learn More</a>
                    </div>
                </div>
                {/* Features Item  */}
            </div>
        </section>
    )
}

export default ProductInfo