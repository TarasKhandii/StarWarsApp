import {
  ClearFans,
  CounterAction,
  CounterActionTypes,
  CounterState,
} from '../types/counterTypes';

const initialState: CounterState = {
  maleCounter: [],
  femaleCounter: [],
  otherCounter: [],
};

const handlerCountedUser = (action: CounterAction, counter: Array<string>) => {
  const indexElement = counter.findIndex(item => item === action.payload);
  const arr = [...counter];
  arr.splice(indexElement, 1);
  return indexElement === -1 ? [...counter, action.payload] : arr;
};

export const CounterReducer = (
  state = initialState,
  action: CounterAction | ClearFans,
): CounterState => {
  switch (action.type) {
    case CounterActionTypes.ADD__FEMALE__INCREMENT:
      return {
        ...state,
        femaleCounter: handlerCountedUser(action, state.femaleCounter),
      };
    case CounterActionTypes.ADD__MALE__INCREMENT:
      return {
        ...state,
        maleCounter: handlerCountedUser(action, state.maleCounter),
      };
    case CounterActionTypes.ADD__OTHER__INCREMENT:
      return {
        ...state,
        otherCounter: handlerCountedUser(action, state.otherCounter),
      };
    case CounterActionTypes.CLEAR__FANS:
      return {...state, ...initialState};
    default:
      return state;
  }
};
