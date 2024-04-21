import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../store/favorites/selectors';
import { addFavorite, deleteFavorite } from '../../store/favorites/slice';
import Modal from '../Modal/Modal';
import FullInfoCamper from '../FullInfoCamper/FullInfoCamper';
import Adults from '../../assets/icons/adults.svg';
import Transmission from '../../assets/icons/transmission.svg';
import Engine from '../../assets/icons/engine.svg';
import Kitchen from '../../assets/icons/kitchen.svg';
import Bed from '../../assets/icons/bed.svg';
import Ac from '../../assets/icons/ac.svg';
import MapPin from '../../assets/icons/map-pin.svg';
import { FaStar } from 'react-icons/fa';
import { CamperCardBox } from './CamperCard.styled';
import { reverseLocation } from '../../helpers/reverseLocation';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const CamperCard = ({ camper }) => {
  const {
    _id,
    name,
    price,
    rating,
    location,
    adults,
    engine,
    transmission,
    description,
    details,
    gallery,
    reviews,
  } = camper;
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites?.some((item) => item._id === camper._id);

  const toggleFavorite = () => {
    dispatch(isFavorite ? deleteFavorite(camper) : addFavorite(camper));
  };

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <CamperCardBox key={_id}>
        <div className="card-image">
          <img src={gallery[0]} alt={name} />
        </div>

        <div className="card-info">
          <div className="card-title">
            <h1 className="card-name">{name}</h1>
            <div className="card-price-wrapper">
              <h1 className="card-price">&#8364;{price.toFixed(2)}</h1>
              <button onClick={toggleFavorite}>
                {isFavorite ? (
                  <FavoriteIcon sx={{ color: 'red', fontSize: '24px' }} />
                ) : (
                  <FavoriteBorderIcon sx={{ fontSize: '24px' }} />
                )}
              </button>
            </div>
          </div>
          <div className="card-subtitle">
            <p className="card-rating">
              <span>
                <FaStar fill="var(--color-yellow)" width={16} height={16} />
              </span>
              <button className="card-rating-button" onClick={openModal}>
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
          <p className="card-description">{description}</p>
          <ul className="card-benefits">
            <li style={{ textTransform: 'none' }}>
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
                <img src={Engine} alt="" />
              </span>
              {engine}
            </li>
            <li>
              <span>
                <img src={Kitchen} alt="" />
              </span>
              {details.kitchen ? 'Kitchen' : 'No kitchen'}
            </li>
            <li style={{ textTransform: 'none' }}>
              <span>
                <img src={Bed} alt="" />
              </span>
              {details.beds} beds
            </li>
            <li>
              <span>
                <img src={Ac} alt="" />
              </span>
              {details.airConditioner ? 'AC' : 'no AC'}
            </li>
          </ul>
          <button className="card-button" onClick={openModal}>
            Show more
          </button>
        </div>
      </CamperCardBox>
      {isOpenModal && (
        <Modal closeModal={closeModal}>
          <FullInfoCamper
            camper={camper}
            closeModal={closeModal}
            isOpenModal={isOpenModal}
          />
        </Modal>
      )}
    </>
  );
};

export default CamperCard;
