import React from 'react';
import bannerOne from '../../img/productbanner1.webp';
import bannerTwo from '../../img/productbanner2.webp';

import AC from '../../img/ac.png';
import DW from '../../img/dw.png';
import Oven from '../../img/oven.png';
import WM from '../../img/wm.png';
import WD from '../../img/wd.png';
import { freeze } from '@reduxjs/toolkit';

const HeroSection = () => {
  
  
    return (
        
    <>
{/* Hero Section */}
<main>
  <div id="myCarousel" className="carousel slide bg-white" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={1} aria-label="Slide 2" />
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={2} aria-label="Slide 3" />
    </div>
    <div className="carousel-inner">
    <div class="carousel-item active">
      <img src={bannerOne} className="img-fluid w-100" alt="..." style={{height:"20em"}}/>
    </div>
    <div class="carousel-item">
      <img src={bannerTwo} className="img-fluid w-100" alt="..." style={{height:"20em"}}/>
    </div>
    {/* <div class="carousel-item">
      <img src={banner} className="img-fluid d-block w-100 h-50" alt="..."/>
    </div> */}
        
 
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</main>
{/* Hero Section */}


{/* Home Appliances */}
<div className="container mt-5">
  <h2 className='text-center text-dark'>Your Choice for <span className='fw-bold'>Home Appliances</span> </h2>
  <div className="d-flex justify-content-around mt-5">

  <div class="card bg-white border border-2 " >
    <img class="card-img-top img-fluid p-3" src={AC} alt="Title" />
    <p className='fw-bold' style={{fontSize:"11px"}}>Air Conditioners</p>
  </div>

  <div class="card bg-white border border-2">
    <img class="card-img-top img-fluid p-3" src={DW} alt="Title" />
    <p className='fw-bold' style={{fontSize:"11px"}}>Dishwasher</p>

  </div>

  <div class="card bg-white border border-2">
    <img class="card-img-top img-fluid p-3" src={Oven} alt="Title" />
    <p className='fw-bold'  style={{fontSize:"11px"}}>Microwave</p>

  </div>


  <div class="card bg-white border border-2" >
    <img class="card-img-top img-fluid p-3" src={WM} alt="Title"  />
    <p  className='fw-bold' style={{fontSize:"11px"}}>Washing Machines</p>
  </div>

  <div class="card bg-white border border-2">
    <img class="card-img-top img-fluid p-3" src={WD} alt="Title" />
    <p  className='fw-bold' style={{fontSize:"11px"}}>Water Dispensers</p>
  </div>


  

  </div>

  
</div>
{/* Home Appliances */}


{/* <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval={10000}>
      <img src={AC} className="d-block w-25" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval={2000}>
      <img src={DW} className="d-block w-25" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Oven} className="d-block w-25" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div> */}


    </>
  )
}

export default HeroSection