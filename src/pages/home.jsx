import React from "react";
import StickyNavbar from "../components/layouts/Navbar";
import { Herosection } from "../components/layouts/Herosection";
import { MasonryGridGallery } from "../components/layouts/Gallery";
import { FooterWithLogo } from "../components/layouts/Footer";

const Home = () => {

  const navLists = [
    { label: 'Home', url: '/' },
    { label: 'Gallery', url: '/Gallery' },
    { label: 'Contact', url: '/contact' }
  ];

  const btnName = [{
    label : "Login",
    url : "/login"
  }];

  return (
    <div className="bg-white dark:bg-dark_primary">
      <StickyNavbar navLists={navLists} btnName={btnName}/>
      <Herosection />
      <MasonryGridGallery />
      <FooterWithLogo/>
    </div>
  );
};

export default Home;
