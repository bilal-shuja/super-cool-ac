import React, { useEffect, useState } from 'react'
import { useGetSearchProductsQuery } from '../features/ProductSlice/SearchProductSlice'

const Search = () => {
    const searchKeyword = localStorage.getItem('searchkeyword');
    const {
        data: searchProductData,
        isError: searchProductIsError,
        isLoading: searchProductIsLoading } = useGetSearchProductsQuery();
    useEffect(() => {
        if (searchKeyword) {
            console.log(searchKeyword, 'search product');
        }
    }, [searchKeyword]);

    return (
        <section style={{ backgroundColor: "#eee;" }}>
            <div class="container py-5">
                <div class="row justify-content-center mb-3">
                    <div class="col-md-12 col-xl-10">
                        <div class="card shadow-0 border rounded-3">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-4 col-lg-2 col-xl-3 mb-4 mb-lg-0">
                                        <div class="bg-image hover-zoom ripple rounded ripple-surface">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
                                                class="w-100" />
                                            <a href="#!">
                                                <div class="hover-overlay">
                                                    <div class="mask" style={{ backgroundColor: "rgba(253, 253, 253, 0.15);" }}>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-lg-4 col-xl-6">
                                        <h5>Quant trident shirts</h5>
                                        <p class="text-truncate mb-4 mb-md-0">
                                            There are many variations of passages of Lorem Ipsum available, but the
                                            majority have suffered alteration in some form, by injected humour, or
                                            randomised words which don't look even slightly believable.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Search