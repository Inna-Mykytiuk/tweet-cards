import styled from '@emotion/styled';

const breakpoints = {
  xs: '320px',
  s: '375px',
  m: '768px',
  l: '1440px',
};

const smallDeviceMediaQuery = `@media (max-width: ${breakpoints.m})`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;

  ${smallDeviceMediaQuery} {
    padding: 0 10px;
    max-width: 380px;
  }
`;
