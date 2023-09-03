import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { IoMdHome } from 'react-icons/io';
import { FaArrowLeft } from 'react-icons/fa';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  gap: 20px;

`;

export const NavListItem = styled.li`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;


`;
export const GoBAckLink = styled.p`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperBtnFilter = styled.div`
  margin-top: 10px;
  position: absolute;
  left: -75%;
  transform: translateX(50%);
  display: flex;
  flex-direction: column;
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

export const Link = styled(NavLink)`
  display: flex;

  font-size: 18px;
  font-weight: 700;
  color: #5cd3a8;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: #72dbb5 0px 0px 15px;


  svg{
    fill: #5cd3a8;
  }

  &.active,
  &:hover,
  &:focus {
    color: #fff;

    svg{
    fill: white;
    border: 1px solid #fff;
    box-shadow: rgb(231 222 221) 0px 0px 15px;
  }
  }
`;

export const HomeIcon = styled(IoMdHome)`
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 10px;

  color: #5cd3a8;
  border-radius: 50%;
  border: 1px solid #5cd3a8;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(231 222 221) 0px 0px 15px;
`
export const GoBackIcon = styled(FaArrowLeft)`
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 10px;

  color: #5cd3a8;
  border-radius: 50%;
  border: 1px solid #5cd3a8;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(231 222 221) 0px 0px 15px;
`

