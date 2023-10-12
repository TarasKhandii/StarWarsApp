import {combineReducers} from 'redux';
import {ListHeroesReducer} from './reducers/listHeroesReducer';
import {CounterReducer} from './reducers/counterReducer';

export const rootReducer = combineReducers({
  listHeroes: ListHeroesReducer,
  counterReducer: CounterReducer,
});
