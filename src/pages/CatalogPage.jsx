import React, { useState } from 'react';
import Wrapper from '../components/Wrapper/Wrapper';
import FiltersForm from '../components/FiltersForm/FiltersForm';
import CampersCatalog from '../components/CampersCatalog/CampersCatalog';
import { PagesStylesContainer } from './PagesStyles/PagesStyles.styled';
import { useSelector } from 'react-redux';
import { selectIsFiltersLoading } from '../store/campers/selectors';
import Loader from '../components/Loader/Loader';
import ScrollToTopButton from '../components/ScrollToTopButton/ScrollToTopButton';

const CatalogPage = () => {
  const [appliedFilters, setAppliedFilters] = useState({});
  const loading = useSelector(selectIsFiltersLoading);

  const handleFiltersChange = (filters) => {
    setAppliedFilters(filters);
  };

  return (
    <Wrapper>
      <PagesStylesContainer>
        <FiltersForm onFiltersChange={handleFiltersChange} />
        {loading ? <Loader /> : <CampersCatalog />}
        <ScrollToTopButton />
      </PagesStylesContainer>
    </Wrapper>
  );
};

export default CatalogPage;
