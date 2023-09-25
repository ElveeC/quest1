import { createReducer } from '@reduxjs/toolkit';
import { loadQuests, loadDetailedQuest, loadBookingItems, loadReservations, addBooking, setBookingAddingStatus, setReservationsLoadingStatus, changeLevel, changeGenre, changeLocation, requireAuthorization, setDetailedQuestLoadingStatus, setBookingDataLoadingStatus, setQuestsDataLoadingStatus } from './action';
import { INITIAL_LEVEL, INITIAL_GENRE, AuthorizationStatus } from '../const';
import { QuestType, DetailedQuestType, ReservationType } from '../types/quest-type';
import { BookedQuestType } from '../types/booked-quest-type';
import { BookingItemType } from '../types/booking-item-type';

type InitialState ={
  checkedLevel: string;
  checkedGenre: string;
  quests: QuestType[];
  detailedQuest: DetailedQuestType | null;
  bookingItems: BookingItemType[];
  reservations: ReservationType[];
  bookedQuest: BookedQuestType | null;
  authorizationStatus: AuthorizationStatus;
  areQuestsLoading: boolean;
  isDetailedQuestLoading: boolean;
  isBookingDataLoading: boolean;
  isBookingAdding: boolean;
  areReservationsLoading: boolean;
  selectedLocation: BookingItemType | null;
}

const initialState: InitialState = {
  checkedLevel: INITIAL_LEVEL,
  checkedGenre: INITIAL_GENRE,
  quests: [],
  detailedQuest: null,
  bookingItems: [],
  reservations: [],
  bookedQuest: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  areQuestsLoading: false,
  isDetailedQuestLoading: false,
  isBookingDataLoading: false,
  isBookingAdding: false,
  areReservationsLoading: false,
  selectedLocation: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder

    .addCase(loadQuests, (state, action) => {
      state.quests = action.payload;
    })
    .addCase(setQuestsDataLoadingStatus, (state, action) => {
      state.areQuestsLoading = action.payload;
    })

    .addCase(loadDetailedQuest, (state, action) => {
      state.detailedQuest = action.payload;
    })

    .addCase(setDetailedQuestLoadingStatus, (state, action) => {
      state.isDetailedQuestLoading = action.payload;
    })

    .addCase(loadBookingItems, (state, action) => {
      state.bookingItems = action.payload;
    })

    .addCase(setBookingDataLoadingStatus, (state, action) => {
      state.isBookingDataLoading = action.payload;
    })

    .addCase(setBookingAddingStatus, (state, action) => {
      state.isBookingAdding = action.payload;
    })

    .addCase(loadReservations, (state, action) => {
      state.reservations = action.payload;
    })

    .addCase(setReservationsLoadingStatus, (state, action) => {
      state.areReservationsLoading = action.payload;
    })

    .addCase(addBooking, (state, action) => {
      state.bookedQuest = action.payload;
    })

    .addCase(changeLevel, (state, action) => {
      state.checkedLevel = action.payload;
    })

    .addCase(changeGenre, (state, action) => {
      state.checkedGenre = action.payload;
    })

    .addCase(changeLocation, (state, action) => {
      state.selectedLocation = action.payload;
    })

    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });

});

export { reducer };
