import React from "react";
import Wrapper from "../components/Wrapper/Wrapper";
import Camper1 from "../assets/campers/2-1.webp";
import Camper2 from "../assets/campers/3-1.webp";
import Camper3 from "../assets/campers/4-1.webp";
import Camper4 from "../assets/campers/5-1.webp";
import { HomeStylesContainer, Slider } from "./PagesStyles/PagesStyles.styled";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <Wrapper>
      <HomeStylesContainer>
        <Slider className="slider">
          <div
            className="slide"
            style={{
              backgroundImage: `url(${Camper1})`,
            }}
          ></div>
          <div
            className="slide"
            style={{
              backgroundImage: `url(${Camper2})`,
            }}
          ></div>
          <div
            className="slide"
            style={{
              backgroundImage: `url(${Camper3})`,
            }}
          ></div>
          <div
            className="slide"
            style={{
              backgroundImage: `url(${Camper4})`,
            }}
          ></div>
        </Slider>
        <h1>Welcome to Camper`s world!!!</h1>
        <NavLink to="/catalog" className="button">
          See all campers
        </NavLink>
      </HomeStylesContainer>
    </Wrapper>
  );
};

export default HomePage;
