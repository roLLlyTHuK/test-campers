import styled from 'styled-components';

export const CamperCardBox = styled.div`
  width: 888px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 24px;
  border: 1px solid #10182833;
  border-radius: 20px;

  .card-image {
    position: relative;
    width: 290px;
    height: 310px;
    border-radius: 20px;
    overflow: hidden;
  }

  .card-image > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
  }

  .card-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 526px;
    height: 310px;
    align-items: flex-start;
  }

  .card-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .card-price-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    button {
      border: none;
      width: 32px;
      height: 32px;
    }
  }

  .card-subtitle {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
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
  }

  .card-subtitle > p {
    display: flex;
    flex-direction: row;
    gap: 4px;
  }

  .card-name {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .card-description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    margin-bottom: 24px;
    color: var(--color-grey);
  }

  .card-benefits {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
  }

  .card-benefits > li {
    display: flex;
    flex-direction: row;
    gap: 8px;
    padding: 12px 18px;
    text-transform: capitalize;
  }

  .card-benefits > img {
    width: 20px;
    height: 20px;
  }

  .card-button {
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
    text-align: left;
    color: var(--color-white);
  }

  .card-button:hover {
    background-color: #d84343;
  }
`;
