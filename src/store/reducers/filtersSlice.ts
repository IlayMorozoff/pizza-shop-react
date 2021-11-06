/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
  category: number;
  sortBy: string;
}

const initialState: FiltersState = {
  category: 0,
  sortBy: 'popular',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSortBy(state, action: PayloadAction<string>) {
      state.sortBy = action.payload;
    },
    setCategory(state, action: PayloadAction<number>) {
      state.category = action.payload;
    },
  },
});

export const { setCategory, setSortBy } = filtersSlice.actions;

export default filtersSlice.reducer;
