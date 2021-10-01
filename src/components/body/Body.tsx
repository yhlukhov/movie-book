import { ControlBar } from './ControlBar/ControlBar'
import { MovieList } from './MovieList'
import { IMovieCard } from '../../types/MovieCard'
import { BodyDiv } from './styled'

import pulpFiction from '../../assets/img/movieCardImg/PulpFiction.png'
import avengers from '../../assets/img/movieCardImg/AvengersWarofInfinity.png'
import bohemian from '../../assets/img/movieCardImg/BohemianRhapsody.png'
import inception from '../../assets/img/movieCardImg/Inception.png'
import killBill from '../../assets/img/movieCardImg/KillBillVol2.png'
import reservior from '../../assets/img/movieCardImg/Reservoirdogs.png'


const movies: IMovieCard[] = [
  {
    id: '1',
    title: 'Pulp Fiction',
    description: 'Pulp Fiction',
    genre: ['Action & Adventure'],
    year: 2010,
    time: '1h 30m',
    rate: 4.6,
    imageUrl: pulpFiction,
  },
  {
    id: '2',
    title: 'Bohemian Rhapsody',
    description: 'Bohemian Rhapsody',
    genre: ['Drama'],
    year: 2010,
    time: '1h 30m',
    rate: 4.6,
    imageUrl: bohemian,
  },
  {
    id: '3',
    title: 'Kill Bill: Vol 2',
    description: 'Kill Bill: Vol 2',
    genre: ['Oscar winning Movie'],
    year: 2010,
    time: '1h 30m',
    rate: 4.6,
    imageUrl: killBill,
  },
  {
    id: '4',
    title: 'Avengers: War of Infinity',
    description: 'Avengers: War of Infinity',
    genre: ['Action & Adventure'],
    year: 2010,
    time: '1h 30m',
    rate: 4.6,
    imageUrl: avengers,
  },
  {
    id: '5',
    title: 'Inception',
    description: 'Inception',
    genre: ['Action & Adventure'],
    year: 2010,
    time: '1h 30m',
    rate: 4.6,
    imageUrl: inception,
  },
  {
    id: '6',
    title: 'Reservoir dogs',
    description: 'Reservoir dogs',
    genre: ['Oscar winning Movie'],
    year: 2010,
    time: '1h 30m',
    rate: 4.6,
    imageUrl: reservior,
  },
]

export const Body = () => {
  return(
    <BodyDiv>
      <ControlBar />
      <MovieList movies={movies} />
    </BodyDiv>
  )
}