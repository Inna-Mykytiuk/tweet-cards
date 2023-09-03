import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectPagination,
  selectState,
  selectVisibleUsers,
} from 'redux/usersSelectors';
import { selectStatusFilter } from 'redux/usersSelectors';
import { statusFilters } from 'redux/statusFilters';
import NoFollowers from 'components/NoFollowers/NoFollowers';
import Loader from '../Loader/Loader';
import  ListCards  from 'components/ListCards/ListCards';
import { LoadMoreBtn } from 'components/Buttons/Buttons';
import { CardsContainer, SectionContainer } from './CardSection.styled';
import { fetchUsers } from 'redux/usersOperations';


const CardsSection = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectVisibleUsers);
  const { isLoading, error } = useSelector(selectState);
  const { page } = useSelector(selectPagination);
  const [visibleCards, setVisibleCards] = useState(3);
  const [totalCards, setTotalCards] = useState(0);
  const [showBtn, setShowBtn] = useState(true);
  const filter = useSelector(selectStatusFilter);

  const onSelectFilter = (users, filter) => {
    switch (filter) {
      case statusFilters.follow:
        return users.filter(user => !user.isFollower);
      case statusFilters.following:
        return users.filter(user => user.isFollower);
      default:
        return users;
    }
  };

  const filteredUsers = onSelectFilter(users, filter);

  const onLoadMore = () => {
    const newVisibleCards = visibleCards + 3;
    if (newVisibleCards >= totalCards) {
      setShowBtn(false);
    }
    setVisibleCards(newVisibleCards);
  };

  useEffect(() => {
    dispatch(fetchUsers({ page, limit: visibleCards }));
  }, [dispatch, page, visibleCards]);

  useEffect(() => {
    if (!isLoading && !error) {
      setTotalCards(filteredUsers.length);
    }
  }, [isLoading, error, filteredUsers]);

  return (
    <>
      <SectionContainer>
        <CardsContainer>
          {isLoading && !error && <Loader />}
          <ListCards items={filteredUsers.slice(0, visibleCards)} />
          {isLoading && <Loader />}
        </CardsContainer>
        {showBtn && filteredUsers.length > visibleCards && (
          <LoadMoreBtn onClick={onLoadMore} />
        )}
        {filter === statusFilters.following && filteredUsers.length === 0 && (
          <NoFollowers />
        )}
      </SectionContainer>
    </>
  );
};

export default CardsSection;
