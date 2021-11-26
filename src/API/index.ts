import axios from 'axios'
import { MovieFormData, MoviesResponse, MovieType } from './../types'
import { SortOrder } from '../types'

const api = axios.create({
  baseURL: 'http://localhost:4000',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': 'application/json',
  },
})

export async function loadMovies(
  genre: null | string,
  sortBy: string,
  sortOrder: SortOrder,
  page: number,
  limit: number
) {
  try {
    const response = await api.get(
      `/movies?filter=${[genre]}&sortBy=${sortBy}&sortOrder=${sortOrder}&limit=${limit}&offset=${
        (page - 1) * limit
      }`
    )
    return response.data as MoviesResponse
  } catch (e) {
    if (axios.isAxiosError(e) && e.response) {
      console.log(e.response.data)
    }
  }
}

export async function loadMoviesBySearchTerm(
  searchTerm: string,
  genre: null | string,
  sortBy: string,
  sortOrder: SortOrder,
  page: number,
  limit: number
) {
  try {
    const response = await api.get(
      `./movies?search=${searchTerm}&searchBy=title&filter=${[
        genre,
      ]}&sortBy=${sortBy}&sortOrder=${sortOrder}&limit=${limit}&offset=${(page - 1) * limit}`
    )
    return response.data as MoviesResponse
  } catch (e) {
    if (axios.isAxiosError(e) && e.response) {
      console.log(e.response.data)
    }
  }
}

export async function loadMovie(id: string) {
  try {
    const response = await api.get(`/movies/${id}`)
    return response.data as MovieType
  } catch (e) {
    if (axios.isAxiosError(e) && e.response) {
      console.log(e.response.data)
    }
  }
}

export async function postMovie(data: MovieFormData) {
  try {
    const response = await api.post('/movies', data)
    return response.data as MovieType
  } catch (e) {
    if (axios.isAxiosError(e) && e.response) {
      console.log(e.response.data)
    }
  }
}

export async function putMovie(movie: MovieType) {
  try {
    const response = await api.put('/movies', movie)
    return response.data as MovieType
  } catch (e) {
    if (axios.isAxiosError(e) && e.response) {
      console.log(e.response.data)
    }
  }
}

export async function deleteMovie(id: string) {
  try {
    const response = await api.delete(`/movies/${id}`)
    return response
  } catch (e) {
    if (axios.isAxiosError(e) && e.response) {
      console.log(e.response.data)
    }
  }
}
