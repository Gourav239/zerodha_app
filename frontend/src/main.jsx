// strictmode is used to run the code twice
import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage.jsx";
import Signup from "./landing_page/signup/Signup.jsx";
import PricingPage from "./landing_page/pricing/PricingPage.jsx";
import AboutPage from "./landing_page/about/AboutPage.jsx";
import SupportPage from "./landing_page/support/SupportPage.jsx";
import ProductPage from "./landing_page/products/ProductPage.jsx";
import Navbar from "./landing_page/Navbar.jsx";
import Footer from "./landing_page/Footer.jsx";



createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
);
