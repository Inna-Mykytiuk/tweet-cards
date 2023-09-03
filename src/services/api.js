import axios from 'axios';

axios.defaults.baseURL = 'https://64563e0e2e41ccf1691779b2.mockapi.io/api/cards';
export const getAllUsers = async page => {
  const { data } = await axios.get('/users', {
    params: { page, limit: 3 },
  });
  console.log(data)
  return data;
};
