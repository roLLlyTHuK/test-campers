import React from 'react';
import Wrapper from '../components/Wrapper/Wrapper';
import { selectFavorites } from '../store/favorites/selectors';
import { useSelector } from 'react-redux';
import CampersGallery from '../components/CampersGallery/CampersGallery';
import { PagesStylesContainer } from './PagesStyles/PagesStyles.styled';
import OrderForm from '../components/OrderForm/OrderForm';
import ScrollToTopButton from '../components/ScrollToTopButton/ScrollToTopButton';

const FavoritesPage = () => {
  const favoritesCampers = useSelector(selectFavorites);

  return (
    <Wrapper>
      <PagesStylesContainer>
        <OrderForm />

        {favoritesCampers.length > 0 ? (
          <CampersGallery campers={favoritesCampers} />
        ) : (
          <h2>You haven&apos;t added any cars to your favorites</h2>
        )}
        <ScrollToTopButton />
      </PagesStylesContainer>
    </Wrapper>
  );
};

export default FavoritesPage;
