import styled from 'styled-components';

export const ReviewsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const ReviewsList = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ReviewItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  .title-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }

  .avatar {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: var(--color-dark-white);
  }
  .avatar > h1 {
    color: var(--color-red);
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`;

export const OrderFormBox = styled.div`
  flex: 1;
  border: 1px solid #10182833;
  padding: 24px;
`;
