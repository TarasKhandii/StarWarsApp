export interface HeroesState {
  loading: boolean;
  res: HeroesData<FormattedHeroesItem> | null;
}
export enum HeroesActionTypes {
  GET__LIST__HEROES__SUCCESS = 'GET__LIST__HEROES__SUCCESS',
  LIST__HEROES__LOADING = 'LIST__HEROES__LOADING',
  GET__SELECTED__HEROES = 'GET__SELECTED__HEROES',
}

interface HeroesLoadingAction {
  type: HeroesActionTypes.LIST__HEROES__LOADING;
  payload: boolean;
}

interface GetHeroesSuccessAction {
  type: HeroesActionTypes.GET__LIST__HEROES__SUCCESS;
  payload: HeroesData<FormattedHeroesItem>;
}

interface GetSelectedHeroes {
  type: HeroesActionTypes.GET__SELECTED__HEROES;
  payload: HeroesData<FormattedHeroesItem>;
}

export type HeroesAction =
  | HeroesLoadingAction
  | GetHeroesSuccessAction
  | GetSelectedHeroes;

export interface HeroesData<HeroesItem> {
  count: number;
  next: string;
  previous: null | string;
  results: Array<HeroesItem>;
}

export interface HeroesDataItem {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: [];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: [];
  starships: [];
  url: string;
  vehicles: [];
}

export interface FormattedHeroesItem extends HeroesDataItem {
  id: string;
}
