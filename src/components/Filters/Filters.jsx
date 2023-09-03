import { ButtonFilter } from 'components/Buttons/Buttons';
import { statusFilters } from 'redux/statusFilters';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from 'redux/filtersSlice';
import { selectStatusFilter } from 'redux/usersSelectors';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));
  return (
    <>
      <ButtonFilter
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </ButtonFilter>
      <ButtonFilter
        selected={filter === statusFilters.follow}
        onClick={() => handleFilterChange(statusFilters.follow)}
      >
        Follow
      </ButtonFilter>
      <ButtonFilter
        selected={filter === statusFilters.following}
        onClick={() => handleFilterChange(statusFilters.following)}
      >
        Following
      </ButtonFilter>
    </>
  );
};
