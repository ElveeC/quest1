import { createAction } from '@reduxjs/toolkit';
import { QuestType, DetailedQuestType } from '../types/quest-type';
import { BookingItemType } from '../types/booking-item-type';
import { AppRoute, AuthorizationStatus } from '../const';

/*type SortingType = {
  sortingName: string;
  sortingType: string;
}*/

/*export const getQuests = createAction('getQuests', (quests: QuestType[]) => ({
  payload: quests
}));*/

export const loadQuests = createAction('loadQuests', (quests: QuestType[]) => ({
  payload: quests
}));

export const setQuestsDataLoadingStatus = createAction<boolean>('setQuestsDataLoadingStatus');

export const loadDetailedQuest = createAction('loadDetailedQuest', (detailedQuest: DetailedQuestType) => ({
  payload: detailedQuest
}));

export const setDetailedQuestLoadingStatus = createAction<boolean>('setDetailedQuestLoadingStatus');

export const loadBookingItems = createAction('loadBookingItems', (bookingItems: BookingItemType[]) => ({
  payload: bookingItems
}));

export const setBookingDataLoadingStatus = createAction<boolean>('setBookingLoadingStatus');

export const changeLevel = createAction('changeLevel', (checkedLevel: string) => ({
  payload: checkedLevel
}));

export const changeGenre = createAction('changeGenre', (checkedGenre: string) => ({
  payload: checkedGenre
}));

export const changeLocation = createAction('changeLocation', (selectedLocation: BookingItemType) => ({
  payload: selectedLocation
}));

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');

/*const changeSortOption = createAction('changeSortOption', (sortOption: string) => ({
  payload: sortOption
}));*/


