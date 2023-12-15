import React from 'react'
const imageUrl = 'https://supercoolacimages.alphanitesofts.net/';
const Specification = ({product}) => {
    return (
        <section class="specification-section">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <nav class="product-spec">
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <button class="nav-link active" id="nav-key-tab" data-bs-toggle="tab" data-bs-target="#nav-key" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Key Features</button>
                                <button class="nav-link " id="nav-spec-tab" data-bs-toggle="tab" data-bs-target="#nav-spec" type="button" role="tab" aria-controls="nav-profile" aria-selected="false"> Specifications</button>
                                <button class="nav-link" id="nav-support-tab" data-bs-toggle="tab" data-bs-target="#nav-support" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Support</button>
                                <button class="nav-link" id="nav-buy-tab" data-bs-toggle="tab" data-bs-target="#nav-buy" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Where to Buy</button>
                            </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade active show" id="nav-key" role="tabpanel" aria-labelledby="nav-key-tab">
                                <div class="key-feature key-feature-100">
                                    {product?.key_features &&
                                    product.key_features.map((item, index) =>(
                                    <div class="key-feature-box key-feature-box-50">
                                        <div class="key-feature-box-img">
                                            <img src={`${imageUrl}${item.image}`} class="img-fluid lazyload" alt="4 Way Swing" />
                                        </div>
                                        <div class="key-feature-box-content">
                                            <h5>{item.name}</h5>
                                        </div>
                                    </div>
                                    ))
                                    }
                                </div>
                            </div>
                            <div class="tab-pane fade " id="nav-spec" role="tabpanel" aria-labelledby="nav-spec-tab">
                                <div class="specification">
                                    {
                                        product?.specifications &&
                                        product?.specifications?.map((item,index)=>(
                                            <div class="specification-box" key={index}>
                                        <div class="specification-box-name">
                                            <h6>{item.name}</h6>
                                        </div>
                                        <div class="specification-box-units">
                                            <h6>{item.value}</h6>
                                        </div>
                                    </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div class="tab-pane fade" id="nav-support" role="tabpanel" aria-labelledby="nav-support-tab">
                                <div class="key-feature">
                                    <div class="key-feature-box">
                                        <div class="key-feature-box-img">
                                            <img src="/phone.webp" class="img-fluid lazyload" alt="phone" />
                                        </div>
                                        <div class="key-feature-box-content">
                                            <h5><a href="tel:+971600544333">600 544 333</a></h5>
                                        </div>
                                    </div>
                                    <div class="key-feature-box">
                                        <div class="key-feature-box-img">
                                            <img src="/whatsapp.webp" class="img-fluid lazyload" alt="whatsapp" />
                                        </div>
                                        <div class="key-feature-box-content">
                                            <h5><a href="https://wa.me/+971600544333"> 600 544 333</a></h5>
                                        </div>
                                    </div>
                                    <div class="key-feature-box">
                                        <div class="key-feature-box-img">
                                            <img src="/email.webp" class="img-fluid lazyload" alt="email" />
                                        </div>
                                        <div class="key-feature-box-content">
                                            <h5><a href="mailto:Service_geco@gecouae.ae">Service_geco@gecouae.ae</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="nav-buy" role="tabpanel" aria-labelledby="nav-buy-tab">
                                <h4>KEY OUTLETS</h4>
                                <div class="col-keyout">
                                    <div class="col-key">
                                        <ul>
                                            <li>Ansar Group</li>
                                            <li>Carrefour</li>
                                            <li>Emax</li>
                                            <li>Ecity</li>
                                        </ul>
                                    </div>
                                    <div class="col-key">
                                        <ul>
                                            <li>KM Trading</li>
                                            <li>Lulu</li>
                                            <li>Nesto</li>
                                            <li>Safeer</li>
                                        </ul>
                                    </div>
                                    <div class="col-key">
                                        <ul>
                                            <li>Sharaf DG</li>
                                            <li>Sharjah Cooperative</li>
                                            <li>Union Cooperative</li>
                                        </ul>
                                    </div>
                                </div>
                                <h4>BUY ONLINE</h4>
                                <div class="online-flex">
                                    <div class="online-col">
                                        <img src="https://www.supergeneral.com/public/images/amazon.webp" class="img-fluid lazyload" alt="Amazon" />
                                        <a href="#" target="_blank">Buy Now</a>
                                    </div>
                                    <div class="online-col">
                                        <img src="https://www.supergeneral.com/public/images/sharaf-dg.webp" class="img-fluid lazyload" alt="Sharaf DG" />
                                        <a href="#" target="_blank">Buy Now</a>
                                    </div>
                                    <div class="online-col">
                                        <img src="https://www.supergeneral.com/public/images/noon.webp" class="img-fluid lazyload" alt="Noon" />
                                        <a href="#" target="_blank">Buy Now</a>
                                    </div>
                                    <div class="online-col">
                                        <img src="https://www.supergeneral.com/public/images/carrefour.webp" class="img-fluid lazyload" alt="Carrefour" />
                                        <a href="#" target="_blank">Buy Now</a>
                                    </div>
                                    <div class="online-col">
                                        <img src="https://www.supergeneral.com/public/images/lulu.webp" class="img-fluid lazyload" alt="Lulu" />
                                        <a href="#" target="_blank">Buy Now</a>
                                    </div>
                                </div>
                                <div class="d-none">
                                    <div class="showroom-box-row">
                                        <div class="showroom-box">
                                            <div class="showroom-box-city">
                                                <h3>DUBAI</h3>
                                                <div class="showroom-flex">
                                                    <div class="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/location.png" class="img-fluid lazyload" />
                                                    </div>
                                                    <div class="showroom-flex-text">MPC Building, Airport Road, Near Cargo Village,<br /> P.O. Box No: 51027, Dubai, UAE.</div>
                                                </div>
                                                <div class="showroom-flex">
                                                    <div class="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/call.png" class="img-fluid lazyload" />
                                                    </div>
                                                    <div class="showroom-flex-text">04-2501230</div>
                                                </div>
                                                <div class="showroom-flex">
                                                    <div class="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/telephone.png" class="img-fluid lazyload" />
                                                    </div>
                                                    <div class="showroom-flex-text">04-2501265</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="showroom-box">
                                            <div class="showroom-box-city border-right-0">
                                                <h3>DUBAI</h3>
                                                <div class="showroom-flex">
                                                    <div class="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/location.png" class="img-fluid lazyload" />
                                                    </div>
                                                    <div class="showroom-flex-text">Behind Sabkha Bus Station,<br /> Fikree Market, Deira – Dubai, UAE.</div>
                                                </div>
                                                <div class="showroom-flex">
                                                    <div class="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/call.png" class="img-fluid lazyload" />
                                                    </div>
                                                    <div class="showroom-flex-text">04-2252682</div>
                                                </div>
                                                <div class="showroom-flex">
                                                    <div class="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/telephone.png" class="img-fluid lazyload" />
                                                    </div>
                                                    <div class="showroom-flex-text">04-2265793</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="showroom-box">
                                            <div class="showroom-box-city">
                                                <h3>DUBAI</h3>
                                                <div class="showroom-flex">
                                                    <div class="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/location.png" class="img-fluid lazyload" />
                                                    </div>
                                                    <div class="showroom-flex-text">Behind Sabkha Bus Station, Back Side of <br /> Grand Sina Hotel, Fikree Market, Deira – Dubai, UAE.</div>
                                                </div>
                                                <div class="showroom-flex">
                                                    <div class="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/call.png" class="img-fluid lazyload" />
                                                    </div>
                                                    <div class="showroom-flex-text">04-2252936</div>
                                                </div>
                                                <div class="showroom-flex">
                                                    <div class="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/telephone.png" class="img-fluid lazyload" />
                                                    </div>
                                                    <div class="showroom-flex-text">04-2252049</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="showroom-box">
                                            <div class="showroom-box-city border-right-0">
                                                <h3>SHARJAH</h3>
                                                <div class="showroom-flex">
                                                    <div class="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/location.png" class="img-fluid lazyload" />
                                                    </div>
                                                    <div class="showroom-flex-text">Al Arooba Building, Opposite of Al Ansari Exchange,<br /> Next to Manama Supermarket, Rolla – Sharjah, UAE.</div>
                                                </div>
                                                <div class="showroom-flex">
                                                    <div class="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/call.png" class="img-fluid lazyload" />
                                                    </div>
                                                    <div class="showroom-flex-text">06-5680255</div>
                                                </div>
                                                <div class="showroom-flex">
                                                    <div class="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/telephone.png" class="img-fluid lazyload" />
                                                    </div>
                                                    <div class="showroom-flex-text">06-5680688</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="showroom-box mb-0">
                                            <div class="showroom-box-city border-right-0 border-bottom-0">
                                                <h3>ABU DHABI</h3>
                                                <div class="showroom-flex">
                                                    <div class="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/location.png" class="img-fluid lazyload" />
                                                    </div>
                                                    <div class="showroom-flex-text">Building – 188, Shabia – 10, Next To Pure Veg <br />Restaurant, Nearby Al Jazeera Medical Centre<br /> Bus Stop, Musaffah, Abudhabi.</div>
                                                </div>
                                                <div class="showroom-flex">
                                                    <div class="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/call.png" class="img-fluid lazyload" />
                                                    </div>
                                                    <div class="showroom-flex-text">02-4476047</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-none">
                                    <div class="showroom-box-row">
                                        <div class="showroom-box">
                                            <div class="showroom-box-city">
                                                <h3>SHOWROOM</h3>
                                                <div class="showroom-flex">
                                                    <div class="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/location.png" class="img-fluid lazyload" />
                                                    </div>
                                                    <div class="showroom-flex-text">Musannah – Tareef, Oman</div>
                                                </div>
                                                <div class="showroom-flex">
                                                    <div class="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/call.png" class="img-fluid lazyload" />
                                                    </div>
                                                    <div class="showroom-flex-text">00968 26869724</div>
                                                </div>
                                                <div class="showroom-flex">
                                                    <div class="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/telephone.png" class="img-fluid lazyload" />
                                                    </div>
                                                    <div class="showroom-flex-text">00968 26970080</div>
                                                </div>
                                                <div class="showroom-flex">
                                                    <div class="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/mail.png" class="img-fluid lazyload" />
                                                    </div>
                                                    <div class="showroom-flex-text">sgcmusannah@supergeneral.ae</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Specification