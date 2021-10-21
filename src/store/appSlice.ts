import {createSlice} from '@reduxjs/toolkit'
import { GenreType } from '../types'
import { RootState } from './store'
import { sotrTypes } from '../types/ControlBar'

const initialState = {
  sortBy:sotrTypes.releaseDate,
  genre:'all' as GenreType|'all',
  searchTerm: '',
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    setGenre: (state, action) => {
      state.genre = action.payload
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload
    }
  }
})

// Action creators:
export const {setSearchTerm, setGenre, setSortBy} = appSlice.actions

// Selectors:
export const selectSearchTerm = (store:RootState) => store.app.searchTerm
export const selectGenre = (store:RootState) => store.app.genre
export const selectSortBy = (store:RootState) => store.app.sortBy

export default appSlice.reducer