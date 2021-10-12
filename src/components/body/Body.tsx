import { ControlBar } from './ControlBar/ControlBar'
import { MovieList } from './MovieList'
import { MovieType } from '../../types/MovieCard'
import { BodyDiv } from './styled'

import pulpFiction from '../../assets/img/movieCardImg/PulpFiction.png'
import avengers from '../../assets/img/movieCardImg/AvengersWarofInfinity.png'
import bohemian from '../../assets/img/movieCardImg/BohemianRhapsody.png'
import inception from '../../assets/img/movieCardImg/Inception.png'
import killBill from '../../assets/img/movieCardImg/KillBillVol2.png'
import reservior from '../../assets/img/movieCardImg/Reservoirdogs.png'

const movies: MovieType[] = [
  {
    id: '1',
    title: 'Pulp Fiction',
    description: 'Pulp Fiction',
    genre: ['comedy', 'horror'],
    releaseDate: new Date(2010, 11, 20),
    runtime: 90,
    rating: 4.6,
    movieUrl: 'https://movie.url.com',
    imageUrl: pulpFiction,
  },
  {
    id: '2',
    title: 'Bohemian Rhapsody',
    description: 'Bohemian Rhapsody',
    genre: ['crime'],
    releaseDate: new Date(2010, 11, 20),
    runtime: 90,
    rating: 4.6,
    movieUrl: 'https://movie.url.com',
    imageUrl: bohemian,
  },
  {
    id: '3',
    title: 'Kill Bill: Vol 2',
    description: 'Kill Bill: Vol 2',
    genre: ['documentary', 'comedy'],
    releaseDate: new Date(2010, 11, 20),
    runtime: 90,
    rating: 4.6,
    movieUrl: 'https://movie.url.com',
    imageUrl: killBill,
  },
  {
    id: '4',
    title: 'Avengers: War of Infinity',
    description: 'Avengers: War of Infinity',
    genre: ['horror'],
    releaseDate: new Date(2010, 11, 20),
    runtime: 90,
    rating: 4.6,
    movieUrl: 'https://movie.url.com',
    imageUrl: avengers,
  },
  {
    id: '5',
    title: 'Inception',
    description: 'Inception',
    genre: ['comedy'],
    releaseDate: new Date(2010, 11, 20),
    runtime: 90,
    rating: 4.6,
    movieUrl: 'https://movie.url.com',
    imageUrl: inception,
  },
  {
    id: '6',
    title: 'Reservoir dogs',
    description: 'Reservoir dogs',
    genre: ['crime', 'documentary'],
    releaseDate: new Date(2010, 11, 20),
    runtime: 90,
    rating: 4.6,
    movieUrl: 'https://movie.url.com',
    imageUrl: reservior,
  },
]

export const Body = () => {
  return (
    <BodyDiv>
      <ControlBar />
      <MovieList movies={movies} />
    </BodyDiv>
  )
}
