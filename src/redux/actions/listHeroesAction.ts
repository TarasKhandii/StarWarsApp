/* ------------------------------ BASIC IMPORT ------------------------------ */
import {Dispatch} from 'react';
/* ---------------------------------- TYPES --------------------------------- */
import {HeroesAction, HeroesActionTypes} from '../types/listHeroesTypes';
/* ---------------------------------- AXIOS --------------------------------- */
import {getListHeroes} from '../../api/listHeroesApi';
/* ---------------------------------- UTIL ---------------------------------- */
import {getIdFromData} from '../../util/dataUtils';

export const fetchListHeroes = (page = 1) => {
  return async (dispatch: Dispatch<HeroesAction>) => {
    try {
      dispatch({
        type: HeroesActionTypes.LIST__HEROES__LOADING,
        payload: true,
      });
      const res = await getListHeroes(page);
      const formattedHeroes = res.data.results.map(item => ({
        ...item,
        id: getIdFromData(item.url),
      }));
      dispatch({
        type: HeroesActionTypes.GET__LIST__HEROES__SUCCESS,
        payload: {...res.data, results: formattedHeroes},
      });

      dispatch({
        type: HeroesActionTypes.LIST__HEROES__LOADING,
        payload: false,
      });
    } catch (error) {
      console.error('error listHeroes', error);
    }
  };
};
