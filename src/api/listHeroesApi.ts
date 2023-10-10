import axios from './axios';

export const getListHeroes = async () => {
  return axios({
    method: 'get',
    url: '/people',
  });
};
