import React from "react";
import Adults from "../../assets/icons/adults.svg";
import Transmission from "../../assets/icons/transmission.svg";
import Engine from "../../assets/icons/engine.svg";
import Kitchen from "../../assets/icons/kitchen.svg";
import Bed from "../../assets/icons/bed.svg";
import Ac from "../../assets/icons/ac.svg";
import Cd from "../../assets/icons/cd.svg";
import Radio from "../../assets/icons/radio.svg";
import Conditioner from "../../assets/icons/conditioner.svg";
import Hob from "../../assets/icons/hob.svg";
import {
  DetailsSide,
  FeaturesWrapper,
  OrderFormBox,
  Title,
} from "./Features.styled";
import capitalizeFirstWord from "../../helpers/capitalize";
import OrderForm from "../OrderForm/OrderForm";

const Features = ({ camper }) => {
  const {
    form,
    length,
    width,
    height,
    tank,
    consumption,
    transmission,
    engine,
    adults,
    details,
  } = camper;
  return (
    <FeaturesWrapper>
      <DetailsSide>
        <ul className="card-benefits">
          <li style={{ textTransform: "none" }}>
            <span>
              <img src={Adults} alt="" />
            </span>
            {adults} adults
          </li>
          <li>
            <span>
              <img src={Transmission} alt="" />
            </span>
            {transmission}
          </li>
          <li>
            <span>
              <img src={Ac} alt="" />
            </span>
            {details.airConditioner ? "AC" : "no AC"}
          </li>
          <li>
            <span>
              <img src={Engine} alt="" />
            </span>
            {engine}
          </li>
          <li style={{ textTransform: "none" }}>
            <span>
              <img src={Kitchen} alt="" />
            </span>
            {details.kitchen ? "kitchen" : "no kitchen"}
          </li>
          <li style={{ textTransform: "none" }}>
            <span>
              <img src={Bed} alt="" />
            </span>
            {details.beds} beds
          </li>
          <li style={{ textTransform: "none" }}>
            <span>
              <img src={Conditioner} alt="" />
            </span>
            {details.airConditioner} air conditioner
          </li>
          <li>
            <span>
              <img src={Cd} alt="" />
            </span>
            {details.CD ? "CD" : "No CD"}
          </li>
          <li>
            <span>
              <img src={Radio} alt="" />
            </span>
            {details.radio ? "Radio" : "No radio"}
          </li>
          <li style={{ textTransform: "none" }}>
            <span>
              <img src={Hob} alt="" />
            </span>
            {details.hob} hob
          </li>
        </ul>
        <div className="camper-details">
          <Title>Vehicle details</Title>
          <div className="divider"></div>
          <table className="camper-details-table">
            <tbody>
              <tr>
                <td>Form</td>
                <td>{capitalizeFirstWord(form)}</td>
              </tr>
              <tr>
                <td>Length</td>
                <td>{length}</td>
              </tr>
              <tr>
                <td>Width</td>
                <td>{width}</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>{height}</td>
              </tr>
              <tr>
                <td>Tank</td>
                <td>{tank}</td>
              </tr>
              <tr>
                <td>Consumption</td>
                <td>{consumption}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DetailsSide>
      <OrderFormBox>
        <OrderForm />
      </OrderFormBox>
    </FeaturesWrapper>
  );
};

export default Features;
