import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import { NavLink } from "react-router-dom";
import { HeaderBox, LogoBox } from "./Header.styled";
import { TbCamper } from "react-icons/tb";

const Header = () => {
  return (
    <Wrapper>
      <HeaderBox>
        <NavLink to="/">
          <LogoBox>
            <TbCamper size={64} fill="tomato" stroke="black" />
            <h2>Camper Rentals</h2>
          </LogoBox>
        </NavLink>
        <nav className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </nav>
      </HeaderBox>
    </Wrapper>
  );
};

export default Header;
