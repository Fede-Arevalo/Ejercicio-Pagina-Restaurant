import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../Header/logo-white.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={Logo} alt="Logo" className="logo"></img>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/carta">Carta</Link>
          <Link to="/reserva">Reserva</Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
