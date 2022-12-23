import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import Banner from "./Banner/Banner";
import ContactMe from "./ContactMe/ContactMe";
import Portfolio from "./Portfolio/Portfolio";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Portfolio></Portfolio>
      <AboutMe></AboutMe>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Home;
