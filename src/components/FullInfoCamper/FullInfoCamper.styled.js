import styled from 'styled-components';

export const TopSide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 44px;

  .card-title {
    margin-bottom: 10px;
  }

  .subtitle {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
  }

  .card-rating {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
  }

  .card-rating-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--color-black);
    text-decoration: underline;
    border: none;
    padding: 0;
    font-size: 16px;
    background-color: #fff;
  }

  .card-price {
    margin-bottom: 24px;
  }
  .card-location {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
  }
`;

export const ImageList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 0;
  margin-bottom: 24px;
`;

export const ImageItems = styled.li`
  position: relative;
  width: 290px;
  height: 310px;
  border-radius: 10px;
  overflow: hidden;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
  }
`;

export const BottomSide = styled.div`
  overflow-y: scroll;

  .MuiTabs-indicator,
  .css-axpu1l {
    background-color: red;
  }

  .tab {
    text-transform: none;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
    color: var(--color-black);
    opacity: 1;
    margin-bottom: 12px;
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  max-height: 80vh;
  transform: translate(-50%, -50%);
  padding: 40px;
  background-color: #fff;
  border-radius: 8px;
  overflow-y: scroll;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  background: none;
  border: none;
  cursor: pointer;
`;
