
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useGetProductsQuery } from '../../features/ProductSlice/ProductSlice';
import { Link } from 'react-router-dom';

const imageUrl = 'https://supercoolacimages.alphanitesofts.net/';

const SliderComponents = () => {
    const { data: productsData, isError: productsDataError, isLoading: productsDataLoading } = useGetProductsQuery();
    const [typeArticles, setTypeArticles] = useState([]);
    const types = ['Window AC', 'Portable AC', 'Floor Standing AC', 'Cassette AC', 'Light Commercial AC - Duct Type', 'Air Curtain'];

    useEffect(() => {
        if (productsData) {
            let articles = [];
            types.forEach((type) => {
                const articlesOfType = productsData.data
                    .filter(item => item.type === type)
                    .map((item, index) => (
                        <div key={index} className='px-3'>
                            <div className="col-lg-12 single_gallery_item women wow fadeInUpBig border" data-wow-delay="0.2s">
                                <Link to='/productListing' >
                                    <div className="product-img">
                                        {item.image != null ? (
                                            <img src={`${imageUrl}${item.image?.[0]}`} alt="Denim Jeans" style={{ height: "320px" }} />
                                        ) : (
                                            <img src='https://supercoolacimages.alphanitesofts.net/1701962517_cyberpunk-2077-cyberpunk-video-games-wallpaper-preview.jpg'
                                                alt="Denim Jeans" style={{ height: "320px" }} />
                                        )}
                                    </div>
                                    <div className="product-description">
                                        <h4 className='text-center text-black'>{item.name}</h4>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ));

                if (articlesOfType.length > 0) {
                    articles.push({ type, typeArticles: articlesOfType });
                }
            });
            setTypeArticles(articles);
        }
    }, [productsData]);

    const slideWidth = 320;
    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: Math.min(4, typeArticles.length),
        variableWidth: typeArticles.length < 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        cssEase: "ease-out",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: Math.min(4, typeArticles.length),
                    slidesToScroll: Math.min(4, typeArticles.length),
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: Math.min(2, typeArticles.length),
                    slidesToScroll: Math.min(2, typeArticles.length),
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: Math.min(1, typeArticles.length),
                    slidesToScroll: Math.min(1, typeArticles.length),
                },
            },
        ],
    };

    return (
        <section className="mt-5 ">
            {typeArticles.map(({ type, typeArticles }, index) => (
                <div key={index}>
                    <div className="container mb-5">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className='section_heading'>
                                    <h2>{type}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mb-0 pb-0">
                        <div className="row">
                            <Slider {...settings}>
                                {typeArticles.map((slide, index) => (
                                    <div key={index} style={{ width: slideWidth }}>
                                        {slide}
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default SliderComponents;
