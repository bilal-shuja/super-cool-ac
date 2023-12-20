import React, { useEffect, useRef, useState } from 'react';
import './productListing.css';
import Specification from '../components/Specification';
import { useGetProductByIdQuery } from '../features/ProductSlice/ProductByIdSlice';
import { useParams } from 'react-router-dom';
const imageUrl = 'https://supercoolacimages.alphanitesofts.net/';

const ProductListing = () => {
    const { productId } = useParams();
    const { data: productData, isError: productError, isLoading: productLoading } = useGetProductByIdQuery(productId);
    const [product, setProduct] = useState([]);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const openLightbox = (index) => {
        setPhotoIndex(index);
        setLightboxIsOpen(true);
    };


    useEffect(() => {
        setProduct(productData?.data);
    }, [productId, productData]);

    const handleMouseHover = (e) => {
        const container = e.currentTarget;
        const { left, top, width, height } = container.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;

        if (x >= 0 && x <= 100 && y >= 0 && y <= 100) {
            setPosition({ x, y });
            setCursorPosition({ x: e.pageX - left, y: e.pageY - top });
            setShowMagnifier(true);
        } else {
            setShowMagnifier(false);
        }
    };

    if (productLoading) {
        return <div>Loading...</div>;
    } else if (productError) {
        return <div>Error...</div>;
    }
    // const imges = [
    //     {
    //         original: "https://picsum.photos/id/1018/1000/600/",
    //         thumbnail: "https://picsum.photos/id/1018/250/150/"
    //     },
    //     {
    //         original: "https://picsum.photos/id/1015/1000/600/",
    //         thumbnail: "https://picsum.photos/id/1015/250/150/"
    //     },
    //     {
    //         original: "https://picsum.photos/id/1019/1000/600/",
    //         thumbnail: "https://picsum.photos/id/1019/250/150/"
    //     }
    // ]
    const imges = product?.image?.map((image) => ({
        original: `${imageUrl}${image.replace(/\s/g, '%20')}`,
        thumbnail: `${imageUrl}${image.replace(/\s/g, '%20')}`,

    })) || [];
    const thumbnails = imges.map((img) => img.thumbnail);
    const originals = imges.map((img) => img.original);



    return (
        <>
            <section className="product-display" data-title="36000-btus-split-air-conditioners-eforce-series">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-7 col-md-8 col-12">
                            <div className="products-details">
                                <div className="product-display-box">
                                    <div className="thumbnails splide">
                                        <div className="splide__track">
                                            <ul className="splide__list">
                                                {thumbnails.map((img, index) => (
                                                    <li key={index} className="list-unstyled splide__slide">
                                                        <img
                                                            src={img}
                                                            alt={`Thumbnail ${index + 1}`}
                                                            className="lazyload prduct-imgs w-50"
                                                            onClick={() => openLightbox(index)}
                                                        />
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="primary-slider" className="splide">
                                        <div className="splide__track">
                                            <ul className="splide__list">
                                                <li className="splide__slide">
                                                    {product && (
                                                        <div
                                                            className="img-magnifier-container"
                                                            onMouseEnter={() => setShowMagnifier(true)}
                                                            onMouseLeave={() => setShowMagnifier(false)}
                                                            onMouseMove={handleMouseHover}
                                                        >
                                                            <div className="magnifier-img-container">
                                                                <img className="magnifier-img" src={`${originals[photoIndex]}`} alt="" />

                                                                {showMagnifier && (
                                                                    <div
                                                                        style={{
                                                                            position: "absolute",
                                                                            left: `${cursorPosition.x - 100}px`,
                                                                            top: `${cursorPosition.y - 100}px`,
                                                                            pointerEvents: "none",
                                                                        }}
                                                                    >
                                                                        <div
                                                                            className="magnifier-image"
                                                                            style={{
                                                                                backgroundImage: `url(${originals[photoIndex]})`,
                                                                                backgroundPosition: `${position.x}% ${position.y}%`,
                                                                            }}
                                                                        />

                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}
                                                </li>
                                            </ul>
                                        </div>

                                        <p className="gallery-text text-center">Roll over image to zoom in</p>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-section">
                                <div className="product-buttons">
                                    <div className="btn-box share-btn">
                                        <a>
                                            <img src="https://www.supergeneral.com/public/images/products/btn/share.png" className="img-fluid btn-black lazyload" alt="share" />
                                            <img src="https://www.supergeneral.com/public/images/products/btn/share-w.png" className="img-fluid btn-white lazyload" alt="share" />
                                            share
                                        </a>
                                        <a rel="nofollow" href='#' className="fb_share share-social" target="_blank">
                                            <i className="fab fa-facebook" aria-hidden="true"></i>
                                        </a>
                                        <a rel="nofollow" className="mail_share share-social" href="#">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </a>
                                        <a rel="nofollow" href="#" className="whatsup_share share-social" target="_blank">
                                            <i className="fab fa-whatsapp" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div className="btn-box">
                                        <a className="compare" data-slug="36000-btus-split-air-conditioners-eforce-series">
                                            <img src="https://www.supergeneral.com/public/images/products/btn/compare.png" className="img-fluid btn-black lazyload" alt="compare" />
                                            <img src="https://www.supergeneral.com/public/images/products/btn/compare-w.png" className="img-fluid btn-white lazyload" alt="compare" />
                                            Compare
                                        </a>
                                    </div>
                                    <div className="btn-box">
                                        <a className="download-p-img">
                                            <img src="https://www.supergeneral.com/public/images/products/btn/download.png" className="img-fluid btn-black lazyload" alt="download" />
                                            <img src="https://www.supergeneral.com/public/images/products/btn/download-w.png" className="img-fluid btn-white lazyload" alt="download" />
                                            Image
                                        </a>
                                    </div>
                                    <div className="btn-box">
                                        <a id="print-btn" data-val="SGS372HE" data-pagetitle="36000 BTUs Split Air Conditioners – eForce Series">
                                            <img src="https://www.supergeneral.com/public/images/products/btn/print.png" className="img-fluid btn-black lazyload" alt="print" />
                                            <img src="https://www.supergeneral.com/public/images/products/btn/print-w.png" className="img-fluid btn-white lazyload" alt="print" />
                                            Print
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-4 col-12 p-0">
                            {product &&
                                <div className="product-descrptions">
                                    <div className="product-name">
                                        <h2 className="product-code">SGS372HE</h2>
                                        <h1>{product?.name}</h1>
                                    </div>
                                    <div className="key-feature-des">
                                        <h3>Key Features</h3>
                                        <ul>
                                            {product.key_features.map((item, index) => (
                                                <li>{item.name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="d-block">
                                        <div className="btn-amazon">
                                            <a href="https://www.amazon.ae/stores/SuperGeneral/page/26CA8E5C-285E-41D2-84F2-052776CF878E?ref_=ast_bln" target="_blank">
                                                <h6>Buy now on</h6>
                                                <img src="https://www.supergeneral.com/public/images/products/btn/amazon1.webp" className="img-fluid lazyload" alt="buy on amazon" />
                                                <i className="fa fa-angle-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-none">
                                        <div className="btn-where">
                                            <a href="#"> Where To Buy</a>
                                        </div>
                                    </div>
                                    <p className="conditions">Product features & specifications are country specific & Super General Company reserves the right to make any change without prior notice.Some models may not be available in your country.</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section > {product &&
                <Specification product={product} />
            }

        </>
    )
}

export default ProductListing