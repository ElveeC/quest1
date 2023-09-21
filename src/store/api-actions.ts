import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { QuestType, DetailedQuestType } from '../types/quest-type.js';
import { loadQuests, loadDetailedQuest, requireAuthorization, setQuestsDataLoadingStatus, setDetailedQuestLoadingStatus, redirectToRoute } from './action';
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
    const {data} = await api.get<QuestType[]>(APIRoute.Quests);
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

    const {data} = await api.get<DetailedQuestType>(`${APIRoute.Quests}/${id}`);
    dispatch(loadDetailedQuest(data));
    dispatch(setDetailedQuestLoadingStatus(false));
  },
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
    dispatch(redirectToRoute(AppRoute.Main));
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
