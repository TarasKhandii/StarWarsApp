export interface ListHeroesState {
  loading: boolean;
  res: {};
}
export enum ListHeroesActionTypes {
  GET__LIST__HEROES__SUCCESS = 'GET__LIST__HEROES__SUCCESS',
  LIST__HEROES__LOADING = 'LIST__HEROES__LOADING',
}

interface ListHeroesLoadingAction {
  type: ListHeroesActionTypes.LIST__HEROES__LOADING;
  payload: boolean;
}

interface GetListHeroesSuccessAction {
  type: ListHeroesActionTypes.GET__LIST__HEROES__SUCCESS;
  payload: {};
}

export type ListHeroesAction =
  | ListHeroesLoadingAction
  | GetListHeroesSuccessAction;
