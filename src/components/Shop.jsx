import React, { useEffect, useState } from 'react'
import './shopStyle.css';
import { useGetProductsQuery } from '../features/ProductSlice/ProductSlice';
const imageUrl = 'https://supercoolacimages.alphanitesofts.net/';
const Shop = () => {
    const acCategories = ['Window AC', 'Portable AC', 'Floor Standing AC', ' Cassette AC', 'Light Commercial AC - Duct Type', 'Air Curtain']
    const CapacityBTU = ['9000-12000 BTUs', '12000-18000 BTUs', ' 18000-24000 BTUs', '24000-30000 BTUs', '30000-36000 BTUs', '36000-48000 BTUs', '48000-60000 BTUs', '70000 BTUs & above']
    const compressorType = ['Reciprocating', 'Scroll', ' Rotary', 'Inverter']
    const { data: productsData, isError: productsDataError, isLoading: productsDataLoading } = useGetProductsQuery();
    console.log(productsData?.data, "products")
    const [selectedACType, setSelectedACType] = useState([]);
    const [selectedCapacityBTU, setSelectedCapacityBTU] = useState([]);
    const [selectedCompressorType, setSelectedCompressorType] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(12);

    const loadMoreProducts = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 12);
    };

    const filteredProducts = productsData?.data?.filter(item => {
        const isACTypeSelected = selectedACType.length === 0 || selectedACType.includes(item.acType);
        const isCapacityBTUSelected = selectedCapacityBTU.length === 0 || selectedCapacityBTU.includes(item.capacityBTU);
        const isCompressorTypeSelected = selectedCompressorType.length === 0 || selectedCompressorType.includes(item.compressorType);

        return isACTypeSelected && isCapacityBTUSelected && isCompressorTypeSelected;
    });
    useEffect(() => (
        console.log(productsData?.data, "products")
    ), [productsData?.data])

    const handleACTypeChange = (value) => {
        // Update selected AC Type options
        setSelectedACType(value);
    };

    const handleCapacityBTUChange = (value) => {
        // Update selected Capacity BTU options
        setSelectedCapacityBTU(value);
    };

    const handleCompressorTypeChange = (value) => {
        // Update selected Compressor Type options
        setSelectedCompressorType(value);
    };
    return (

        <div className="container-fluid mt-5 mb-5 ml-5 ">
            <h2 className='text-center mt-3 pb-3'>Buy Coolest Air Conditioners: Split AC, Portable AC, Window AC</h2>
            <div className="row g-2 ml-5">
                <div className="col-md-2">
                    <div className='container ml-15 text-left'>
                        <div className="processor p-2 ml-5">
                            <div className="heading d-flex justify-content-between align-items-center">
                                <h6 className="text-uppercase">AC Type</h6>
                                <span>--</span>
                            </div>
                            {acCategories.map((item, index) => (
                                <div className="d-flex justify-content-between mt-2" key={index}>
                                    <div className="form-check">
                                        {/* <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault"> {item} </label> */}
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value={item}
                                            id={`acTypeCheckbox${index}`}
                                            checked={selectedACType.includes(item)}
                                            onChange={(e) => handleACTypeChange(e.target.checked ? [...selectedACType, item] : selectedACType.filter(type => type !== item))}
                                        />
                                        <label className="form-check-label" htmlFor={`acTypeCheckbox${index}`}> {item} </label>
                                    </div>
                                    <span>3</span>
                                </div>
                            ))}
                        </div>
                        <div className="brand p-2">
                            <div className="heading d-flex justify-content-between align-items-center">
                                <h6 className="text-uppercase">Capacity BTUs</h6> <span>--</span>
                            </div>
                            {CapacityBTU.map(
                                (item, index) => (
                                    <div className="d-flex justify-content-between mt-2" key={index}>
                                        <div className="form-check">
                                            {/* <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault"> {item} </label> */}
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value={item}
                                                id={`capacityBTUCheckbox${index}`}
                                                checked={selectedCapacityBTU.includes(item)}
                                                onChange={(e) => handleCapacityBTUChange(e.target.checked ? [...selectedCapacityBTU, item] : selectedCapacityBTU.filter(type => type !== item))}
                                            />
                                            <label className="form-check-label" htmlFor={`capacityBTUCheckbox${index}`}> {item} </label>
                                        </div>
                                        <span>13</span>
                                    </div>
                                )
                            )}
                        </div>
                        <div className="type p-2 mb-2">
                            <div className="heading d-flex justify-content-between align-items-center">
                                <h6 className="text-uppercase">Compressor Type</h6>
                                <span>--</span>
                            </div>
                            {compressorType.map((item, index) => (
                                <div className="d-flex justify-content-between mt-2" key={index}>
                                    <div className="form-check">
                                        {/* <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault"> {item} </label> */}
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value={item}
                                            id={`compressorTypeCheckbox${index}`}
                                            checked={selectedCompressorType.includes(item)}
                                            onChange={(e) => handleCompressorTypeChange(e.target.checked ? [...selectedCompressorType, item] : selectedCompressorType.filter(type => type !== item))}
                                        />
                                        <label className="form-check-label" htmlFor={`compressorTypeCheckbox${index}`}> {item} </label>
                                    </div>
                                    <span>23</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div class="col-lg-10 col-md-4 col-12 mx-auto">
                    <div className="row g-2">
                        {filteredProducts ? (
                            filteredProducts.slice(0, visibleProducts).map((item, index) => (
                                <div className="col-md-4 d-flex flex-column" key={index}>
                                    <div className="product flex-column">
                                        <div className="cart-button d-flex justify-content-between border-bottom py-2" >
                                            <a className="btn text-center " >
                                                <i class="fa-solid fa-arrow-right-arrow-left mr-2">{" "}</i>{" "}Compare</a>
                                            <span className="add ">
                                                <a className="btn  text-center " >
                                                    <i className="fa-solid fa-share-nodes ">{" "}</i>
                                                    {" "}Share {" "}
                                                </a>
                                                <span className="additionalButtons">
                                                    <a rel="nofollow"
                                                        href="https://www.facebook.com/sharer.php?https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-ejet-series" className="fb_share share-social" target="_blank">
                                                        <i className="fab fa-facebook" aria-hidden="true"></i>
                                                    </a>
                                                    <a rel="nofollow" className="mail_share share-social"
                                                        href='#'
                                                    //  href="mailto:?subject=Please%20visit%20this%20link%20https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-ejet-series&amp;body=36000 BTUs Split Air Conditioners – eJET Series. Here is the link: https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-ejet-series. Thank you."
                                                    >
                                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                                    </a>
                                                    <a rel="nofollow" href="https://api.whatsapp.com/send?text=Please%20visit%20this%20link%20https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-ejet-series" className="whatsup_share share-social" target="_blank">
                                                        <i className="fab fa-whatsapp" aria-hidden="true"></i>
                                                    </a>
                                                </span>
                                            </span>
                                        </div>
                                        <div className="text-center" >
                                            <div style={{height:"350px"}}>
                                                {item?.image ? (
                                                    <img src={`${imageUrl}${item.image[0]}`} alt={item.name}
                                                        className='card-img-top' style={{height:"100%", objectFit: "cover" }} />
                                                ) : (
                                                    <img src="https://i.imgur.com/VY0R9aV.png" />
                                                )}
                                            </div>
                                            <div className="about text-center card-body" >
                                                <h5 className=''>{item.name}</h5>
                                                <div className="align-items-center mt-5" >
                                                    <a className="product-btn text-center text-uppercase">Learn More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            productsDataLoading
                        )}
                    </div>
                    {filteredProducts && visibleProducts < filteredProducts.length && (
                        <div className="text-center mt-3">
                            <button className="btn btn-primary" onClick={loadMoreProducts}>
                                Load More
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
        // <section className="category-section" id="catergory-selection">
        //     <div className="container">
        //         <div className="row">
        //             <div className="col-12">
        //                 <div className="category-page-heading">
        //                     <h1>Buy Coolest Air Conditioners: Split AC, Portable AC, Window AC</h1>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="row">
        //             <div className="col-12 d-block d-md-none">
        //                 <div className="filter-mobile">
        //                     <div className="filter-mobile-img">
        //                         <img data-src="https://www.supergeneral.com/public/images/icon/filter.png" alt="filter-icon" className="img-fluid lazyload" />
        //                     </div>
        //                     <div className="filter-mobile-text">Filter</div>
        //                 </div>
        //             </div>
        //             <div className="col-lg-2 col-md-4 col-12">
        //                 <div className="category-selection-div">
        //                     <h4>AC Type</h4>
        //                     <ul className="unstyle-list" data-category="air-conditioners">

        //                         <li className="product_type">
        //                             <input className="pf-types form-check-input" type="checkbox" value="split-ac" id="split-ac" />
        //                             <label className="form-check-label" for="split-ac">Split AC</label>
        //                         </li>

        //                         <li className="product_type">
        //                             <input className="pf-types form-check-input" type="checkbox" value="window-ac" id="window-ac" />
        //                             <label className="form-check-label" for="window-ac">Window AC</label>
        //                         </li>

        //                         <li className="product_type">
        //                             <input className="pf-types form-check-input" type="checkbox" value="portable-ac" id="portable-ac" />
        //                             <label className="form-check-label" for="portable-ac">Portable AC</label>
        //                         </li>

        //                         <li className="product_type">
        //                             <input className="pf-types form-check-input" type="checkbox" value="floor-standing-ac" id="floor-standing-ac" />
        //                             <label className="form-check-label" for="floor-standing-ac">Floor Standing AC</label>
        //                         </li>

        //                         <li className="product_type">
        //                             <input className="pf-types form-check-input" type="checkbox" value="cassette-ac" id="cassette-ac" />
        //                             <label className="form-check-label" for="cassette-ac">Cassette AC</label>
        //                         </li>

        //                         <li className="product_type">
        //                             <input className="pf-types form-check-input" type="checkbox" value="light-commercial-ac---duct-type" id="light-commercial-ac---duct-type" />
        //                             <label className="form-check-label" for="light-commercial-ac---duct-type">Light Commercial AC - Duct Type</label>
        //                         </li>

        //                         <li className="product_type">
        //                             <input className="pf-types form-check-input" type="checkbox" value="air-curtain" id="air-curtain" />
        //                             <label className="form-check-label" for="air-curtain">Air Curtain</label>
        //                         </li>
        //                     </ul>
        //                     <h4>Capacity BTUs</h4>
        //                     <ul className="unstyle-list" data-category="air-conditioners">

        //                         <li className="product_type">
        //                             <input className="pf-types form-check-input" type="checkbox" value="9000-12000-btus" id="9000-12000-btus" />
        //                             <label className="form-check-label" for="9000-12000-btus">9000-12000 BTUs</label>
        //                         </li>

        //                         <li className="product_type">
        //                             <input className="pf-types form-check-input" type="checkbox" value="12000-18000-btus" id="12000-18000-btus" />
        //                             <label className="form-check-label" for="12000-18000-btus">12000-18000 BTUs</label>
        //                         </li>

        //                         <li className="product_type">
        //                             <input className="pf-types form-check-input" type="checkbox" value="18000-24000-btus" id="18000-24000-btus" />
        //                             <label className="form-check-label" for="18000-24000-btus">18000-24000 BTUs</label>
        //                         </li>

        //                         <li className="product_type">
        //                             <input className="pf-types form-check-input" type="checkbox" value="24000-30000-btus" id="24000-30000-btus" />
        //                             <label className="form-check-label" for="24000-30000-btus">24000-30000 BTUs</label>
        //                         </li>

        //                         <li className="product_type">
        //                             <input className="pf-types form-check-input" type="checkbox" value="30000-36000-btus" id="30000-36000-btus" />
        //                             <label className="form-check-label" for="30000-36000-btus">30000-36000 BTUs</label>
        //                         </li>

        //                         <li className="product_type">
        //                             <input className="pf-types form-check-input" type="checkbox" value="36000-48000-btus" id="36000-48000-btus" />
        //                             <label className="form-check-label" for="36000-48000-btus">36000-48000 BTUs</label>
        //                         </li>

        //                         <li className="product_type">
        //                             <input className="pf-types form-check-input" type="checkbox" value="48000-60000-btus" id="48000-60000-btus" />
        //                             <label className="form-check-label" for="48000-60000-btus">48000-60000 BTUs</label>
        //                         </li>

        //                         <li className="product_type">
        //                             <input className="pf-types form-check-input" type="checkbox" value="70000-btus-%26-above" id="70000-btus-&-above" />
        //                             <label className="form-check-label" for="70000-btus-%26-above">70000 BTUs & above</label>
        //                         </li>
        //                     </ul>
        //                     <h4>Compressor Type</h4>
        //                     <ul className="unstyle-list" data-category="air-conditioners">

        //                         <li className="product_type">
        //                             <input className="pf-types form-check-input" type="checkbox" value="reciprocating" id="reciprocating" />
        //                             <label className="form-check-label" for="reciprocating">Reciprocating</label>
        //                         </li>

        //                         <li className="product_type">
        //                             <input className="pf-types form-check-input" type="checkbox" value="scroll" id="scroll" />
        //                             <label className="form-check-label" for="scroll">Scroll</label>
        //                         </li>

        //                         <li className="product_type">
        //                             <input className="pf-types form-check-input" type="checkbox" value="rotary" id="rotary" />
        //                             <label className="form-check-label" for="rotary">Rotary</label>
        //                         </li>

        //                         <li className="product_type">
        //                             <input className="pf-types form-check-input" type="checkbox" value="inverter" id="inverter" />
        //                             <label className="form-check-label" for="inverter">Inverter</label>
        //                         </li>
        //                     </ul>
        //                     <div className="apply-btn-category d-block d-md-none">
        //                         <a href="#">Apply</a>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="col-lg-10 col-md-8 col-12 mx-auto">
        //                 {/* <!-- <div className="sort-by-div">
        //                     <div className="sort-by">
        //                         <span className="sort-lb">Sort by</span>
        //                         <select className="form-select buy-nw">
        //                             <option selected>Buy Now</option>
        //                             <option value="1">Buy Now 1</option>
        //                             <option value="2">Buy Now 2</option>
        //                             <option value="3">Buy Now 3</option>
        //                         </select>
        //                     </div>
        //                     <div className="view-all-btn">
        //                         <a href="https://www.supergeneral.com/category/air-conditioners/all-products">View All</a>
        //                     </div>
        //                 </div> --> */}
        //                 <div className="product-category-data">
        //                     <div className="product-category-sec">
        //                         <div className="product-box">
        //                             <div className="product-box-top">
        //                                 <div className="products-links">
        //                                     <div className="products-link-one">
        //                                         <a className="compare" data-slug="36000-btus-split-air-conditioners-eforce-series">
        //                                             <img alt="compare-36000 BTUs Split Air Conditioners – eForce Series" data-src="https://www.supergeneral.com/public/images/icon/compare.png" className="img-fluid lazyload"/>Compare
        //                                         </a>
        //                                     </div>
        //                                     <div className="products-link-one share-btn">
        //                                         <a rel="nofollow" href="">
        //                                             <img alt="share-36000 BTUs Split Air Conditioners – eForce Series" data-src="https://www.supergeneral.com/public/images/icon/share.png" className="img-fluid lazyload"/>Share
        //                                         </a>
        //                                         <a rel="nofollow" href="https://www.facebook.com/sharer.php?https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-eforce-series" className="fb_share share-social" target="_blank">
        //                                             <i className="fab fa-facebook" aria-hidden="true"></i>
        //                                         </a>
        //                                         <a rel="nofollow" className="mail_share share-social" href="mailto:?subject=Please%20visit%20this%20link%20https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-eforce-series&amp;body=36000 BTUs Split Air Conditioners – eForce Series. Here is the link: https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-eforce-series. Thank you.">
        //                                             <i className="fa fa-envelope" aria-hidden="true"></i>
        //                                         </a>
        //                                         <a rel="nofollow" href="https://api.whatsapp.com/send?text=Please%20visit%20this%20link%20https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-eforce-series" className="whatsup_share share-social" target="_blank">
        //                                             <i className="fab fa-whatsapp" aria-hidden="true"></i>
        //                                         </a>
        //                                     </div>
        //                                 </div>
        //                                 <div className="product-image">
        //                                     <a href="https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-eforce-series">
        //                                         <img alt="36000 BTUs Split Air Conditioners – eForce Series" title="36000 BTUs Split Air Conditioners – eForce Series" data-src="https://www.supergeneral.com/media/products/9/sgs380he.webp" className="img-fluid lazyload"/>
        //                                     </a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-box-meta">
        //                                 <div className="product-txt">
        //                                     <h3>36000 BTUs Split Air Conditioners – eForce Series</h3>
        //                                     <p className="product-code">SGS372HE</p>
        //                                 </div>
        //                                 <div className="product-btn">
        //                                     <a href="https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-eforce-series">Learn More</a>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="product-box">
        //                             <div className="product-box-top">
        //                                 <div className="products-links">
        //                                     <div className="products-link-one">
        //                                         <a className="compare" data-slug="36000-btus-split-air-conditioners-ejet-series">
        //                                             <img alt="compare-36000 BTUs Split Air Conditioners – eJET Series" data-src="https://www.supergeneral.com/public/images/icon/compare.png" className="img-fluid lazyload"/>Compare
        //                                         </a>
        //                                     </div>
        //                                     <div className="products-link-one share-btn">
        //                                         <a rel="nofollow" href="">
        //                                             <img alt="share-36000 BTUs Split Air Conditioners – eJET Series" data-src="https://www.supergeneral.com/public/images/icon/share.png" className="img-fluid lazyload"/>Share
        //                                         </a>
        //                                         <a rel="nofollow" href="https://www.facebook.com/sharer.php?https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-ejet-series" className="fb_share share-social" target="_blank">
        //                                             <i className="fab fa-facebook" aria-hidden="true"></i>
        //                                         </a>
        //                                         <a rel="nofollow" className="mail_share share-social" href="mailto:?subject=Please%20visit%20this%20link%20https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-ejet-series&amp;body=36000 BTUs Split Air Conditioners – eJET Series. Here is the link: https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-ejet-series. Thank you.">
        //                                             <i className="fa fa-envelope" aria-hidden="true"></i>
        //                                         </a>
        //                                         <a rel="nofollow" href="https://api.whatsapp.com/send?text=Please%20visit%20this%20link%20https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-ejet-series" className="whatsup_share share-social" target="_blank">
        //                                             <i className="fab fa-whatsapp" aria-hidden="true"></i>
        //                                         </a>
        //                                     </div>
        //                                 </div>
        //                                 <div className="product-image">
        //                                     <a href="https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-ejet-series">
        //                                         <img alt="36000 BTUs Split Air Conditioners – eJET Series" title="36000 BTUs Split Air Conditioners – eJET Series" data-src="https://www.supergeneral.com/media/products/164/sgs135he-sgs195he-sgs245he-sgs315he-sgs365he.webp" className="img-fluid lazyload"/>
        //                                     </a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-box-meta">
        //                                 <div className="product-txt">
        //                                     <h3>36000 BTUs Split Air Conditioners – eJET Series</h3>
        //                                     <p className="product-code">SGS365GE</p>
        //                                 </div>
        //                                 <div className="product-btn">
        //                                     <a href="https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-ejet-series">Learn More</a>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="product-box">
        //                             <div className="product-box-top">
        //                                 <div className="products-links">
        //                                     <div className="products-link-one">
        //                                         <a className="compare" data-slug="36000-btus-split-air-conditioners-sgs370ce">
        //                                             <img alt="compare-36000 BTUs Split Air Conditioners" data-src="https://www.supergeneral.com/public/images/icon/compare.png" className="img-fluid lazyload"/>Compare
        //                                         </a>
        //                                     </div>
        //                                     <div className="products-link-one share-btn">
        //                                         <a rel="nofollow" href="">
        //                                             <img alt="share-36000 BTUs Split Air Conditioners" data-src="https://www.supergeneral.com/public/images/icon/share.png" className="img-fluid lazyload"/>Share
        //                                         </a>
        //                                         <a rel="nofollow" href="https://www.facebook.com/sharer.php?https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-sgs370ce" className="fb_share share-social" target="_blank">
        //                                             <i className="fab fa-facebook" aria-hidden="true"></i>
        //                                         </a>
        //                                         <a rel="nofollow" className="mail_share share-social" href="mailto:?subject=Please%20visit%20this%20link%20https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-sgs370ce&amp;body=36000 BTUs Split Air Conditioners. Here is the link: https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-sgs370ce. Thank you.">
        //                                             <i className="fa fa-envelope" aria-hidden="true"></i>
        //                                         </a>
        //                                         <a rel="nofollow" href="https://api.whatsapp.com/send?text=Please%20visit%20this%20link%20https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-sgs370ce" className="whatsup_share share-social" target="_blank">
        //                                             <i className="fab fa-whatsapp" aria-hidden="true"></i>
        //                                         </a>
        //                                     </div>
        //                                 </div>
        //                                 <div className="product-image">
        //                                     <a href="https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-sgs370ce">
        //                                         <img alt="36000 BTUs Split Air Conditioners" title="36000 BTUs Split Air Conditioners" data-src="https://www.supergeneral.com/media/products/6/sgce-series.webp" className="img-fluid lazyload"/>
        //                                     </a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-box-meta">
        //                                 <div className="product-txt">
        //                                     <h3>36000 BTUs Split Air Conditioners</h3>
        //                                     <p className="product-code">SGS370CE</p>
        //                                 </div>
        //                                 <div className="product-btn">
        //                                     <a href="https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-sgs370ce">Learn More</a>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="product-box">
        //                             <div className="product-box-top">
        //                                 <div className="products-links">
        //                                     <div className="products-link-one">
        //                                         <a className="compare" data-slug="36000-btus-split-air-conditioners-eforce-series-sgs370he">
        //                                             <img alt="compare-36000 BTUs Split Air Conditioners – eForce Series " data-src="https://www.supergeneral.com/public/images/icon/compare.png" className="img-fluid lazyload"/>Compare
        //                                         </a>
        //                                     </div>
        //                                     <div className="products-link-one share-btn">
        //                                         <a rel="nofollow" href="">
        //                                             <img alt="share-36000 BTUs Split Air Conditioners – eForce Series " data-src="https://www.supergeneral.com/public/images/icon/share.png" className="img-fluid lazyload"/>Share
        //                                         </a>
        //                                         <a rel="nofollow" href="https://www.facebook.com/sharer.php?https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-eforce-series-sgs370he" className="fb_share share-social" target="_blank">
        //                                             <i className="fab fa-facebook" aria-hidden="true"></i>
        //                                         </a>
        //                                         <a rel="nofollow" className="mail_share share-social" href="mailto:?subject=Please%20visit%20this%20link%20https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-eforce-series-sgs370he&amp;body=36000 BTUs Split Air Conditioners – eForce Series . Here is the link: https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-eforce-series-sgs370he. Thank you.">
        //                                             <i className="fa fa-envelope" aria-hidden="true"></i>
        //                                         </a>
        //                                         <a rel="nofollow" href="https://api.whatsapp.com/send?text=Please%20visit%20this%20link%20https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-eforce-series-sgs370he" className="whatsup_share share-social" target="_blank">
        //                                             <i className="fab fa-whatsapp" aria-hidden="true"></i>
        //                                         </a>
        //                                     </div>
        //                                 </div>
        //                                 <div className="product-image">
        //                                     <a href="https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-eforce-series-sgs370he">
        //                                         <img alt="36000 BTUs Split Air Conditioners – eForce Series " title="36000 BTUs Split Air Conditioners – eForce Series " data-src="https://www.supergeneral.com/media/products/7/sgs370he.webp" className="img-fluid lazyload"/>
        //                                     </a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-box-meta">
        //                                 <div className="product-txt">
        //                                     <h3>36000 BTUs Split Air Conditioners – eForce Series </h3>
        //                                     <p className="product-code">SGS370HE</p>
        //                                 </div>
        //                                 <div className="product-btn">
        //                                     <a href="https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-eforce-series-sgs370he">Learn More</a>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="product-box">
        //                             <div className="product-box-top">
        //                                 <div className="products-links">
        //                                     <div className="products-link-one">
        //                                         <a className="compare" data-slug="36000-btus-split-air-conditioners-r22-series">
        //                                             <img alt="compare-36000 BTUs Split Air Conditioners – R22 Series" data-src="https://www.supergeneral.com/public/images/icon/compare.png" className="img-fluid lazyload"/>Compare
        //                                         </a>
        //                                     </div>
        //                                     <div className="products-link-one share-btn">
        //                                         <a rel="nofollow" href="">
        //                                             <img alt="share-36000 BTUs Split Air Conditioners – R22 Series" data-src="https://www.supergeneral.com/public/images/icon/share.png" className="img-fluid lazyload"/>Share
        //                                         </a>
        //                                         <a rel="nofollow" href="https://www.facebook.com/sharer.php?https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-r22-series" className="fb_share share-social" target="_blank">
        //                                             <i className="fab fa-facebook" aria-hidden="true"></i>
        //                                         </a>
        //                                         <a rel="nofollow" className="mail_share share-social" href="mailto:?subject=Please%20visit%20this%20link%20https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-r22-series&amp;body=36000 BTUs Split Air Conditioners – R22 Series. Here is the link: https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-r22-series. Thank you.">
        //                                             <i className="fa fa-envelope" aria-hidden="true"></i>
        //                                         </a>
        //                                         <a rel="nofollow" href="https://api.whatsapp.com/send?text=Please%20visit%20this%20link%20https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-r22-series" className="whatsup_share share-social" target="_blank">
        //                                             <i className="fab fa-whatsapp" aria-hidden="true"></i>
        //                                         </a>
        //                                     </div>
        //                                 </div>
        //                                 <div className="product-image">
        //                                     <a href="https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-r22-series">
        //                                         <img alt="36000 BTUs Split Air Conditioners – R22 Series" title="36000 BTUs Split Air Conditioners – R22 Series" data-src="https://www.supergeneral.com/media/products/8/sgs359he-1.webp" className="img-fluid lazyload"/>
        //                                     </a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-box-meta">
        //                                 <div className="product-txt">
        //                                     <h3>36000 BTUs Split Air Conditioners – R22 Series</h3>
        //                                     <p className="product-code">SGS359HE</p>
        //                                 </div>
        //                                 <div className="product-btn">
        //                                     <a href="https://www.supergeneral.com/ae/product/36000-btus-split-air-conditioners-r22-series">Learn More</a>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="product-box">
        //                             <div className="product-box-top">
        //                                 <div className="products-links">
        //                                     <div className="products-link-one">
        //                                         <a className="compare" data-slug="split-air-conditioner-rotary-series-5">
        //                                             <img alt="compare-33000 BTUs Split Air Conditioner – Rotary Series" data-src="https://www.supergeneral.com/public/images/icon/compare.png" className="img-fluid lazyload"/>Compare
        //                                         </a>
        //                                     </div>
        //                                     <div className="products-link-one share-btn">
        //                                         <a rel="nofollow" href="">
        //                                             <img alt="share-33000 BTUs Split Air Conditioner – Rotary Series" data-src="https://www.supergeneral.com/public/images/icon/share.png" className="img-fluid lazyload"/>Share
        //                                         </a>
        //                                         <a rel="nofollow" href="https://www.facebook.com/sharer.php?https://www.supergeneral.com/ae/product/split-air-conditioner-rotary-series-5" className="fb_share share-social" target="_blank">
        //                                             <i className="fab fa-facebook" aria-hidden="true"></i>
        //                                         </a>
        //                                         <a rel="nofollow" className="mail_share share-social" href="mailto:?subject=Please%20visit%20this%20link%20https://www.supergeneral.com/ae/product/split-air-conditioner-rotary-series-5&amp;body=33000 BTUs Split Air Conditioner – Rotary Series. Here is the link: https://www.supergeneral.com/ae/product/split-air-conditioner-rotary-series-5. Thank you.">
        //                                             <i className="fa fa-envelope" aria-hidden="true"></i>
        //                                         </a>
        //                                         <a rel="nofollow" href="https://api.whatsapp.com/send?text=Please%20visit%20this%20link%20https://www.supergeneral.com/ae/product/split-air-conditioner-rotary-series-5" className="whatsup_share share-social" target="_blank">
        //                                             <i className="fab fa-whatsapp" aria-hidden="true"></i>
        //                                         </a>
        //                                     </div>
        //                                 </div>
        //                                 <div className="product-image">
        //                                     <a href="https://www.supergeneral.com/ae/product/split-air-conditioner-rotary-series-5">
        //                                         <img alt="33000 BTUs Split Air Conditioner – Rotary Series" title="33000 BTUs Split Air Conditioner – Rotary Series" data-src="https://www.supergeneral.com/media/products/118/1-11.webp" className="img-fluid lazyload"/>
        //                                     </a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-box-meta">
        //                                 <div className="product-txt">
        //                                     <h3>33000 BTUs Split Air Conditioner – Rotary Series</h3>
        //                                     <p className="product-code">SGS365NE</p>
        //                                 </div>
        //                                 <div className="product-btn">
        //                                     <a href="https://www.supergeneral.com/ae/product/split-air-conditioner-rotary-series-5">Learn More</a>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="product-box">
        //                             <div className="product-box-top">
        //                                 <div className="products-links">
        //                                     <div className="products-link-one">
        //                                         <a className="compare" data-slug="32000-btus-split-air-conditioners-sgs320ce">
        //                                             <img alt="compare-32000 BTUs Split Air Conditioners" data-src="https://www.supergeneral.com/public/images/icon/compare.png" className="img-fluid lazyload"/>Compare
        //                                         </a>
        //                                     </div>
        //                                     <div className="products-link-one share-btn">
        //                                         <a rel="nofollow" href="">
        //                                             <img alt="share-32000 BTUs Split Air Conditioners" data-src="https://www.supergeneral.com/public/images/icon/share.png" className="img-fluid lazyload"/>Share
        //                                         </a>
        //                                         <a rel="nofollow" href="https://www.facebook.com/sharer.php?https://www.supergeneral.com/ae/product/32000-btus-split-air-conditioners-sgs320ce" className="fb_share share-social" target="_blank">
        //                                             <i className="fab fa-facebook" aria-hidden="true"></i>
        //                                         </a>
        //                                         <a rel="nofollow" className="mail_share share-social" href="mailto:?subject=Please%20visit%20this%20link%20https://www.supergeneral.com/ae/product/32000-btus-split-air-conditioners-sgs320ce&amp;body=32000 BTUs Split Air Conditioners. Here is the link: https://www.supergeneral.com/ae/product/32000-btus-split-air-conditioners-sgs320ce. Thank you.">
        //                                             <i className="fa fa-envelope" aria-hidden="true"></i>
        //                                         </a>
        //                                         <a rel="nofollow" href="https://api.whatsapp.com/send?text=Please%20visit%20this%20link%20https://www.supergeneral.com/ae/product/32000-btus-split-air-conditioners-sgs320ce" className="whatsup_share share-social" target="_blank">
        //                                             <i className="fab fa-whatsapp" aria-hidden="true"></i>
        //                                         </a>
        //                                     </div>
        //                                 </div>
        //                                 <div className="product-image">
        //                                     <a href="https://www.supergeneral.com/ae/product/32000-btus-split-air-conditioners-sgs320ce">
        //                                         <img alt="32000 BTUs Split Air Conditioners" title="32000 BTUs Split Air Conditioners" data-src="https://www.supergeneral.com/media/products/10/sgce-series-1.webp" className="img-fluid lazyload"/>
        //                                     </a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-box-meta">
        //                                 <div className="product-txt">
        //                                     <h3>32000 BTUs Split Air Conditioners</h3>
        //                                     <p className="product-code">SGS320CE</p>
        //                                 </div>
        //                                 <div className="product-btn">
        //                                     <a href="https://www.supergeneral.com/ae/product/32000-btus-split-air-conditioners-sgs320ce">Learn More</a>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="product-box">
        //                             <div className="product-box-top">
        //                                 <div className="products-links">
        //                                     <div className="products-link-one">
        //                                         <a className="compare" data-slug="31400-btus-split-air-conditioner-rotary-series-sgs366ge">
        //                                             <img alt="compare-31400 BTUs Split Air Conditioner – Rotary Series " data-src="https://www.supergeneral.com/public/images/icon/compare.png" className="img-fluid lazyload"/>Compare
        //                                         </a>
        //                                     </div>
        //                                     <div className="products-link-one share-btn">
        //                                         <a rel="nofollow" href="">
        //                                             <img alt="share-31400 BTUs Split Air Conditioner – Rotary Series " data-src="https://www.supergeneral.com/public/images/icon/share.png" className="img-fluid lazyload"/>Share
        //                                         </a>
        //                                         <a rel="nofollow" href="https://www.facebook.com/sharer.php?https://www.supergeneral.com/ae/product/31400-btus-split-air-conditioner-rotary-series-sgs366ge" className="fb_share share-social" target="_blank">
        //                                             <i className="fab fa-facebook" aria-hidden="true"></i>
        //                                         </a>
        //                                         <a rel="nofollow" className="mail_share share-social" href="mailto:?subject=Please%20visit%20this%20link%20https://www.supergeneral.com/ae/product/31400-btus-split-air-conditioner-rotary-series-sgs366ge&amp;body=31400 BTUs Split Air Conditioner – Rotary Series . Here is the link: https://www.supergeneral.com/ae/product/31400-btus-split-air-conditioner-rotary-series-sgs366ge. Thank you.">
        //                                             <i className="fa fa-envelope" aria-hidden="true"></i>
        //                                         </a>
        //                                         <a rel="nofollow" href="https://api.whatsapp.com/send?text=Please%20visit%20this%20link%20https://www.supergeneral.com/ae/product/31400-btus-split-air-conditioner-rotary-series-sgs366ge" className="whatsup_share share-social" target="_blank">
        //                                             <i className="fab fa-whatsapp" aria-hidden="true"></i>
        //                                         </a>
        //                                     </div>
        //                                 </div>
        //                                 <div className="product-image">
        //                                     <a href="https://www.supergeneral.com/ae/product/31400-btus-split-air-conditioner-rotary-series-sgs366ge">
        //                                         <img alt="31400 BTUs Split Air Conditioner – Rotary Series " title="31400 BTUs Split Air Conditioner – Rotary Series " data-src="https://www.supergeneral.com/media/products/120/1-21.webp" className="img-fluid lazyload"/>
        //                                     </a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-box-meta">
        //                                 <div className="product-txt">
        //                                     <h3>31400 BTUs Split Air Conditioner – Rotary Series </h3>
        //                                     <p className="product-code">SGS366GE</p>
        //                                 </div>
        //                                 <div className="product-btn">
        //                                     <a href="https://www.supergeneral.com/ae/product/31400-btus-split-air-conditioner-rotary-series-sgs366ge">Learn More</a>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="product-box">
        //                             <div className="product-box-top">
        //                                 <div className="products-links">
        //                                     <div className="products-link-one">
        //                                         <a className="compare" data-slug="30000-btu-split-air-conditioner-">
        //                                             <img alt="compare-30000 BTU Split Air Conditioner " data-src="https://www.supergeneral.com/public/images/icon/compare.png" className="img-fluid lazyload"/>Compare
        //                                         </a>
        //                                     </div>
        //                                     <div className="products-link-one share-btn">
        //                                         <a rel="nofollow" href="">
        //                                             <img alt="share-30000 BTU Split Air Conditioner " data-src="https://www.supergeneral.com/public/images/icon/share.png" className="img-fluid lazyload"/>Share
        //                                         </a>
        //                                         <a rel="nofollow" href="https://www.facebook.com/sharer.php?https://www.supergeneral.com/ae/product/30000-btu-split-air-conditioner-" className="fb_share share-social" target="_blank">
        //                                             <i className="fab fa-facebook" aria-hidden="true"></i>
        //                                         </a>
        //                                         <a rel="nofollow" className="mail_share share-social" href="mailto:?subject=Please%20visit%20this%20link%20https://www.supergeneral.com/ae/product/30000-btu-split-air-conditioner-&amp;body=30000 BTU Split Air Conditioner . Here is the link: https://www.supergeneral.com/ae/product/30000-btu-split-air-conditioner-. Thank you.">
        //                                             <i className="fa fa-envelope" aria-hidden="true"></i>
        //                                         </a>
        //                                         <a rel="nofollow" href="https://api.whatsapp.com/send?text=Please%20visit%20this%20link%20https://www.supergeneral.com/ae/product/30000-btu-split-air-conditioner-" className="whatsup_share share-social" target="_blank">
        //                                             <i className="fab fa-whatsapp" aria-hidden="true"></i>
        //                                         </a>
        //                                     </div>
        //                                 </div>
        //                                 <div className="product-image">
        //                                     <a href="https://www.supergeneral.com/ae/product/30000-btu-split-air-conditioner-">
        //                                         <img alt="30000 BTU Split Air Conditioner " title="30000 BTU Split Air Conditioner " data-src="https://www.supergeneral.com/media/products/326/sgs311-4ge_1.webp" className="img-fluid lazyload"/>
        //                                     </a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-box-meta">
        //                                 <div className="product-txt">
        //                                     <h3>30000 BTU Split Air Conditioner </h3>
        //                                     <p className="product-code">SGS311-4GE</p>
        //                                 </div>
        //                                 <div className="product-btn">
        //                                     <a href="https://www.supergeneral.com/ae/product/30000-btu-split-air-conditioner-">Learn More</a>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="product-box">
        //                             <div className="product-box-top">
        //                                 <div className="products-links">
        //                                     <div className="products-link-one">
        //                                         <a className="compare" data-slug="30000-btu-split-air-conditioners">
        //                                             <img alt="compare-30000 BTU Split Air Conditioners" data-src="https://www.supergeneral.com/public/images/icon/compare.png" className="img-fluid lazyload"/>Compare
        //                                         </a>
        //                                     </div>
        //                                     <div className="products-link-one share-btn">
        //                                         <a rel="nofollow" href="">
        //                                             <img alt="share-30000 BTU Split Air Conditioners" data-src="https://www.supergeneral.com/public/images/icon/share.png" className="img-fluid lazyload"/>Share
        //                                         </a>
        //                                         <a rel="nofollow" href="https://www.facebook.com/sharer.php?https://www.supergeneral.com/ae/product/30000-btu-split-air-conditioners" className="fb_share share-social" target="_blank">
        //                                             <i className="fab fa-facebook" aria-hidden="true"></i>
        //                                         </a>
        //                                         <a rel="nofollow" className="mail_share share-social" href="mailto:?subject=Please%20visit%20this%20link%20https://www.supergeneral.com/ae/product/30000-btu-split-air-conditioners&amp;body=30000 BTU Split Air Conditioners. Here is the link: https://www.supergeneral.com/ae/product/30000-btu-split-air-conditioners. Thank you.">
        //                                             <i className="fa fa-envelope" aria-hidden="true"></i>
        //                                         </a>
        //                                         <a rel="nofollow" href="https://api.whatsapp.com/send?text=Please%20visit%20this%20link%20https://www.supergeneral.com/ae/product/30000-btu-split-air-conditioners" className="whatsup_share share-social" target="_blank">
        //                                             <i className="fab fa-whatsapp" aria-hidden="true"></i>
        //                                         </a>
        //                                     </div>
        //                                 </div>
        //                                 <div className="product-image">
        //                                     <a href="https://www.supergeneral.com/ae/product/30000-btu-split-air-conditioners">
        //                                         <img alt="30000 BTU Split Air Conditioners" title="30000 BTU Split Air Conditioners" data-src="https://www.supergeneral.com/media/products/171/sgs260-4ge.webp" className="img-fluid lazyload"/>
        //                                     </a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-box-meta">
        //                                 <div className="product-txt">
        //                                     <h3>30000 BTU Split Air Conditioners</h3>
        //                                     <p className="product-code">SGS320-4GE</p>
        //                                 </div>
        //                                 <div className="product-btn">
        //                                     <a href="https://www.supergeneral.com/ae/product/30000-btu-split-air-conditioners">Learn More</a>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="product-box">
        //                             <div className="product-box-top">
        //                                 <div className="products-links">
        //                                     <div className="products-link-one">
        //                                         <a className="compare" data-slug="30000-btus-split-air-conditioner-reciprocating-series">
        //                                             <img alt="compare-30000 BTUs Split Air Conditioner Reciprocating Series" data-src="https://www.supergeneral.com/public/images/icon/compare.png" className="img-fluid lazyload"/>Compare
        //                                         </a>
        //                                     </div>
        //                                     <div className="products-link-one share-btn">
        //                                         <a rel="nofollow" href="">
        //                                             <img alt="share-30000 BTUs Split Air Conditioner Reciprocating Series" data-src="https://www.supergeneral.com/public/images/icon/share.png" className="img-fluid lazyload"/>Share
        //                                         </a>
        //                                         <a rel="nofollow" href="https://www.facebook.com/sharer.php?https://www.supergeneral.com/ae/product/30000-btus-split-air-conditioner-reciprocating-series" className="fb_share share-social" target="_blank">
        //                                             <i className="fab fa-facebook" aria-hidden="true"></i>
        //                                         </a>
        //                                         <a rel="nofollow" className="mail_share share-social" href="mailto:?subject=Please%20visit%20this%20link%20https://www.supergeneral.com/ae/product/30000-btus-split-air-conditioner-reciprocating-series&amp;body=30000 BTUs Split Air Conditioner Reciprocating Series. Here is the link: https://www.supergeneral.com/ae/product/30000-btus-split-air-conditioner-reciprocating-series. Thank you.">
        //                                             <i className="fa fa-envelope" aria-hidden="true"></i>
        //                                         </a>
        //                                         <a rel="nofollow" href="https://api.whatsapp.com/send?text=Please%20visit%20this%20link%20https://www.supergeneral.com/ae/product/30000-btus-split-air-conditioner-reciprocating-series" className="whatsup_share share-social" target="_blank">
        //                                             <i className="fab fa-whatsapp" aria-hidden="true"></i>
        //                                         </a>
        //                                     </div>
        //                                 </div>
        //                                 <div className="product-image">
        //                                     <a href="https://www.supergeneral.com/ae/product/30000-btus-split-air-conditioner-reciprocating-series">
        //                                         <img alt="30000 BTUs Split Air Conditioner Reciprocating Series" title="30000 BTUs Split Air Conditioner Reciprocating Series" data-src="https://www.supergeneral.com/media/products/619/1683792599-sgs136g1-sgs195ae-sgs256ge--316ge-366ge_1.webp" className="img-fluid lazyload"/>
        //                                     </a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-box-meta">
        //                                 <div className="product-txt">
        //                                     <h3>30000 BTUs Split Air Conditioner Reciprocating Series</h3>
        //                                     <p className="product-code">SGS320AE</p>
        //                                 </div>
        //                                 <div className="product-btn">
        //                                     <a href="https://www.supergeneral.com/ae/product/30000-btus-split-air-conditioner-reciprocating-series">Learn More</a>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="product-box">
        //                             <div className="product-box-top">
        //                                 <div className="products-links">
        //                                     <div className="products-link-one">
        //                                         <a className="compare" data-slug="30000-btus-split-air-conditioners">
        //                                             <img alt="compare-30000 BTUs Split Air Conditioners" data-src="https://www.supergeneral.com/public/images/icon/compare.png" className="img-fluid lazyload"/>Compare
        //                                         </a>
        //                                     </div>
        //                                     <div className="products-link-one share-btn">
        //                                         <a rel="nofollow" href="">
        //                                             <img alt="share-30000 BTUs Split Air Conditioners" data-src="https://www.supergeneral.com/public/images/icon/share.png" className="img-fluid lazyload"/>Share
        //                                         </a>
        //                                         <a rel="nofollow" href="https://www.facebook.com/sharer.php?https://www.supergeneral.com/ae/product/30000-btus-split-air-conditioners" className="fb_share share-social" target="_blank">
        //                                             <i className="fab fa-facebook" aria-hidden="true"></i>
        //                                         </a>
        //                                         <a rel="nofollow" className="mail_share share-social" href="mailto:?subject=Please%20visit%20this%20link%20https://www.supergeneral.com/ae/product/30000-btus-split-air-conditioners&amp;body=30000 BTUs Split Air Conditioners. Here is the link: https://www.supergeneral.com/ae/product/30000-btus-split-air-conditioners. Thank you.">
        //                                             <i className="fa fa-envelope" aria-hidden="true"></i>
        //                                         </a>
        //                                         <a rel="nofollow" href="https://api.whatsapp.com/send?text=Please%20visit%20this%20link%20https://www.supergeneral.com/ae/product/30000-btus-split-air-conditioners" className="whatsup_share share-social" target="_blank">
        //                                             <i className="fab fa-whatsapp" aria-hidden="true"></i>
        //                                         </a>
        //                                     </div>
        //                                 </div>
        //                                 <div className="product-image">
        //                                     <a href="https://www.supergeneral.com/ae/product/30000-btus-split-air-conditioners">
        //                                         <img alt="30000 BTUs Split Air Conditioners" title="30000 BTUs Split Air Conditioners" data-src="https://www.supergeneral.com/media/products/169/sgs322he.webp" className="img-fluid lazyload"/>
        //                                     </a>
        //                                 </div>
        //                             </div>
        //                             <div className="product-box-meta">
        //                                 <div className="product-txt">
        //                                     <h3>30000 BTUs Split Air Conditioners</h3>
        //                                     <p className="product-code">SGS322HE</p>
        //                                 </div>
        //                                 <div className="product-btn">
        //                                     <a href="https://www.supergeneral.com/ae/product/30000-btus-split-air-conditioners">Learn More</a>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div data-limit="12" data-total="148" data-remaining="136" data-category="air-conditioners" className="btn-know-more text-center">
        //                         <a id="load-more-products" data-start="1" href="javascript:void(0);">Load More</a>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="col-12">
        //                 <div className="category-description">
        //                     <h2>Buy Residential Air Conditioners at the Best Price in the UAE</h2>
        //                     <p>Gone are the days of tedious in-person buying. And even though we have more intense summers these days, we don’t have to spend long hours perusing air conditioners in-person at appliance shops. These days, browsing air conditioners has gotten a whole lot easier in the comfort of our homes. And Super General has a fantastic range of residential air conditioners available online. You are sure to find the residential air condition that suits your needs and your price range for sure! But, before you take the plunge, here are a few things you should consider before buying the right AC for your home.</p>
        //                     <div className="moretext" style={{display: "block"}}>
        //                         <p>From their inception, residential air conditioning systems have made our lives easier. The basic categories of Air conditioners are Window AC, Split AC, Portable AC and Inverter AC.</p>

        //                         <p><b>Window AC-</b>
        //                             In the Super General online store you can find compact window air conditioners that are ideal for someone on a budget and also for smaller apartments where space is tight. You can find the best selection of name brand ACs from a large variety of window ACs from 0.7 tons to 1 ton. Additionally, these units have a single compact profile that integrates the compressor, condenser valve and other components making these ACs serious space savers. If you have a space that is around 200-400 sq ft. a window AC is the perfect pick for you.</p>
        //                         <p><b>Split AC- </b>
        //                             Perhaps the most versatile air conditioners out there in the market today, split unit ACs are perfect for every space. <a href="https://www.supergeneral.com/ae/products/air-conditioners?types=split-ac-n-window-ac">Split unit ACs</a> come in various sizes and aesthetics to suit your cooling and decor needs. At Super General’s online store, you can find the AC that works for you. Apart from a fantastic cooling system, these ACs come with additional filters to keep your home dust and germ free. If you’re looking for ways to save energy and cut down on your electric bill, an inverter AC is your best friend. A subtype of the Split AC, Inverter ACs, on average help cut down electricity bills by 30-50%. They also cool rooms faster.</p>
        //                         <p><b>Portable AC- </b>
        //                             If you are on the move a lot and change homes often, a <a href="https://www.supergeneral.com/ae/products/air-conditioners?types=portable-ac">portable AC</a> is a good investment for you. Super General offers 9000 BTUs – 18000 BTU for some serious cooling. What’s more, these ACs have all the features of split ACs and window ACs. These ACs are a great investment for specific cooling needs, especially if you like the option of moving your AC from one place to another.</p>
        //                         <p><b>Floor standing AC- </b>
        //                             As the name suggests a <a href="https://www.supergeneral.com/ae/products/air-conditioners?types=floor-standing-ac">floor AC stands</a> on the floor unlike its counterpart that is wall mounted. Floor ACs are ideal for places like restaurants, halls, motels and banks. Floor ACs usually have a higher tonnage and hence more cooling capacity.</p>

        //                         <p>Shopping at <a href="https://www.supergeneral.com/ae" title="" target="">Super General</a> is super easy. Once you’ve weighed all the odds, come down to our store, speak to our team of experts and let the magic happen.</p>
        //                     </div>                </div>
        //             </div>
        //             <div className="col-12">
        //                 <ul className="catergory-list-header list-inline text-center">
        //                     <li className="list-inline-item"><a href="https://www.supergeneral.com/ae">Home</a></li>
        //                     <li className="list-inline-item"><a href="https://www.supergeneral.com/ae/products">Product Category</a></li>
        //                     <li className="list-inline-item"><a href="https://www.supergeneral.com/ae/products/air-conditioners">Air Conditioners</a></li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </section>


    )

}


export default Shop