import axios from 'axios'
import { MovieState } from './movieSlice'
import { MovieType } from '../types'
import movieReducer from './movieSlice'
import { setMovie, setMovies, getMovieHints, setMovieHints } from '.'
import store from './store'

const getMoviesUrl =
  'http://localhost:4000/movies?filter=&sortBy=vote_average&sortOrder=desc&limit=12&offset=0'
const getHintsurl =
  'http://localhost:4000/movies?search=hi&searchBy=title&filter=&sortBy=vote_average&sortOrder=desc&limit=6&offset=0'

describe('Movie Reducer', () => {
  let state: MovieState
  let movie: MovieType
  let movieHints: Array<MovieType>
  
  beforeEach(() => {
    state = {
      movies: [],
      movie: null,
      movieHints: [],
      addMovieTitle: '',
      totalAmount: 0,
      limit: 12,
      page: 1,
    }
    movie = {
      id: '12345',
      title: 'Hello World',
      overview: 'Test Movie',
      genres: ['Comedy', 'Drama', 'Romance'],
      release_date: '2018-03-30',
      runtime: 123,
      vote_average: 7,
      poster_path: 'https://image.tmdb.org/t/p/w500/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg',
    }
    movieHints = [
      {
        id: '120',
        title: "The Lord of the Rings: The Fellowship of the Ring",
        tagline: "One ring to rule them all",
        vote_average: 8.1,
        vote_count: 10730,
        release_date: "2001-12-18",
        poster_path: "https://image.tmdb.org/t/p/w500/bi9JddwTwBt3ixGLAiMAF7OXMbV.jpg",
        overview: "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
        budget: 93000000,
        revenue: 871368364,
        genres: [
          "Adventure",
          "Fantasy",
          "Action"
        ],
        runtime: 178
      },
      {
        id: '496316',
        title: "Baaghi 2",
        tagline: "Rebel for Love",
        vote_average: 7.7,
        vote_count: 3,
        release_date: "2018-03-30",
        poster_path: "https://image.tmdb.org/t/p/w500/gwX6mKjfxBYbq46CoIpcxIAmIMx.jpg",
        overview: "A battle-hardened army officer goes in search of his ex-lover's child who is mysteriously kidnapped. Neha reaches out to the only person who can help her with her plight, Ronnie. He goes deep into the underbelly of Goa, facing off against drug lords, menacing Russian henchmen, and blood thirsty animals. Daring stunts, chase sequences, air strikes, bomb blasts and other large-scale action sequences will be done with a bona-fide, larger than life approach, truly making it a spectacle.",
        budget: 0,
        revenue: 0,
        genres: [
          "Action",
          "Romance",
          "Thriller"
        ],
        runtime: 145
      }
    ]
  })

  it('Set/Unset movie', () => {
    let newState = movieReducer(state, setMovie(movie))
    expect(newState.movie).toEqual(movie)
    newState = movieReducer(newState, setMovie(null))
    expect(newState.movie).toBeNull()
  })

  it('Loads 12 movies from API', async () => {
    const response = await axios.get(getMoviesUrl)
    const { data } = response.data as { data: Array<MovieType> }
    let newState = movieReducer(state, setMovies(data))
    expect(newState.movies).toHaveLength(12)
  })

  it('Successfully runs thunk to get movie hints and does 1 dispatch to update state', async () => {
    const dispatch = jest.fn()
    const thunk = getMovieHints('hi')
    await thunk(dispatch, store.getState)
    expect(dispatch).toBeCalledTimes(1)
  })

  it('Set movie hints', ()=>{
    let newState = movieReducer(state, setMovieHints(movieHints))
    expect(newState.movieHints).toEqual(movieHints)
    expect(newState.movieHints).toHaveLength(2) 
  })
})
