import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import Carousal from "./components/Carousal";
function App() {
  return (
    <Router>
      <Navbar />
      <Carousal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/Blog" element={<Blogs />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
