import { useState } from 'react'
import { fetchHighRatedPopularMovies } from '../api/tmdb'
import type { Movie } from '../types/movie'

export const useRandomMovie = () => {
  const [movie, setMovie] = useState<Movie | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getRandomMovie = async () => {
    setLoading(true)
    setError(null)
    try {
      const movies = await fetchHighRatedPopularMovies()
      const random = movies[Math.floor(Math.random() * movies.length)]
      setMovie(random)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { movie, loading, error, getRandomMovie }
}
