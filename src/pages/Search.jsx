import React, { useEffect, useState } from 'react';
import { useGetSearchProductsQuery } from '../features/ProductSlice/SearchProductSlice';
import './searchStyle.css'
import { Link } from 'react-router-dom';
const imageUrl = 'https://supercoolacimages.alphanitesofts.net/';

const Search = () => {
    const {
        data: searchProductData,
        isError: searchProductIsError,
        isLoading: searchProductIsLoading,
    } = useGetSearchProductsQuery();
    const searchKeyword = localStorage.getItem('searchkeyword');

    useEffect(() => {
        if (searchKeyword && searchProductData?.data) {
        }
    }, [searchKeyword, searchProductData?.data]);
    if (searchProductIsLoading) {
        return <p>Loading...</p>;
    }

    // Check for errors
    if (searchProductIsError) {
        return <p>Error fetching data</p>;
    }

    // Check if data is not available
    if (!searchProductData || !searchProductData.data) {
        return <p>No data available</p>;
    }

    // Filter and map over the data
    const filteredProducts = searchProductData.data.filter((product) =>
        product.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    return (
        <section>
            <div class="container">
                <div class="search-wrapper">
                    <div class="search-data">
                        {filteredProducts?.map((product) => (
                            <div class="sr-box-wrapper">
                                <Link to={`/productListing/${product.id}`}>
                                    <div class="sr-box">
                                    {product?.image ? (
                                        <img src={`${imageUrl}${product.image[0]}`} alt='image'/>):null}
                                        <div class="sr-content">
                                            <h3>{product.name}</h3>
                                            {/* <h5>SGA288HE</h5> */}
                                        </div>
                                    </div>
                                    {/* <div class="specifications">
                                        <span>
                                            <b>Rated T1 Capacity (Btu/H):</b> {product.capacity}</span>
                                        &nbsp;&nbsp;
                                        <span><b>Compressor Type / Climate Type:</b> {product.compressor}</span>
                                        &nbsp;&nbsp;
                                        <span><b>Filter:</b> Easy To Clean</span>
                                        &nbsp;&nbsp;
                                        <span><b>Refrigerant Type:</b> R22</span>
                                        &nbsp;&nbsp;
                                        <span><b>Air Flow (M3/H):</b> 1011</span
                                        >&nbsp;&nbsp;
                                        <span><b>Voltage (V, Hz, Ph):</b> 220-240V, 50Hz, 1Ph</span>
                                        &nbsp;&nbsp;
                                        <span><b>Dimension (Prod/Pack WxDxH Mm):</b> 660x780x428 / 770x915x510</span>
                                        &nbsp;&nbsp;
                                        <span><b>Weight (Net /Gross Kg):</b> 62.7/74.8</span>
                                        &nbsp;&nbsp;
                                    </div> */}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Search;
