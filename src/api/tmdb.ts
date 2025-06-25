const API_KEY = import.meta.env.VITE_TMDB_API_KEY; 
const BASE_URL = 'https://api.themoviedb.org/3'

export const fetchHighRatedPopularMovies = async () => {
const randomPage = Math.floor(Math.random() * 20) + 1;
const higherthan = 7; // 평점 기준, 7 이상
  const res = await fetch(
    `${BASE_URL}/discover/movie?sort_by=vote_average.desc&vote_count.gte=1000&vote_average.gte=${higherthan}&api_key=${API_KEY}&language=ko-KR&page=${randomPage}`
  )

  if (!res.ok) throw new Error('Failed to fetch movies')
  const data = await res.json()
  return data.results
}
