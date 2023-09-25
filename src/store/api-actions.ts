import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { QuestType, DetailedQuestType, ReservationType } from '../types/quest-type.js';
import { BookingItemType } from '../types/booking-item-type.js';
import { BookedQuestType, BookingDataType } from '../types/booked-quest-type.js';
import { loadQuests, loadDetailedQuest, loadBookingItems, loadReservations, addBooking, setBookingAddingStatus, requireAuthorization, setReservationsLoadingStatus, setQuestsDataLoadingStatus, setDetailedQuestLoadingStatus, setBookingDataLoadingStatus, redirectToRoute } from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AuthorizationStatus, AppRoute } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';

export const fetchQuestsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchQuests',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setQuestsDataLoadingStatus(true));
    const {data} = await api.get<QuestType[]>(APIRoute.Quest);
    dispatch(loadQuests(data));
    dispatch(setQuestsDataLoadingStatus(false));
  },
);

export const fetchDetailedQuestAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchDetailedQuest',
  async (id, {dispatch, extra: api}) => {
    dispatch(setDetailedQuestLoadingStatus(true));

    const {data} = await api.get<DetailedQuestType>(`${APIRoute.Quest}/${id}`);
    dispatch(loadDetailedQuest(data));
    dispatch(setDetailedQuestLoadingStatus(false));
  },
);

export const fetchBookingItemsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchBookingItems',
  async (id, {dispatch, extra: api}) => {
    dispatch(setBookingDataLoadingStatus(true));

    const {data} = await api.get<BookingItemType[]>(`${APIRoute.Quest}/${id}${APIRoute.Booking}`);
    dispatch(loadBookingItems(data));
    dispatch(setBookingDataLoadingStatus(false));
  },
);

export const fetchReservationsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchReservations',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setReservationsLoadingStatus(true));
    const {data} = await api.get<ReservationType[]>(APIRoute.Reservation);
    dispatch(loadReservations(data));
    dispatch(setReservationsLoadingStatus(false));
  },
);

export const addBookingAction = createAsyncThunk<BookedQuestType, BookingDataType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'addBooking',
  async ({ id, postData }, {dispatch, extra: api}) => {
    dispatch(setBookingAddingStatus(true));
    const {data} = await api.post<BookedQuestType>(`${APIRoute.Quest}/${id}${APIRoute.Booking}`, postData);
    dispatch(addBooking(data));
    dispatch(setBookingAddingStatus(false));

    return data;
  }
);

/*export const deleteReservationAction = createAsyncThunk<void, string, ThunkAPI> (
  `${NameSpace.Reservation}/delete`,
  async (reservationId, {dispatch, extra: api}) => {
    await api.delete(`${APIRoute.Reservation}/${reservationId}`);
    dispatch(fetchBookedQuestsAction);
  }
);*/

export const deleteReservationAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'deleteReservation',
  async (id, {/*dispatch*/ extra: api}) => {
    await api.delete(`${AppRoute.Reservation}/${id}`);
    //dispatch(fetchReservationsAction);

  }
);


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Login));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
