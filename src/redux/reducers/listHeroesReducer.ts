import {
  ListHeroesAction,
  ListHeroesActionTypes,
  ListHeroesState,
} from '../types/listHeroesTypes';

const initialState: ListHeroesState = {
  res: {},
  loading: false,
};

export const ListHeroesReducer = (
  state = initialState,
  action: ListHeroesAction,
): ListHeroesState => {
  switch (action.type) {
    case ListHeroesActionTypes.LIST__HEROES__LOADING:
      return {...state, loading: action.payload};
    case ListHeroesActionTypes.GET__LIST__HEROES__SUCCESS:
      return {...state, res: action.payload};
    default:
      return state;
  }
};
