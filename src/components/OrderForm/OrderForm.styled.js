import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';
import { FiCalendar } from 'react-icons/fi';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  h2 {
    margin-bottom: 8px;
  }
  p {
    margin-bottom: 24px;
  }
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const StyledInput = styled(Field)`
  width: 400px;
  height: 56px;
  padding: 18px;
  border: none;
  border-radius: 10px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  outline: none;
  margin-bottom: 14px;
  background-color: var(--color-white);

  &:focus + label {
    transform: translateY(-30px);
    font-size: 14px;
    color: var(--color-black);
  }
`;

export const StyledTextArea = styled(Field)`
  width: 400px;
  height: 84px;
  padding: 18px;
  border: none;
  border-radius: 10px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  outline: none;
  margin-bottom: 24px;
  background-color: var(--color-white);

  &:focus + label {
    transform: translateY(-30px);
    font-size: 14px;
    color: var(--color-black);
  }
`;

export const StyledError = styled(ErrorMessage)`
  font-size: 12px;
  color: var(--color-red);
`;

export const CalendarIcon = styled(FiCalendar)`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 18px;
  right: 18px;
  cursor: pointer;
  pointer-events: none;
`;

export const StyledButton = styled.button`
  width: 160px;
  height: 56px;
  border: none;
  border-radius: 200px;
  padding: 16px 60px;
  background-color: var(--color-red);
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  outline: none;

  &:hover {
    background-color: ${(props) =>
      props.disabled ? ' var(--color-red)' : '#D84343'};
  }
`;
