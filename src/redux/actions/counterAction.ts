/* ------------------------------ BASIC IMPORTS ----------------------------- */
import {Dispatch} from 'react';
/* ---------------------------------- TYPES --------------------------------- */
import {
  CounterAction,
  CounterActionTypes,
  ClearFans,
} from '../types/counterTypes';

export const calculationCounter = ({
  gender,
  id,
}: {
  gender: string;
  id: string;
}) => {
  return (dispatch: Dispatch<CounterAction>) => {
    if (gender === 'male') {
      dispatch({
        type: CounterActionTypes.ADD__MALE__INCREMENT,
        payload: id,
      });
    } else if (gender === 'female') {
      dispatch({
        type: CounterActionTypes.ADD__FEMALE__INCREMENT,
        payload: id,
      });
    } else {
      dispatch({
        type: CounterActionTypes.ADD__OTHER__INCREMENT,
        payload: id,
      });
    }
  };
};

export const clearFansAction = () => {
  return (dispatch: Dispatch<ClearFans>) => {
    dispatch({
      type: CounterActionTypes.CLEAR__FANS,
    });
  };
};
