import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import Carousal from "./components/Carousal";
import ProductListing from "./pages/ProductListing";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<>
              <Carousal />
              <Home />
            </>} />
        <Route path="/blogs" element={<> <Blogs /></> } />
        <Route path="/productDetails" element={<><Carousal /><ProductDetails /></>} />
        <Route path="/productListing/:productId" element={<ProductListing />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
