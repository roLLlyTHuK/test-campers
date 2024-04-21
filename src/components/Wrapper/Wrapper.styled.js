import styled from "styled-components";

export const WrapperBox = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    width: 320px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 100vw;
    padding-left: 132px;
    padding-right: 132px;
  }
`;
