import styled from 'styled-components';
import { FiMapPin } from 'react-icons/fi';

export const FiltersFormBox = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  h3 {
    margin-bottom: 48px;
  }

  input {
    width: 100%;
    height: 56px;
    padding: 18px;
    padding-left: 44px;
    border: none;
    border-radius: 10px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    outline: none;
    background-color: var(--color-white);
  }

  input[type='checkbox'],
  input[type='radio'] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  input[type='checkbox'] + label,
  input[type='radio'] + label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    max-width: 128px;
    width: 112px;
    height: 95px;
    border: 1px solid #10182833;
    border-radius: 10px;
    padding: 9px 24px;

    cursor: pointer;
  }
  label > p {
    text-align: center;
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }
  label > img {
    width: 32px;
    height: 32px;
  }

  input[type='checkbox']:checked + label,
  input[type='radio']:checked + label {
    border: 1px solid var(--color-red);
  }

  input[type='checkbox'] + label::before,
  input[type='radio'] + label::before {
    display: block;
    font-size: 24px;
    line-height: 100px;
  }

  input[type='checkbox'] + label:hover,
  input[type='radio'] + label:hover {
    background-color: #f4f4f4;
  }

  .location-filter,
  .equipment-filter {
    margin-bottom: 32px;
  }

  .location-filter > div {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  .equipment-filter > p {
    margin-bottom: 14px;
  }

  .type-filter {
    margin-bottom: 64px;
  }
`;

export const EquipmentList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  width: 166px;
  height: 56px;
  padding: 16px 40px;
  border-radius: 200px;
  border: none;
  background-color: var(--color-red);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.005em;
  text-align: center;
  color: var(--color-white);

  &:hover {
    background-color: #d84343;
  }
`;

export const LocationIcon = styled(FiMapPin)`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 18px;
  left: 18px;
  cursor: pointer;
`;
