import styled from '@emotion/styled';
const smallDeviceMediaQuery = '@media (max-width: 600px)';

export const HomePage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeContainer = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: flex-start;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 600px;
  margin-left: auto;

  ${smallDeviceMediaQuery} {
    width: 320px;
  }
`;

export const HomeTextMain = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 56px;
  margin-bottom: 40px;

  ${smallDeviceMediaQuery} {
    font-size: 40px;
  }
`;

export const HomeTextSecondary = styled.h2`
  color: #cedfe3;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.8;

  ${smallDeviceMediaQuery} {
    font-size: 20px; /* Змінений розмір шрифта для маленьких пристроїв */
  }
`;
