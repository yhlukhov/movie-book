import { GenreType, MovieType } from '../types';

export function filter (list:Array<MovieType>, genre:GenreType) {
  return list.filter(movie => movie.genre.includes(genre))
}