import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { QuestType, DetailedQuestType, ReservationType } from '../types/quest-type.js';
import { BookingItemType } from '../types/booking-item-type.js';
import { BookedQuestType, BookingDataType } from '../types/booked-quest-type.js';
//import { loadBookingItems, loadReservations, addBooking, setBookingAddingStatus, setReservationsLoadingStatus, setBookingDataLoadingStatus, redirectToRoute } from './action';
import { redirectToRoute } from './action.js';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AppRoute, NameSpace } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';

export const fetchQuestsAction = createAsyncThunk<QuestType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Data}/fetchQuests`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<QuestType[]>(APIRoute.Quest);
    return data;
  },
);

export const fetchDetailedQuestAction = createAsyncThunk<DetailedQuestType, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Data}/fetchDetailedQuest`,
  async (id, {extra: api}) => {
    const {data} = await api.get<DetailedQuestType>(`${APIRoute.Quest}/${id}`);
    return data;
  },
);

export const fetchBookingItemsAction = createAsyncThunk<BookingItemType[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Data}/fetchBookingItems`,
  async (id, {extra: api}) => {
    const {data} = await api.get<BookingItemType[]>(`${APIRoute.Quest}/${id}${APIRoute.Booking}`);
    return data;
  },
);

export const fetchReservationsAction = createAsyncThunk<ReservationType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Data}/fetchReservations`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<ReservationType[]>(APIRoute.Reservation);
    return data;
  },
);

export const addBookingAction = createAsyncThunk<BookedQuestType, BookingDataType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Data}/addBooking`,
  async ({ id, postData }, {extra: api}) => {
    const {data} = await api.post<BookedQuestType>(`${APIRoute.Quest}/${id}${APIRoute.Booking}`, postData);
    return data;
  }
);

export const deleteReservationAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Data}/deleteReservation`,
  async (id, {extra: api}) => {
    await api.delete(`${AppRoute.Reservation}/${id}`);
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/checkAuth`,
  async (_arg, {extra: api}) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/login`,
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Login));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/logout`,
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
