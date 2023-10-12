import {
  HeroesAction,
  HeroesActionTypes,
  HeroesState,
} from '../types/listHeroesTypes';

const initialState: HeroesState = {
  res: null,
  loading: false,
};

export const ListHeroesReducer = (
  state = initialState,
  action: HeroesAction,
): HeroesState => {
  switch (action.type) {
    case HeroesActionTypes.LIST__HEROES__LOADING:
      return {...state, loading: action.payload};
    case HeroesActionTypes.GET__LIST__HEROES__SUCCESS:
      return !state.res
        ? {...state, res: action.payload}
        : {
            ...state,
            res: {
              ...action.payload,
              results: [...state.res.results, ...action.payload.results],
            },
          };
    default:
      return state;
  }
};
