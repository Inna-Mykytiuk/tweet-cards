import { useState } from 'react';
import {
  Nav,
  NavList,
  Link,
  HomeIcon,
  NavListItem,
  GoBAckLink,
  GoBackIcon,
  WrapperBtnFilter,
  ButtonFilters,
} from './Navigation.styled';
import { useLocation } from 'react-router-dom';
import { StatusFilter } from 'components/Filters/Filters';

export const Navigation = () => {
  const location = useLocation();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <Nav>
      <NavList>
        <NavListItem>
          <Link to="/">
            <HomeIcon />
          </Link>
        </NavListItem>
        <NavListItem>
          <Link to="tweets">Tweets</Link>
        </NavListItem>
      </NavList>
      {location.pathname === '/tweets' && (
        <>
          <ButtonFilters onClick={() => setIsFilterOpen(!isFilterOpen)}>
            Filters
            <WrapperBtnFilter>
              {isFilterOpen && <StatusFilter />}
            </WrapperBtnFilter>
          </ButtonFilters>
          <GoBAckLink>
            <Link to="/">
              <GoBackIcon />
            </Link>
          </GoBAckLink>
        </>
      )}
    </Nav>
  );
};
