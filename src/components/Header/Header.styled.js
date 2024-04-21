import styled from 'styled-components';

export const HeaderBox = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 64px;
  margin: 0 auto;
  border-bottom: 1px solid #10182833;

  .nav {
    display: flex;
    flex-direction: row;
    gap: 24px;
    font-size: 20px;
    font-weight: 600;
    color: var(--color-black);
  }

  .nav > a {
    text-decoration: none;
    color: var(--color-black);
    transition: color 0.3s ease-in-out;
  }

  .nav > a:hover {
    color: var(--color-red);
  }
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  color: var(--color-red);
`;
