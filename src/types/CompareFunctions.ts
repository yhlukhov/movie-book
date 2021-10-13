import { MovieType } from '.';
import { sotrTypes } from './ControlBar'

export const compareByTitle = (a:MovieType, b:MovieType) => {
  if (a.title > b.title) {
    return 1; }
  if (a.title < b.title) {
    return -1; }
  return 0;
}

export const compareByReleaseDate = (a:MovieType, b:MovieType) => {
  if (a.releaseDate > b.releaseDate) {
    return -1; }
  if (a.releaseDate < b.releaseDate) {
    return 1; }
  return 0;
}

export const compareByRating = (a:MovieType, b:MovieType) => {
  if (a.rating > b.rating) {
    return -1; }
  if (a.rating < b.rating) {
    return 1; }
  return 0;
}

export const sort = (array:Array<any>, sortBy:string) => {
  switch (sortBy) {
    case sotrTypes.releaseDate:
      array.sort(compareByReleaseDate)
      break
    case sotrTypes.rating:
      array.sort(compareByRating)
      break
    case sotrTypes.title:
      array.sort(compareByTitle)
      break
    default:
      break
  }
}