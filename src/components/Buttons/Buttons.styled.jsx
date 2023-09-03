import styled from '@emotion/styled';

export const ButtonFollows = styled.button`
  width: 196px;
  padding: 16px 0px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #fff;
  background-color: ${({ bgColor }) =>
    bgColor === false ? '#EBD8FF' : '#5CD3A8'};
  border: none;
  cursor: pointer;
`;

export const ButtonFilters = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  padding: 12px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #5736a3;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    text-shadow: 2px 2px 5px #000000;
  }
`;

export const BtnFilter = styled.div`
  background-color: transparent;
  border: none;
  border-radius: 10px;
  padding: 12px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 2px 2px 5px #000000;
  cursor: pointer;
  &:hover {
    color: #5736a3;
  }
`;
