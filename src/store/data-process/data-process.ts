import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { DataProcess } from '../../types/state';
import { fetchQuestsAction, fetchDetailedQuestAction, fetchBookingItemsAction, fetchReservationsAction, addBookingAction } from '../api-actions';
import { INITIAL_LEVEL, INITIAL_GENRE } from '../../const';
import { BookingItemType } from '../../types/booking-item-type';


const initialState: DataProcess = {
  quests: [],
  areQuestsLoading: false,
  detailedQuest: null,
  isDetailedQuestLoading: false,
  bookingItems: [],
  isBookingDataLoading: false,
  reservations: [],
  areReservationsLoading: false,
  bookedQuest: null,
  isBookingAdding: false,
  checkedLevel: INITIAL_LEVEL,
  checkedGenre: INITIAL_GENRE,
  selectedLocation: null,
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeLevel: (state, action: PayloadAction<string>) => {
      state.checkedLevel = action.payload;
    },

    changeGenre: (state, action: PayloadAction<string>) => {
      state.checkedGenre = action.payload;
    },

    changeLocation: (state, action: PayloadAction<BookingItemType>) => {
      state.selectedLocation = action.payload;
    }
  },

  extraReducers(builder) {
    builder

      .addCase(fetchQuestsAction.pending, (state) => {
        state.areQuestsLoading = true;
      })
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.quests = action.payload;
        state.areQuestsLoading = false;
      })

      .addCase(fetchDetailedQuestAction.pending, (state) => {
        state.isDetailedQuestLoading = true;
      })
      .addCase(fetchDetailedQuestAction.fulfilled, (state, action) => {
        state.detailedQuest = action.payload;
        state.isDetailedQuestLoading = false;
      })

      .addCase(fetchBookingItemsAction.pending, (state) => {
        state.isBookingDataLoading = true;
      })
      .addCase(fetchBookingItemsAction.fulfilled, (state, action) => {
        state.bookingItems = action.payload;
        state.isBookingDataLoading = false;
      })

      .addCase(fetchReservationsAction.pending, (state) => {
        state.areReservationsLoading = true;
      })
      .addCase(fetchReservationsAction.fulfilled, (state, action) => {
        state.reservations = action.payload;
        state.areReservationsLoading = false;
      })

      .addCase(addBookingAction.pending, (state) => {
        state.isBookingAdding = true;
      })
      .addCase(addBookingAction.fulfilled, (state, action) => {
        state.bookedQuest = action.payload;
        state.isBookingAdding = false;
      });
  }
});

export const { changeLevel, changeGenre, changeLocation } = dataProcess.actions;

