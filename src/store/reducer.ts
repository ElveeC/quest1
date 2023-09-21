import { createReducer } from '@reduxjs/toolkit';
import { /*getQuests,*/ loadQuests, loadDetailedQuest, changeLevel, changeGenre, requireAuthorization, setDetailedQuestLoadingStatus, setQuestsDataLoadingStatus } from './action';
import { INITIAL_LEVEL, INITIAL_GENRE, AuthorizationStatus/*, DEFAULT_SORT_TYPE, sortingOptions, SortOption*/ } from '../const';
//import { quests } from '../mocks/quest-mocks';
import { QuestType, DetailedQuestType } from '../types/quest-type';

type InitialState ={
  checkedLevel: string;
  checkedGenre: string;
  quests: QuestType[];
  detailedQuest: DetailedQuestType | null;
  authorizationStatus: AuthorizationStatus;
  areQuestsLoading: boolean;
  isDetailedQuestLoading: boolean;
}

const initialState: InitialState = {
  checkedLevel: INITIAL_LEVEL,
  checkedGenre: INITIAL_GENRE,
  //quests: quests,
  quests: [],
  detailedQuest: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  areQuestsLoading: false,
  isDetailedQuestLoading: false,
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

    .addCase(loadDetailedQuest, (state, action) => {
      state.detailedQuest = action.payload;
    })


    .addCase(setQuestsDataLoadingStatus, (state, action) => {
      state.areQuestsLoading = action.payload;
    })

    .addCase(setDetailedQuestLoadingStatus, (state, action) => {
      state.isDetailedQuestLoading = action.payload;
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
