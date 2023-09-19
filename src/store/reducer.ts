import { createReducer } from '@reduxjs/toolkit';
import { getQuests, changeLevel, changeGenre } from './action';
import { INITIAL_LEVEL, INITIAL_GENRE/*, DEFAULT_SORT_TYPE, sortingOptions, SortOption*/ } from '../const';
import { quests } from '../mocks/quest-mocks';


const initialState = {
  checkedLevel: INITIAL_LEVEL,
  checkedGenre: INITIAL_GENRE,
  quests: quests,
  //sortOption: SortOption.Popular
};

const reducer = createReducer(initialState, (builder) => {
  builder

    .addCase(getQuests, (state, action) => {
      state.quests = action.payload;
    })

    .addCase(changeLevel, (state, action) => {
      state.checkedLevel = action.payload;
    })

    .addCase(changeGenre, (state, action) => {
      state.checkedGenre = action.payload;
    });

});

export { reducer };
