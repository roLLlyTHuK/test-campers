import React, { useEffect, useState } from 'react';
import Transmission from '../../assets/icons/transmission.svg';
import Kitchen from '../../assets/icons/kitchen.svg';
import Ac from '../../assets/icons/ac.svg';
import TV from '../../assets/icons/tv.svg';
import Shower from '../../assets/icons/shower.svg';
import Van from '../../assets/icons/van.svg';
import Alcove from '../../assets/icons/alcove.svg';
import FullIntegrated from '../../assets/icons/fully-integrated.svg';

import {
  Button,
  EquipmentList,
  FiltersFormBox,
  LocationIcon,
  RadioGroup,
} from './FiltersForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCampers } from '../../store/campers/selectors';
import { getFullListCampers } from '../../store/campers/operations';
import { setFilteredCampers } from '../../store/campers/slice';

const FiltersForm = ({ onFiltersChange }) => {
  const campers = useSelector(selectAllCampers);
  const [locationInputValue, setLocationInputValue] = useState('');
  const dispatch = useDispatch();
  const [selectedFilters, setSelectedFilters] = useState({
    location: '',
    equipment: [],
    type: '',
  });

  useEffect(() => {
    const filterCampers = () => {
      const filtered = campers.filter((camper) => {
        const locationMatch = camper.location
          .toLowerCase()
          .includes(selectedFilters.location.toLowerCase());

        const equipmentMatch = selectedFilters.equipment.every(
          (equipment) => camper.details[equipment] || camper[equipment]
        );

        const typeMatch =
          selectedFilters.type === '' || camper.form === selectedFilters.type;

        return locationMatch && equipmentMatch && typeMatch;
      });

      dispatch(setFilteredCampers(filtered));
      onFiltersChange(selectedFilters);
    };

    filterCampers();
  }, [selectedFilters, campers, dispatch, onFiltersChange]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLocationInputValue(value);
    setSelectedFilters({ ...selectedFilters, [name]: value });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedFilters({
        ...selectedFilters,
        equipment: [...selectedFilters.equipment, name],
      });
    } else {
      setSelectedFilters({
        ...selectedFilters,
        equipment: selectedFilters.equipment.filter(
          (equipment) => equipment !== name
        ),
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSelectedFilters({
      location: '',
      equipment: [],
      type: '',
    });
  };

  useEffect(() => {
    dispatch(getFullListCampers());
  }, [dispatch]);

  return (
    <form>
      <FiltersFormBox>
        <div className="location-filter">
          <p>Location</p>
          <div>
            <LocationIcon
              style={{
                color:
                  locationInputValue !== ''
                    ? 'var(--color-black)'
                    : 'var(--color-light-grey)',
              }}
            />
            <input
              type="text"
              name="location"
              placeholder="Kyiv, Ukraine"
              className="search-input"
              value={selectedFilters.location}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="equipment-filter">
          <p>Filters</p>
          <h3>Vehicle equipment</h3>
          <EquipmentList>
            <li>
              <input
                type="checkbox"
                name="airConditioner"
                id="airConditioner"
                value="airConditioner"
                checked={selectedFilters.equipment.includes('airConditioner')}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="airConditioner">
                <img src={Ac} alt="air conditioner" />
                <p>AC</p>
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                name="transmission"
                id="transmission"
                value="transmission"
                checked={selectedFilters.equipment.includes('transmission')}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="transmission">
                <img src={Transmission} alt="transmission" />
                <p>Automatic</p>
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                name="kitchen"
                id="kitchen"
                value="kitchen"
                checked={selectedFilters.equipment.includes('kitchen')}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="kitchen">
                <img src={Kitchen} alt="kitchen" />
                <p>Kitchen</p>
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                name="TV"
                id="TV"
                value="TV"
                checked={selectedFilters.equipment.includes('TV')}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="TV">
                <img src={TV} alt="telvision" />
                <p>TV</p>
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                name="shower"
                id="shower"
                value="shower"
                checked={selectedFilters.equipment.includes('shower')}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="shower">
                <img src={Shower} alt="shower" />
                <p>Shower/WC</p>
              </label>
            </li>
          </EquipmentList>
        </div>
        <div className="type-filter">
          <h3>Vehicle type</h3>
          <RadioGroup>
            <div>
              <input
                type="radio"
                name="type"
                id="panelTruck"
                value="panelTruck"
                checked={selectedFilters.type === 'panelTruck'}
                onChange={handleInputChange}
              />
              <label htmlFor="panelTruck">
                <img src={Van} alt="panel truck" />
                <p>Van</p>
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="type"
                id="fullyIntegrated"
                value="fullyIntegrated"
                checked={selectedFilters.type === 'fullyIntegrated'}
                onChange={handleInputChange}
              />
              <label htmlFor="fullyIntegrated">
                <img src={FullIntegrated} alt="fully integrated" />
                <p>Fully integrated</p>
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="type"
                id="alcove"
                value="alcove"
                checked={selectedFilters.type === 'alcove'}
                onChange={handleInputChange}
              />
              <label htmlFor="alcove">
                <img src={Alcove} alt="alcove" />
                <p>Alcove</p>
              </label>
            </div>
          </RadioGroup>
        </div>
        <Button type="submit" onClick={handleSubmit}>
          Clear filters
        </Button>
      </FiltersFormBox>
    </form>
  );
};

export default FiltersForm;
