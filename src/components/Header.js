import React from "react";
import image from "../logo_transparent.png";
import "./Header.css";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
function Header() {
  return (
    <>
      <header className="main-header">
        <div className="logo">
          <img src={image} height={100} width={120} />
        </div>
        <nav className="main-nav">
          <ul className="nav-items">
            <li>Home</li>
            <li>Main</li>

            <li>Contacts</li>
          </ul>
          <div className="github">
            <a href="https://github.com/PRABHAKAR9107/FreeImage">
              <GitHubIcon color="primary" />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
