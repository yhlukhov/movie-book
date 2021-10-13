import { useState } from 'react'
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
import { sotrTypes } from '../../types/ControlBar'

const movies: MovieType[] = [
  {
    id: '1',
    title: 'Pulp Fiction',
    description: 'Pulp Fiction',
    genre: ['comedy', 'horror'],
    releaseDate: new Date(2010, 11, 20),
    runtime: 80,
    rating: 8.6,
    movieUrl: 'https://movie.url.com',
    imageUrl: pulpFiction,
  },
  {
    id: '2',
    title: 'Bohemian Rhapsody',
    description: 'Bohemian Rhapsody',
    genre: ['crime'],
    releaseDate: new Date(2018, 11, 20),
    runtime: 70,
    rating: 6.6,
    movieUrl: 'https://movie.url.com',
    imageUrl: bohemian,
  },
  {
    id: '3',
    title: 'Kill Bill: Vol 2',
    description: 'Kill Bill: Vol 2',
    genre: ['documentary', 'comedy'],
    releaseDate: new Date(2012, 11, 20),
    runtime: 60,
    rating: 9.6,
    movieUrl: 'https://movie.url.com',
    imageUrl: killBill,
  },
  {
    id: '4',
    title: 'Avengers: War of Infinity',
    description: 'Avengers: War of Infinity',
    genre: ['horror'],
    releaseDate: new Date(2015, 11, 20),
    runtime: 50,
    rating: 1.6,
    movieUrl: 'https://movie.url.com',
    imageUrl: avengers,
  },
  {
    id: '5',
    title: 'Inception',
    description: 'Inception',
    genre: ['comedy'],
    releaseDate: new Date(2020, 11, 20),
    runtime: 70,
    rating: 5.6,
    movieUrl: 'https://movie.url.com',
    imageUrl: inception,
  },
  {
    id: '6',
    title: 'Reservoir dogs',
    description: 'Reservoir dogs',
    genre: ['crime', 'documentary'],
    releaseDate: new Date(2009, 11, 20),
    runtime: 95,
    rating: 7.6,
    movieUrl: 'https://movie.url.com',
    imageUrl: reservior,
  },
]

export const Body = () => {
  const [sortType, setSortType] = useState(sotrTypes.releaseDate )
  return (
    <BodyDiv>
      <ControlBar setSortType={setSortType} />
      <MovieList movies={movies} sortBy={sortType} />
    </BodyDiv>
  )
}
