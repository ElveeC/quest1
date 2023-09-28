import { createAction } from '@reduxjs/toolkit';
import { QuestType, DetailedQuestType, ReservationType } from '../types/quest-type';
import { BookedQuestType } from '../types/booked-quest-type';
import { BookingItemType } from '../types/booking-item-type';
import { AppRoute/*, AuthorizationStatus*/ } from '../const';

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

export const loadReservations = createAction('loadReservations', (reservations: ReservationType[]) => ({
  payload: reservations
}));

export const setReservationsLoadingStatus = createAction<boolean>('setReservationsLoadingStatus');

export const addBooking = createAction('addReservation', (bookedQuest: BookedQuestType) => ({
  payload: bookedQuest
}));

export const setBookingAddingStatus = createAction<boolean>('setBookingAddingStatus');

export const deleteReservation = createAction<string>('deleteReservation');

export const changeLevel = createAction('changeLevel', (checkedLevel: string) => ({
  payload: checkedLevel
}));

export const changeGenre = createAction('changeGenre', (checkedGenre: string) => ({
  payload: checkedGenre
}));

export const changeLocation = createAction('changeLocation', (selectedLocation: BookingItemType) => ({
  payload: selectedLocation
}));

/*export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');*/

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');

