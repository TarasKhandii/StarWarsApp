import * as HeroesAction from './listHeroesAction';
import * as CounterAction from './counterAction';

export default {
  ...HeroesAction,
  ...CounterAction,
};
