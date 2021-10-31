import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { GenreType, SortTypes } from '../types'
import { RootState } from './store'

const initialState = {
  sortBy: 'release_date' as SortTypes,
  genre:'all' as GenreType|'all',
  searchInput:'',
  searchTerm: '',
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSearchInput:(state, action:PayloadAction<string>) => {
      state.searchInput = action.payload
    },
    setSearchTerm: (state, action:PayloadAction<string>) => {
      state.searchTerm = action.payload
    },
    setGenre: (state, action:PayloadAction<GenreType|'all'>) => {
      state.genre = action.payload
    },
    setSortBy: (state, action:PayloadAction<SortTypes>) => {
      state.sortBy = action.payload
    }
  }
})

// Action creators:
export const {setSearchInput, setSearchTerm, setGenre, setSortBy} = appSlice.actions

// Selectors:
export const selectSearchInput = (store:RootState) => store.app.searchInput
export const selectSearchTerm = (store:RootState) => store.app.searchTerm
export const selectGenre = (store:RootState) => store.app.genre
export const selectSortBy = (store:RootState) => store.app.sortBy

export default appSlice.reducer