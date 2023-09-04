import styled from '@emotion/styled';

const smallDeviceMediaQuery = `@media (max-width: 768px)`;
const bigDeviceMediaQuery = '@media (max-width: 1280px)';

export const MainContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;


  ${bigDeviceMediaQuery} {
    padding: 0 10px;
    max-width: 800px;
  }
  ${smallDeviceMediaQuery} {
    padding: 0 10px;
    max-width: 380px;
  }
`;
