import {combineReducers, configureStore} from '@reduxjs/toolkit'
import appReducer from './appSlice'
import movieReducer from './movieSlice'

const rootReducer = combineReducers({
  app: appReducer,
  movies: movieReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default configureStore({
  reducer: rootReducer
})