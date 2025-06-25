import { useRandomMovie } from '../hooks/useRandomMovie'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

const HomePage = () => {
  const { movie, loading, error, getRandomMovie } = useRandomMovie()

  return (
    <div className="min-h-screen bg-[#FFF8E7] text-[#3E3A36] flex flex-col items-center px-4 py-10 relative overflow-x-hidden">
      <header className="relative w-full flex justify-center p-4">
        <h1 className="text-6xl font-extrabold tracking-wide">🍿팝 콘 픽🍿</h1>
      </header>

      <p className="text-lg font-medium text-center">평점 높은 랜덤 영화를 생성해 보세요!</p>

      <button
        onClick={getRandomMovie}
        className="mt-6 cursor-pointer bg-[#F7D354] hover:bg-[#f5c93f] text-[#3E3A36] text-2xl font-semibold px-6 py-4 rounded-lg shadow-lg transition-all duration-200 hover:scale-105"
      >
        🎲 영화 생성하기
      </button>

      {loading && <p className="mt-10 text-[#7A7572]">로딩 중...</p>}
      {error && <p className="mt-10 text-red-500">에러 발생: {error}</p>}

      {movie && (
        <div className="w-full max-w-xl mt-12 bg-[#F3EFDC] rounded-2xl shadow-lg p-6 space-y-5 animate-fade-in">
          <div className="flex items-center gap-2 text-4xl font-bold">
            <span>🎬</span>
            {movie.title}
          </div>

          <div className="flex items-center gap-2">
            <span className="bg-[#AC3222] text-white text-sm font-semibold px-3 py-1 rounded-full">★ {movie.vote_average.toFixed(1)}</span>
            <span className="text-sm text-[#7A7572]">TMDB 평점</span>
          </div>

          <div className="w-full h-64 bg-[#DDD6C1] border border-[#CFC8B0] rounded-xl flex items-center justify-center overflow-hidden">
            {movie.poster_path ? (
              <img
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-[#7A7572] text-sm">포스터 없음</span>
            )}
          </div>

          <p className="text-base text-[#3E3A36] leading-relaxed">{movie.overview}</p>
        </div>
      )}
    </div>
  )
}

export default HomePage
