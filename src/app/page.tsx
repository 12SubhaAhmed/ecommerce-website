import React from "react";
import Navbar from "../app/components/Navbar"
import Carousal from "./components/Hero"
import Progress from "../app/components/Progress"
import Product from "../app/components/Product"
import Banner from "../app/components/Banner"
import Footer from "../app/components/Footer"

export default function App() {
  return (
    <div className="bg-gradient-to-r from-pink-600 to-blue-300 min-h-screen ">
      <Navbar/> 
      <Carousal/>
      <Progress/>
      <Product/>
      <Banner/>
      <Footer/>
    </div>
  );
}
