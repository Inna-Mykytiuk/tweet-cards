import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64563e0e2e41ccf1691779b2.mockapi.io/api/cards';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async ( _, { rejectWithValue }) => {
    try {
      const response = await axios.get('/users');
      console.log(response.data)
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const changeUser = createAsyncThunk(
  'users/changeUser',
  async (data, { rejectWithValue }) => {
    try {
      const { id } = data;
      const response = await axios.put(`/users/${id}`, data);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
