import { createSlice } from "@reduxjs/toolkit";
import { Character } from "../../models/character";
import { localStorageTypes as LST } from "../../models/localStorageTypes";
import { clearLocalStorage, getLocalStorage, setLocalStorage } from "../../utilities/localStorage.utility";

const initialState: Character[] = []

export const favoritesSlice = createSlice({
    name: LST.FAVORITES,
    initialState: getLocalStorage(LST.FAVORITES)
        ? JSON.parse(getLocalStorage(LST.FAVORITES) as string)
        : initialState,
    reducers: {
        addFavorite: (_state, action) => {
            setLocalStorage(LST.FAVORITES, action.payload)
            return action.payload
        },
        removeAllFavorites: () => {
            clearLocalStorage(LST.FAVORITES)
            return initialState
        }
    }
})


export const { addFavorite, removeAllFavorites } = favoritesSlice.actions

export default favoritesSlice.reducer