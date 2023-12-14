import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import SliderComponents from '../components/sliderComponent/SliderComponents'
import Blogs from '../components/Blogs'
import ProductInfo from '../components/ProductInfo'


const Home = () => {
  return (
    <div>
      <HeroSection/>
      <SliderComponents />
      <ProductInfo />
      <Blogs />
    </div>
  )
}

export default Home