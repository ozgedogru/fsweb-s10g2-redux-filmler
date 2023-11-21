import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import favoriteReducer from "./favoriteReducer";

export const reducers = combineReducers({
  movies: movieReducer,
  favorites: favoriteReducer,
});

export default reducers;
