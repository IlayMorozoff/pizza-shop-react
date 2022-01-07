/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import pizzaService from '../../services/pizzaService';
import { IPizzaData } from '../../utils/interfaces';

interface PizzasState {
  items: IPizzaData[];
  isLoading: boolean;
  error: string;
}

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzas',
  async ({ category, sortBy }: { category: number; sortBy: string }, { rejectWithValue }) => {
    try {
      const pizzas = await pizzaService.sortAndSetCategory(category, sortBy);
      return pizzas;
    } catch (error) {
      return rejectWithValue('Не удалось загрузить пиццы');
    }
  },
);

const initialState: PizzasState = {
  items: [] as IPizzaData[],
  isLoading: true,
  error: '',
};

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPizzas.pending.type]: (state: PizzasState) => {
      state.isLoading = true;
    },
    [fetchPizzas.fulfilled.type]: (state: PizzasState, action: PayloadAction<IPizzaData[]>) => {
      state.isLoading = false;
      state.error = '';
      state.items = action.payload;
    },
    [fetchPizzas.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default pizzasSlice.reducer;
