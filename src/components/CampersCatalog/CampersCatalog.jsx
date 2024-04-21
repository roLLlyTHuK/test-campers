import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectFilteredCampers,
  selectIsFirstLoading,
  selectIsMoreLoading,
} from "../../store/campers/selectors";
import { LoadMoreBtn } from "./CampersCatalog.styled";
import Loader from "../Loader/Loader";
import CampersGallery from "../CampersGallery/CampersGallery";
import { toastSuccess } from "../../helpers/notification";

const CampersCatalog = () => {
  const campers = useSelector(selectFilteredCampers);
  const totalCampers = campers.length;
  const firstLoading = useSelector(selectIsFirstLoading);
  const isLoadingMore = useSelector(selectIsMoreLoading);
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  const onLoadMoreClick = () => {
    setPage((prevPage) => prevPage + 1);
    toastSuccess("Loading more campers...");
  };

  return (
    <>
      {firstLoading ? (
        <Loader />
      ) : (
        <div style={{ textAlign: "center" }}>
          <CampersGallery campers={campers.slice(0, page * itemsPerPage)} />
          {totalCampers > page * itemsPerPage && (
            <LoadMoreBtn onClick={onLoadMoreClick}>
              {isLoadingMore ? "Loading..." : "Load more"}
            </LoadMoreBtn>
          )}
        </div>
      )}
    </>
  );
};

export default CampersCatalog;
