import React from "react";
import CamperCard from "../CamperCard/CamperCard";
import { CampersGalleryWrapper } from "./CampersGallery.styled";

const CampersGallery = ({ campers }) => {
  return (
    <CampersGalleryWrapper>
      {campers?.map((camper, idx) => (
        <CamperCard key={idx} camper={camper} />
      ))}
    </CampersGalleryWrapper>
  );
};

export default CampersGallery;
