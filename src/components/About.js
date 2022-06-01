import React from "react";

import AboutImage from "../about.jpg";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
function About() {
  return (
    <Box
      sx={{
        height: "500px",

        textAlign: "center",
      }}
    >
      <Typography variant="h3" gutterBottom mt={2}>
        About
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h5" gutterBottom component="div" mt={8} mx={2}>
          10 Sites to Find Free Images You Would Actually Use for Your Marketing
          and Real Life Projects
          <br />
          <ArchitectureIcon sx={{ fontSize: 50 }} />
          <Box>
            {" "}
            <Button variant="contained" color="secondary" sx={{ margin: 1 }}>
              Contained
            </Button>
            <Button
              variant="contained"
              color="third"
              sx={{ margin: 1 }}
              endIcon={<AccountTreeRoundedIcon />}
            >
              Fork
            </Button>
          </Box>
        </Typography>

        <Box mx={2} mt={2}>
          {" "}
          <img src={AboutImage} height={400} width={400} />
        </Box>
      </Box>
    </Box>
  );
}

export default About;
