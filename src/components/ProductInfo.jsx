import React from 'react';
import FeatureACOne from '../img/Feature-AC-One.jpg';
import FeatureRefgThree from '../img/Feature-Refg-Three.jpg';

const ProductInfo = () => {
    return (
        // Features Section - Home Page 
        <section id="features" className="features ">
            <div className="container mt-3">
                <div className="row align-items-center features-item border border-2 p-3">
                    <div className="col-lg-6" >
                        <h5 className='text-dark' style={{fontFamily:"Time New Roman"}}>Unleash cooling comfort with our <span className='text-muted fw-bolder'> <q>Air Conditioners</q> </span></h5>
                        <p className='mt-4' style={{fontFamily:"cursive"}}>
                            Explore our range of exceptional AC units, designed to transform your space into a
                            sanctuary of refreshing coolness. Whether you seek energy-efficient split systems,
                            sleek window units, or innovative portable options, we have the perfect air marvel
                            to match your needs...
                        </p>
                        <a href="#f" className="btn btn-outline-info font-monospace mt-3">Learn More...</a>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 d-flex align-items-center" >
                        <div className="image-stack">
                            <img src={FeatureACOne} alt="" className="stack-front" />
                        </div>

                    </div>
                </div>
                {/* <!-- Features Item --> */}

                <div className="row justify-content-between features-item border border-2">
                    <div className="col-lg-4 d-block mx-auto features-img-bg image-stack" >
                        <img src={FeatureRefgThree} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center flex-column" data-aos="fade-up">
                        <h5 className='text-dark' style={{fontFamily:"Time New Roman"}}>Experience refreshing coolness with our <span className='text-muted fw-bolder'> <q>Refrigerators</q> </span></h5>
                        <p className='mt-4' style={{fontFamily:"cursive"}}>
                        Discover our selection of top-tier refrigerators, meticulously crafted to turn your kitchen into a haven of cool freshness. 
                        Whether you're in search of energy-efficient French door models, stylish side-by-side designs, or space-saving compact options, 
                        we offer the ideal refrigeration solution to suit your requirements...
                        </p>
                        
                        {/* <a href="#f" className=" btn btn-outline-info  font-monospace">Learn More...</a> */}

                        <div class=" col-lg-4 me-auto mb-3">
                        <a href='#f' className=" btn btn-outline-info  font-monospace" type="button">Learn More...</a>
                        </div>
                    </div>
                </div>
                {/* Features Item  */}
            </div>
        </section>
    )
}

export default ProductInfo