import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from "../features/favoriteSlice";

export const store = configureStore({

  reducer: {

    favorites: favoritesReducer

  }

});