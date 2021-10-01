export type GenreType = 'Action & Adventure' | 'Drama' | 'Biography' | 'Music' | 'Oscar winning Movie'

export interface IMovieCard {
  id: string
  title: string
  description: string
  genre: [GenreType]
  year: number
  time: string
  rate: number
  imageUrl: string
}
