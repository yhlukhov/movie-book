import { MovieType } from '../types/MovieCard'

export const search = (movies: MovieType[], searchText: string) =>
  movies.filter((movie) => movie.title.toLowerCase().includes(searchText.toLowerCase()))
