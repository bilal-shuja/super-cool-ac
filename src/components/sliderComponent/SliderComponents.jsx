import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../features/ProductSlice/ProductSlice";
import { Link } from "react-router-dom";

const imageUrl = "https://supercoolacimages.alphanitesofts.net/";

const SliderComponents = () => {
  const {
    data: productsData,
    isError: productsDataError,
    isLoading: productsDataLoading,
  } = useGetProductsQuery();
  const [typeArticles, setTypeArticles] = useState([]);
  const types = [
    "Window AC",
    "Portable AC",
    "Floor Standing AC",
    "Cassette AC",
    "Light Commercial AC - Duct Type",
    "Air Curtain",
  ];

  useEffect(() => {
    if (productsData) {
      let articles = [];
      types.forEach((type) => {
        const articlesOfType = productsData.data
          .filter((item) => item.type === type)
          .map((item, index) => (
            <div key={index} className="p-1 mt-4">
              <div className="card bg-white">
                {item.image != null ? (
                  <img
                    className="img-fluid d-block mx-auto w-50"
                    src={`${imageUrl}${item.image?.[0]}`}
                    alt=""
                  />
                ) : (
                  <img
                    src="https://supercoolacimages.alphanitesofts.net/1701962517_cyberpunk-2077-cyberpunk-video-games-wallpaper-preview.jpg"
                    alt="Denim Jeans"
                    style={{ height: "320px" }}
                  />
                )}
                <div className="card-body bg-white">
                  <p className="text-right" style={{ fontSize: "15px" }}>
                    {item.name}
                  </p>
                  <Link to='/productDetails' className="btn btn-outline-info">
                    Read &nbsp;
                    <i className="fa-regular fa-clipboard"></i>
                  </Link>
                </div>
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: Math.min(4, typeArticles.length),
    variableWidth: typeArticles.length < 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "ease-out",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(4, typeArticles.length),
          slidesToScroll: Math.min(4, typeArticles.length),
          infinite: true,
          dots: false,
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
    <section className="slider-section" style={{ marginTop: "5em" }}>
      {typeArticles.map(({ type, typeArticles }, index) => (
        <div key={index}>
          <div className="font-monospace ms-3 mt-4">
            <div className="d-flex align-items-center justify-content-center ">
              <i className="fa-solid fa-caret-right fs-3" />
              &nbsp;&nbsp;<h2>{type}</h2>&nbsp;&nbsp;
              <i className="fa-solid fa-caret-left fs-3" />
            </div>
          </div>

          <Slider {...settings}>
            {typeArticles.map((slide, index) => (
              <div key={index} style={{ width: 320 }}>
                {slide}
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </section>
  );
};

export default SliderComponents;
