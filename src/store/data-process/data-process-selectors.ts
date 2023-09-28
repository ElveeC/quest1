import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { QuestType, DetailedQuestType, ReservationType } from '../../types/quest-type';
import { BookingItemType } from '../../types/booking-item-type';
import { BookedQuestType } from '../../types/booked-quest-type';

export const getQuests = (state: State): QuestType[] => state[NameSpace.Data].quests;
export const getQuestsDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].areQuestsLoading;

export const getDetailedQuest = (state: State): DetailedQuestType | null => state[NameSpace.Data].detailedQuest;
export const getDetailedQuestLoadingStatus = (state: State): boolean => state[NameSpace.Data].isDetailedQuestLoading;

export const getDBookingItems = (state: State): BookingItemType[] => state[NameSpace.Data].bookingItems;
export const getBookingItemsLoadingStatus = (state: State): boolean => state[NameSpace.Data].isBookingDataLoading;

export const getReservations = (state: State): ReservationType[] => state[NameSpace.Data].reservations;
export const getReservationsLoadingStatus = (state: State): boolean => state[NameSpace.Data].areReservationsLoading;

export const addBooking = (state: State): BookedQuestType | null => state[NameSpace.Data].bookedQuest;
export const getAddBookingStatus = (state: State): boolean => state[NameSpace.Data].isBookingAdding;

export const getSelectedLocation = (state: State): BookingItemType | null => state[NameSpace.Data].selectedLocation;
export const getCheckeLevel = (state: State): string => state[NameSpace.Data].checkedLevel;
export const getCheckedGenre = (state: State): string => state[NameSpace.Data].checkedGenre;
