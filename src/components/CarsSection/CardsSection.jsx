import { LoadMoreBtn } from 'components/Buttons/Buttons';
import { ListCards } from 'components/ListCards/ListCards';
import Loader from '../Loader/Loader';
import {
  CardsContainer,
  SectionContainer,
  Warning,
} from './CardSection.styled';
import { statusFilters } from '../../redux/statusFilters';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/usersOperations';
import {
  selectPagination,
  selectState,
  selectVisibleUsers,
} from 'redux/usersSelectors';
import { setPagination } from 'redux/usersSlice';

export const CardsSection = () => {

  const dispatch = useDispatch();
  const users = useSelector(selectVisibleUsers);

  const { isLoading, error, items } = useSelector(selectState);
  const { page, limit } = useSelector(selectPagination);

  const [showBtn, setShowBtn] = useState(true);

  useEffect(() => {
    dispatch(fetchUsers({ page, limit }));
  }, [dispatch, page, limit]);

  const onLoadMore = () => {
    dispatch(setPagination({ page, limit: limit + 3 }));
    console.log('filteredUsers:', filteredUsers.length);
    console.log('items:', items.length);
    console.log('limit:', limit);
    if (limit > items.length) {
      setShowBtn(false);
    }
  };

  // const onLoadMore = () => {
  //   const newLimit = limit + 3;
  //   dispatch(setPagination({ page, limit: newLimit }));

  //   // Перевіряємо, чи кількість карток досягла 21
  //   if (newLimit >= 24) {
  //     setShowBtn(false);
  //   }
  // };

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

  const filteredUsers = onSelectFilter(users);


  return (
    <>
      <SectionContainer>
        <CardsContainer>
          {isLoading && !error && <Loader />}
          <ListCards items={filteredUsers} />
          {isLoading && <Loader />}
        </CardsContainer>
        {showBtn && (
          <LoadMoreBtn onClick={onLoadMore} />
        )}
      </SectionContainer>
    </>
  );
};

