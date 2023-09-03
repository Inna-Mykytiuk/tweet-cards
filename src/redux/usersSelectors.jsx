import { createSelector } from '@reduxjs/toolkit/dist';
import { statusFilters } from './statusFilters';

export const selectState = state => state.users;
export const selectUsers = state => state.users.items;
export const selectPagination = state => state.users.pagination;
export const selectStatusFilter = state => state.filters.status;

export const selectVisibleUsers = createSelector(
  [selectUsers, selectStatusFilter],
  (users, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.follow:
        return users.filter(user => !user.isFollower);
      case statusFilters.following:
        return users.filter(user => user.isFollower);
      default:
        return users;
    }
  }
);
