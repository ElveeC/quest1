import { createAction } from '@reduxjs/toolkit';
import { QuestType, DetailedQuestType } from '../types/quest-type';
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

export const loadDetailedQuest = createAction('loadDetailedQuest', (detailedQuest: DetailedQuestType) => ({
  payload: detailedQuest
}));

export const setQuestsDataLoadingStatus = createAction<boolean>('setQuestsDataLoadingStatus');

export const setDetailedQuestLoadingStatus = createAction<boolean>('setDetailedQuestLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');

/*const changeSortOption = createAction('changeSortOption', (sortOption: string) => ({
  payload: sortOption
}));*/


