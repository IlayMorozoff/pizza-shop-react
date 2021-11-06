import { configureStore, combineReducers } from '@reduxjs/toolkit';
import filtersReducer from './reducers/filtersSlice';

const rootReducer = combineReducers({
  filtersReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
