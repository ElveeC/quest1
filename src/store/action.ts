import { createAction } from '@reduxjs/toolkit';
import { QuestType } from '../types/quest-type';

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

export const getQuests = createAction('getQuests', (quests: QuestType[]) => ({
  payload: quests
}));

/*const changeSortOption = createAction('changeSortOption', (sortOption: string) => ({
  payload: sortOption
}));*/


