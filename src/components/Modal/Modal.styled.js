import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  /* overflow: scroll; */
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 40px;
  background-color: white;
  border-radius: 8px;
  /* overflow: hidden; */
`;
