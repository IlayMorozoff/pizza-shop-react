/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPizzaBasket } from '../../utils/interfaces';

interface BasketState {
  basketItems: IPizzaBasket[];
  totalPrice: number;
  itemsCount: number;
}

const initialState: BasketState = {
  basketItems: [] as IPizzaBasket[],
  totalPrice: 0,
  itemsCount: 0,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket(state, action: PayloadAction<IPizzaBasket>) {
      state.basketItems.push(action.payload);
    },
    deleteFromBasket(state, action: PayloadAction<IPizzaBasket>) {
      state.basketItems.filter(
        (pizza) =>
          pizza.size !== action.payload.size &&
          pizza.type !== action.payload.type &&
          pizza.imageUrl !== action.payload.imageUrl &&
          pizza.name !== action.payload.name &&
          pizza.newPrice !== action.payload.newPrice,
      );
    },
    clearBasket(state) {
      state.basketItems = [];
    },
    setCounter(state, action: PayloadAction<IPizzaBasket>) {
      const pizzaItem = state.basketItems.filter(
        (pizza) =>
          pizza.size === action.payload.size &&
          pizza.type === action.payload.type &&
          pizza.imageUrl === action.payload.imageUrl &&
          pizza.name === action.payload.name &&
          pizza.newPrice === action.payload.newPrice,
      )[0];
      pizzaItem.counter += 1;
    },
    setTotalPrice(state, action: PayloadAction<number>) {
      state.totalPrice += action.payload;
    },
    setTotalCount(state, action: PayloadAction<number>) {
      state.itemsCount += action.payload;
    },
  },
});

export const { addToBasket, deleteFromBasket, clearBasket } = basketSlice.actions;

export default basketSlice.reducer;
