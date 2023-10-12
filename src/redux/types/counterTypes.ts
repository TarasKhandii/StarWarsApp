export interface CounterState {
  maleCounter: Array<string>;
  femaleCounter: Array<string>;
  otherCounter: Array<string>;
}

export enum CounterActionTypes {
  ADD__MALE__INCREMENT = 'ADD__MALE__INCREMENT',
  ADD__FEMALE__INCREMENT = 'ADD__FEMALE__INCREMENT',
  ADD__OTHER__INCREMENT = 'ADD__OTHER__INCREMENT',
  CLEAR__FANS = 'CLEAR__FANS',
}

interface AddMaleIncrement {
  type: CounterActionTypes.ADD__MALE__INCREMENT;
  payload: string;
}
interface AddFEMaleIncrement {
  type: CounterActionTypes.ADD__FEMALE__INCREMENT;
  payload: string;
}
interface AddOtherIncrement {
  type: CounterActionTypes.ADD__OTHER__INCREMENT;
  payload: string;
}
export interface ClearFans {
  type: CounterActionTypes.CLEAR__FANS;
}

export type CounterAction =
  | AddMaleIncrement
  | AddFEMaleIncrement
  | AddOtherIncrement;
