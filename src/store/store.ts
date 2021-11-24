import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import appReducer from './appSlice'
import movieReducer from './movieSlice'

const rootReducer = combineReducers({
  app: appReducer,
  movies: movieReducer,
})

const store = configureStore({
  reducer: rootReducer
})

export default store

export type AppStore = typeof store
export type RootState = ReturnType<typeof rootReducer>
export type GetState = () => RootState
export type DispatchType = typeof store.dispatch

// Hooks:
export const useAppDispatch = () => useDispatch<DispatchType>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector