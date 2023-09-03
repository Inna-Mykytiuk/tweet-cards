import axios from 'axios';

axios.defaults.baseURL = 'https://6491febd2f2c7ee6c2c9450f.mockapi.io/api/v1';
export const getAllUsers = async page => {
  const { data } = await axios.get('/users', {
    params: { page, limit: 3 },
  });
  console.log(data)
  return data;
};
