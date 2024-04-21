import styled from 'styled-components';

export const FeaturesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const DetailsSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 44px;

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
    background-color: #f2f4f7;
    border-radius: 100px;
  }

  .card-benefits > img {
    width: 20px;
    height: 20px;
  }
  .divider {
    width: 100%;
    height: 1px;
    background-color: #1018281a;
  }

  .camper-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
  .camper-details-table {
    width: 100%;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
  }

  .camper-details-table td:nth-child(2) {
    text-align: right;
  }
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  color: #101828;
`;
export const OrderFormBox = styled.div`
  flex: 1;
  border: 1px solid #10182833;
  padding: 24px;
`;
