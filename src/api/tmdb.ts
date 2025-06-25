const API_KEY = import.meta.env.VITE_TMDB_API_KEY; 
const BASE_URL = 'https://api.themoviedb.org/3'

export const fetchHighRatedPopularMovies = async () => {
  const res = await fetch(
    `${BASE_URL}/discover/movie?sort_by=vote_average.desc&vote_count.gte=1000&vote_average.gte=8&api_key=${API_KEY}&language=ko-KR`
  )

  if (!res.ok) throw new Error('Failed to fetch movies')
  const data = await res.json()
  return data.results
}
