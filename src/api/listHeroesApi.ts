import {HeroesData, HeroesDataItem} from '../redux/types/listHeroesTypes';
import axios from './axios';

export const getListHeroes = async (page: number) => {
  return axios<HeroesData<HeroesDataItem>>({
    method: 'get',
    url: `/people`,
    params: {
      page,
    },
  });
};
