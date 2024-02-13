import { configureStore, combineReducers } from "@reduxjs/toolkit";
import JobReducer from "../reducers/JobReducer";
import FavouriteReducer from "../reducers/FavouritesReducer";

const globalReducer = combineReducers({
  favourite: FavouriteReducer,
  job: JobReducer,
});
const store = configureStore({
  reducer: globalReducer,
});

export default store;
