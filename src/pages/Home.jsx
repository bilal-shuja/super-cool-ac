import React from 'react'
import Promotions from '../components/Promotions'
import Navbar from '../components/Navbar'
import SliderComponents from '../components/sliderComponent/SliderComponents'
import Blogs from '../components/Blogs'
import ProductInfo from '../components/ProductInfo'


const Home = () => {
  return (
    <div>
      {/* <Promotions /> */}
      <SliderComponents />
      <ProductInfo />
      <Blogs />
    </div>
  )
}

export default Home