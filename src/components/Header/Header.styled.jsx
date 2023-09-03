import styled from '@emotion/styled';
const breakpoints = {
  xs: '320px',
  s: '375px',
  m: '768px',
  l: '1440px',
};

const smallDeviceMediaQuery = `@media (min-width: ${breakpoints.m})`;

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



