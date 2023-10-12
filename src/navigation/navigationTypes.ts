/* ------------------------------ BASIC IMPORTS ----------------------------- */
import {FC} from 'react';
/* --------------------------------- SCREENS -------------------------------- */
import {SCREENS, TOPSCREENS} from './screens';
/* ------------------------------- Navigation ------------------------------- */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FormattedHeroesItem} from '../redux/types/listHeroesTypes';
import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';

export type RootStackScreenType<SCREENS extends keyof RootStackParamList> = FC<
  NativeStackScreenProps<RootStackParamList, SCREENS>
>;

export type TopStackScreenType<TOPSCREENS extends keyof TopStackParamList> = FC<
  MaterialTopTabScreenProps<TopStackParamList, TOPSCREENS>
>;

export type RootStackParamList = {
  [SCREENS.home]: undefined;
  [SCREENS.details]: {dataHero: FormattedHeroesItem};
};

export type TopStackParamList = {
  [TOPSCREENS.relatedFilms]: {dataHero: FormattedHeroesItem};
  [TOPSCREENS.relatedStarships]: {dataHero: FormattedHeroesItem};
  [TOPSCREENS.relatedVehicles]: {dataHero: FormattedHeroesItem};
};
