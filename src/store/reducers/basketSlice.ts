/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BasketState {
  // category: number;
  // sortBy: string;
}

const initialState: BasketState = {
  // category: 0,
  // sortBy: 'popular',
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    // setSortBy(state, action: PayloadAction<string>) {
    //   // state.sortBy = action.payload;
    // },
    // setCategory(state, action: PayloadAction<number>) {
    //   // state.category = action.payload;
    // },
  },
});

// export const {} = basketSlice.actions;

export default basketSlice.reducer;
