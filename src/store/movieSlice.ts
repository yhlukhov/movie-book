import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MovieFormData, MovieType } from '../types'
import { DispatchType, RootState, GetState } from './store'
import { loadMovies, loadMoviesBySearchTerm, postMovie, putMovie, deleteMovie, loadMovie } from '../API'
import { acquireSortOrder } from '../utilities'

const initialState = {
  movies: [] as Array<MovieType>,
  movie: null as null|MovieType,
  movieHints: [] as Array<MovieType>,
  addMovieTitle:'',
  totalAmount: 0,
  limit: 12,
  page: 1,
}

// Movie Reducer Slice
export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovie: (state, action:PayloadAction<MovieType|null>) => {
      state.movie = action.payload
    },
    setMovies: (state, action:PayloadAction<Array<MovieType>>) => {
      state.movies = action.payload
    },
    setMovieHints: (state, action:PayloadAction<Array<MovieType>>) => {
      state.movieHints = action.payload
    },
    setTotalAmount: (state, action:PayloadAction<number>) => {
      state.totalAmount = action.payload
    },
    setPage: (state, action:PayloadAction<number>) => {
      state.page = action.payload
    },
    setAddMovieTitle: (state, action:PayloadAction<string>) => {
      state.addMovieTitle = action.payload
    }
  }
})

// Action Creators:
export const {setMovie, setMovies, setMovieHints, setTotalAmount,setPage, setAddMovieTitle} = movieSlice.actions

// Selectors:
export const selectMovie = (state:RootState) => state.movies.movie
export const selectMovies = (state:RootState) => state.movies.movies
export const selectMovieHints = (state:RootState) => state.movies.movieHints
export const selectTotalAmount = (state:RootState) => state.movies.totalAmount
export const selectLimit = (state:RootState) => state.movies.limit
export const selectPage = (state: RootState) => state.movies.page
export const selectAddMovieTitle = (state:RootState) => state.movies.addMovieTitle

// Thunks:
export const getMovies = () => async (dispatch:DispatchType, getState:GetState) => {
  
  const state = getState()
  const {genre, sortBy} = state.app
  const {page, limit} = state.movies
  const sortOrder = acquireSortOrder(sortBy)
  const genreVal = genre === 'all' ? null : genre
  const response = await loadMovies(genreVal, sortBy, sortOrder, page, limit)
  if (response) {
    dispatch(setMovies(response.data))
    dispatch(setTotalAmount(response.totalAmount))
  }
}

export const searchMovies = (searchTerm:string) => async (dispatch:DispatchType, getState:GetState) => {
  const state = getState()
  const {genre, sortBy} = state.app
  const {page, limit} = state.movies
  const sortOrder = acquireSortOrder(sortBy)
  const genreVal = genre === 'all' ? null : genre
  const response = await loadMoviesBySearchTerm(searchTerm, genreVal, sortBy, sortOrder, page, limit)
  if (response) {
    dispatch(setMovies(response.data)) 
    dispatch(setTotalAmount(response.totalAmount))
  }
}

export const getMovie = (id:string) => async (dispatch:DispatchType, getState:GetState) => {
    const response = await loadMovie(id)
    if(response) {
      dispatch(setMovie(response))
    }
}

export const getMovieHints = (searchTerm:string) => async (dispatch: DispatchType, getState:GetState) => {
  const state = getState()
  const {genre, sortBy} = state.app
  const sortOrder = acquireSortOrder(sortBy)
  const genreVal = genre === 'all' ? null : genre
  const response = await loadMoviesBySearchTerm(searchTerm, genreVal, sortBy,sortOrder, 1, 6)
  if (response) {
    dispatch(setMovieHints(response.data))
  }
}

export const addMovie = (data:MovieFormData) => async (dispatch:DispatchType, getState:GetState) => {
  await postMovie(data)
  dispatch(setAddMovieTitle(data.title))
  const searchTerm = getState().app.searchTerm
  if (searchTerm) {
    dispatch(searchMovies(searchTerm))
    return
  }
  dispatch(getMovies())
}

export const editMovie = (movie:MovieType) => async (dispatch:DispatchType, getState:GetState) => {
  if(!movie.tagline) movie.tagline = movie.title
  await putMovie(movie)
  const searchTerm = getState().app.searchTerm
  if (searchTerm) {
    dispatch(searchMovies(searchTerm))
    return
  }
  dispatch(getMovies())
}

export const removeMovie = (id:string) => async(dispatch:DispatchType, getState:GetState) => {
  await deleteMovie(id)
  const searchTerm = getState().app.searchTerm
  if (searchTerm) {
    dispatch(searchMovies(searchTerm))
    return
  }
  dispatch(getMovies())
}

export default movieSlice.reducer