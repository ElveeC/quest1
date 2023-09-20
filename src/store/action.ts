import { createAction } from '@reduxjs/toolkit';
import { QuestType } from '../types/quest-type';
import { AppRoute, AuthorizationStatus } from '../const';

/*type SortingType = {
  sortingName: string;
  sortingType: string;
}*/
export const changeLevel = createAction('changeLevel', (checkedLevel: string) => ({
  payload: checkedLevel
}));

export const changeGenre = createAction('changeGenre', (checkedGenre: string) => ({
  payload: checkedGenre
}));

/*export const getQuests = createAction('getQuests', (quests: QuestType[]) => ({
  payload: quests
}));*/

export const loadQuests = createAction('loadQuests', (quests: QuestType[]) => ({
  payload: quests
}));

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setQuestsDataLoadingStatus = createAction<boolean>('setQuestsDataLoadingStatus');

export const setError = createAction<string | null>('setError');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');

/*const changeSortOption = createAction('changeSortOption', (sortOption: string) => ({
  payload: sortOption
}));*/


