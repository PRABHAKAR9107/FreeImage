import React from "react";
import Box from "@mui/material/Box";
import HeroCover from "../logo_transparent.png";
import Typography from "@mui/material/Typography";
import "./Hero.css";
import Button from "@mui/material/Button";

function Hero() {
  return (
    <section id="hero">
      <Box className="hero-box">
        <img src={HeroCover} height={200} width={200} />
        <Box>
          <Typography variant="h5"> Stunning free Images Webpages </Typography>
        </Box>
        <Box>
          <Button variant="outlined" color="secondary">
            Explore
          </Button>
        </Box>
      </Box>
    </section>
  );
}

export default Hero;
