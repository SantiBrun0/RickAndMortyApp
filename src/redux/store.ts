import { configureStore } from "@reduxjs/toolkit";
import { Character } from "../models/character";
import favoritesSlice from "./states/favorites";

export interface AppStore {
    favorites: Character[]
}

export default configureStore<AppStore>({
    reducer: {
        favorites: favoritesSlice
    }
})