import styled from '@emotion/styled';

import CardLogo from '../../images/CardLogo.png';
import TopCard from '../../images/TopCard.png';

export const Item = styled.li`
  width: 380px;
  height: 460px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  background: url(${CardLogo}) 20px 20px no-repeat, url(${TopCard}) center 28px,
    linear-gradient(
      114.99deg,
      rgb(71, 28, 169) -0.99%,
      rgb(87, 54, 163) 54.28%,
      rgb(75, 42, 153) 78.99%
    );
  background-repeat: no-repeat;
  border-radius: 20px;

`;

export const Avatar = styled.img`
  position: absolute;
  width: 62px;
  height: 62px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`;

export const AvatarWrap = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 50%;
  top: 50%;
  background-color: #ebd8ff;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const DecorLine = styled.div`
  position: relative;
  width: 380px;
  height: 8px;
  top: 46%;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const InfoWrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 50%;
  top: 62px;
  transform: translateX(-50%);
  color: #ebd8ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
`;

export const Tweets = styled.p`
  margin-bottom: 16px;
`;

export const Followers = styled.p`
  margin-bottom: 26px;
`;

export const ButtonFollows = styled.button`
  width: 196px;
  padding: 16px 0px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  background-color: ${({ bgColor }) =>
    bgColor === false ? '#EBD8FF' : '#5CD3A8'};
  border: none;
  cursor: pointer;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
`;
