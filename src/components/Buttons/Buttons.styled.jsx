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
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
`;

export const BtnFilter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  padding: 5px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
  /* text-transform: uppercase; */
  color: #99bfc8;
  text-shadow: 2px 2px 5px #000000;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #fff;
  }
`;
