export type MovieType = {
  id: string
  title: string
  tagline?: string
  overview: string
  budget?:number
  revenue?:number
  genres: string[]
  release_date?: string
  runtime: number
  vote_average?: number
  vote_count?:number
  poster_path: string
}

export type GenreType =
  'Action'
| 'Adventure'
| 'Comedy'
| 'Fantasy'
| 'Romance'

export const genreList = ['Action', 'Adventure', 'Comedy', 'Fantasy', 'Romance'] as Array<GenreType>

export type MovieFormData = {
  title: string
  overview: string
  poster_path: string
  vote_average: number | undefined
  runtime: number
  genres: string[]
  release_date: string|undefined
}

export type MoviesResponse = {
  data: MovieType[],
  limit: number,
  offset: number,
  totalAmount: number
}