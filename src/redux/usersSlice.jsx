import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, changeUser } from './usersOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    pagination: { page: 1, limit: 3 },
  },
  reducers: {
    setPagination: {
      reducer(state, action) {
        state.pagination = action.payload;
      },
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, handlePending)
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        // state.page = 1;
        // state.limit = 3;
      })
      .addCase(fetchUsers.rejected, handleRejected)

      .addCase(changeUser.pending, handlePending)
      .addCase(changeUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(changeUser.rejected, handleRejected);
  },
});

export const usersReducer = usersSlice.reducer;
export const { setPagination } = usersSlice.actions;
