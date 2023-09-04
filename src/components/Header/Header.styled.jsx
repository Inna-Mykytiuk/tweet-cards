import styled from '@emotion/styled';

const smallDeviceMediaQuery = `@media (min-width: 768px)`;

export const AppBar = styled.header`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  backdrop-filter: blur(10px);
  background-color: #00466e1a;

  ${smallDeviceMediaQuery} {
    width: 100%;
  }

`;



