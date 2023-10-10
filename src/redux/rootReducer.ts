import {combineReducers} from 'redux';
import {ListHeroesReducer} from './reducers/listHeroesReducer';

export const rootReducer = combineReducers({
  listHeroes: ListHeroesReducer,
});
