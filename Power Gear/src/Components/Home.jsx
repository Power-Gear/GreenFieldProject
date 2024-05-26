import React from "react";
import Navbar from "./Navbarr";
import Banner from "./Banner";
import FeaturedProducts from "./FeaturedProducts";
import AboutUs from "./About";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SlidesShow from "./SlidesShow";
function Home() {
  return (
    <div className="App">
      <Navbar />
      <Banner />

      <SlidesShow />
      <FeaturedProducts />
      
      <div
        style={{
          color: "#ffb703",
          backgroundColor: "#e0e1dd",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          component={Link}
          to="/about"
          style={{
            color: "#023047",
            backgroundColor: "#e0e1dd",
            textDecoration: "none",
          }}
        >
          <br />
          <b >Who are we?</b>
          <p>&copy; PowerGear</p>
        </Typography>
      </div>
    </div>
  );
}

export default Home;
