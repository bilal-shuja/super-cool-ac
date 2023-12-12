import React from 'react'

const Carousal = () => {
    return (
        <section className='mb-5'>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/productbanner1.webp" className="d-block w-100" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img src="/productbanner2.webp" className="d-block w-100" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img src="/productbanner3.webp" className="d-block w-100" alt="Third slide" />
                </div>
            </div>
        </div>
        </section>
    )
}

export default Carousal