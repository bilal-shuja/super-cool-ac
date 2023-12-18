import "./App.css";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutUs from "./components/About/AboutUs";
import ProductDetails from "./pages/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./pages/ProductListing";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/Blog" element={<Blogs />} />
        <Route path="/productListing/:productId" element={<ProductListing />}/>
        <Route path="/ContactUs" element={<Contact />} />
        <Route path="search" element={<Search />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
