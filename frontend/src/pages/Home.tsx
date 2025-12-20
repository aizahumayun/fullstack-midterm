import React from "react";
import NavBar from "../components/layout/NavBar";
import Banner from "../components/layout/Banner";
import QuoteComponent from "../components/QuoteComponent";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <QuoteComponent />
      <Footer />
    </div>
  );
};

export default Home;
