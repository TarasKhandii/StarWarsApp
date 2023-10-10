/* ------------------------------ BASIC IMPORTS ----------------------------- */
import {FC} from 'react';
/* --------------------------------- SCREENS -------------------------------- */
import {SCREENS} from './screens';
/* ------------------------------- Navigation ------------------------------- */
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStacksScreenType<SCREENS extends keyof RootStackParamList> = FC<
  NativeStackScreenProps<RootStackParamList, SCREENS>
>;

export type RootStackParamList = {
  [SCREENS.home]: undefined;
  [SCREENS.details]: undefined;
};
