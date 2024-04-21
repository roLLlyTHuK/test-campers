import React, { useState } from "react";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import { FaStar } from "react-icons/fa";
import MapPin from "../../assets/icons/map-pin.svg";
import { reverseLocation } from "../../helpers/reverseLocation";
import {
  BottomSide,
  CloseButton,
  ImageItems,
  ImageList,
  ModalContent,
  TopSide,
} from "./FullInfoCamper.styled";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const FullInfoCamper = ({ camper, closeModal, isOpenModal }) => {
  const { name, price, rating, description, gallery, location, reviews } =
    camper;

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <ModalContent>
      <CloseButton onClick={closeModal}>
        <CloseRoundedIcon sx={{ fontSize: 32 }} />
      </CloseButton>
      <TopSide>
        <h1 className="card-title">{name}</h1>
        <div className="subtitle">
          <p className="card-rating">
            <span>
              <FaStar fill="var(--color-yellow)" width={16} height={16} />
            </span>
            <button className="card-rating-button">
              {rating}({reviews.length} Reviews)
            </button>
          </p>
          <p className="card-location">
            <span>
              <img src={MapPin} alt="" />
            </span>
            {reverseLocation(location)}
          </p>
        </div>
        <h1 className="card-price">&#8364;{price.toFixed(2)}</h1>
        <ImageList>
          {gallery.map((image, idx) => (
            <ImageItems key={idx}>
              <img src={image} alt="" />
            </ImageItems>
          ))}
        </ImageList>
        <p>{description}</p>
      </TopSide>
      <BottomSide>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "rgba(16, 24, 40, 0.2)" }}>
              <TabList onChange={handleChange} textColor="inherit">
                <Tab label="Features" value="1" className="tab" />
                <Tab label="Reviews" value="2" className="tab" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Features camper={camper} />
            </TabPanel>
            <TabPanel value="2">
              <Reviews reviews={reviews} />
            </TabPanel>
          </TabContext>
        </Box>
      </BottomSide>
    </ModalContent>
  );
};

export default FullInfoCamper;
