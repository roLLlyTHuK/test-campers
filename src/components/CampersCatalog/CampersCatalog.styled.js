import styled from "styled-components";

export const LoadMoreBtn = styled.button`
  width: 145px;
  height: 56px;
  border-radius: 200px;
  border: 1px solid rgba(71, 84, 103, 0.2);
  background: transparent;
  color: #101828;
  margin: 0 auto;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.005em;
  cursor: pointer;

  &:hover {
    border: 1px solid var(--color-red);
  }
`;
