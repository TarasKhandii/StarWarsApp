import {Dispatch} from 'react';
import {
  ListHeroesAction,
  ListHeroesActionTypes,
} from '../types/listHeroesTypes';
import {getListHeroes} from '../../api/listHeroesApi';

export const fetchListHeroes = () => {
  return async (dispatch: Dispatch<ListHeroesAction>) => {
    try {
      dispatch({
        type: ListHeroesActionTypes.LIST__HEROES__LOADING,
        payload: true,
      });
      const res = await getListHeroes();
      console.log('res listHeroes', res);
      dispatch({
        type: ListHeroesActionTypes.GET__LIST__HEROES__SUCCESS,
        payload: res.data,
      });

      dispatch({
        type: ListHeroesActionTypes.LIST__HEROES__LOADING,
        payload: false,
      });
    } catch (error) {
      console.log('error listHeroes', error);
    }
  };
};
