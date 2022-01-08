/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import checkBasketItem from '../../utils/checkBasketItem';
import { IPizzaBasket } from '../../utils/interfaces';
import { getItemsCount, getTotalPrice } from '../../utils/utilsState';

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
      const isItem = state.basketItems.some((pizza) => checkBasketItem(pizza, action.payload));
      if (!isItem) {
        state.basketItems.push(action.payload);
      } else {
        const item = state.basketItems.find((pizza) => checkBasketItem(pizza, action.payload));
        if (item) {
          item.counter += 1;
          item.totalPriceItem += action.payload.price;
        }
      }
      state.itemsCount = getItemsCount(state.basketItems);
      state.totalPrice = getTotalPrice(state.basketItems);
    },
    deleteFromBasket(state, action: PayloadAction<IPizzaBasket>) {
      const indexItem = state.basketItems.findIndex((pizza) =>
        checkBasketItem(pizza, action.payload),
      );
      const totalPriceDeletedItem = state.basketItems[indexItem].totalPriceItem;
      const totalCountDeletedItem = state.basketItems[indexItem].counter;
      state.itemsCount -= totalCountDeletedItem;
      state.totalPrice -= totalPriceDeletedItem;
      state.basketItems.splice(indexItem, 1);
    },
    clearBasket(state) {
      state.basketItems = [];
      state.itemsCount = 0;
      state.totalPrice = 0;
    },

    plusItem(state, action: PayloadAction<IPizzaBasket>) {
      const item = state.basketItems.find((pizza) => checkBasketItem(pizza, action.payload));
      if (item) {
        item.counter += 1;
        item.totalPriceItem += action.payload.price;
      }
      state.itemsCount = getItemsCount(state.basketItems);
      state.totalPrice = getTotalPrice(state.basketItems);
    },
    minusItem(state, action: PayloadAction<IPizzaBasket>) {
      const item = state.basketItems.find((pizza) => checkBasketItem(pizza, action.payload));
      if (item && item.counter > 1) {
        item.counter -= 1;
        item.totalPriceItem -= action.payload.price;
      }
      state.itemsCount = getItemsCount(state.basketItems);
      state.totalPrice = getTotalPrice(state.basketItems);
    },
  },
});

export const { addToBasket, deleteFromBasket, clearBasket, plusItem, minusItem } =
  basketSlice.actions;

export default basketSlice.reducer;
