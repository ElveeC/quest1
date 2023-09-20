import { createReducer } from '@reduxjs/toolkit';
import { /*getQuests,*/ loadQuests, changeLevel, changeGenre, requireAuthorization, setQuestsDataLoadingStatus } from './action';
import { INITIAL_LEVEL, INITIAL_GENRE, AuthorizationStatus/*, DEFAULT_SORT_TYPE, sortingOptions, SortOption*/ } from '../const';
//import { quests } from '../mocks/quest-mocks';
import { QuestType } from '../types/quest-type';

type InitialState ={
  checkedLevel: string;
  checkedGenre: string;
  quests: QuestType[];
  authorizationStatus: AuthorizationStatus;
  areQuestsLoading: boolean;
}

const initialState: InitialState = {
  checkedLevel: INITIAL_LEVEL,
  checkedGenre: INITIAL_GENRE,
  //quests: quests,
  quests: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  areQuestsLoading: false,
  //sortOption: SortOption.Popular
};

const reducer = createReducer(initialState, (builder) => {
  builder

  /*.addCase(getQuests, (state, action) => {
      state.quests = action.payload;
    })*/

    .addCase(loadQuests, (state, action) => {
      state.quests = action.payload;
    })

    .addCase(setQuestsDataLoadingStatus, (state, action) => {
      state.areQuestsLoading = action.payload;
    })

    .addCase(changeLevel, (state, action) => {
      state.checkedLevel = action.payload;
    })

    .addCase(changeGenre, (state, action) => {
      state.checkedGenre = action.payload;
    })

    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });

});

export { reducer };
