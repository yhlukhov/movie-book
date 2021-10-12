export type GenreType =
| 'documentary'
| 'comedy'
| 'horror'
| 'crime'

export const genreList = ['documentary', 'comedy', 'horror', 'crime'] as Array<GenreType>

export type MovieType = {
  id: string
  title: string
  description: string
  genre: GenreType[]
  releaseDate: Date
  runtime: number
  rating: number
  movieUrl: string
  imageUrl: string
}
