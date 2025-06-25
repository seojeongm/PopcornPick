import { useRandomMovie } from '../hooks/useRandomMovie'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

const HomePage = () => {
  const { movie, loading, error, getRandomMovie } = useRandomMovie()

  return (
    <div className="min-h-screen bg-[#FFF8E7] text-[#3E3A36] flex flex-col items-center px-4 py-10 relative overflow-x-hidden">
      <header className="w-full flex justify-center mb-4">
        <h1 className="text-6xl font-extrabold tracking-widest">🍿 팝 콘 픽 🍿</h1>
      </header>

      <p className="text-lg font-medium text-center mb-6">
        평점 높은 랜덤 영화를 생성해 보세요!
      </p>

      <button
        onClick={getRandomMovie}
        className="cursor-pointer bg-[#F7D354] hover:bg-[#f5c93f] text-[#3E3A36] text-2xl font-semibold px-8 py-4 rounded-lg shadow-lg transition-transform duration-200 hover:scale-105"
      >
        🎲 영화 생성하기
      </button>

      {loading && <p className="mt-12 text-[#7A7572] text-lg">로딩 중...</p>}
      {error && <p className="mt-12 text-red-500 text-lg">에러 발생: {error}</p>}

      {movie && (
        <div className="w-full max-w-2xl mt-12 bg-[#F3EFDC] rounded-2xl shadow-xl p-8 space-y-6 animate-fade-in">
          <div className="flex items-center gap-2 text-3xl font-bold">
            <span>🎬</span>
            {movie.title}
          </div>

          <div className="flex items-center gap-2">
            <span className="bg-[#AC3222] text-white text-sm font-semibold px-3 py-1 rounded-full shadow">
              ★ {movie.vote_average.toFixed(1)}
            </span>
            <span className="text-sm text-[#7A7572]">TMDB 평점</span>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex justify-center md:justify-start w-full md:w-[230px]">
              {movie.poster_path ? (
                <img
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                  alt={movie.title}
                  className="object-contain rounded-xl border border-[#CFC8B0] shadow"
                />
              ) : (
                <div className="w-full h-[350px] bg-[#DDD6C1] flex items-center justify-center text-[#7A7572] text-sm rounded-xl border border-[#CFC8B0]">
                  포스터 없음
                </div>
              )}
            </div>

            <p className="text-base md:text-lg leading-relaxed flex-1 text-[#3E3A36]">
              {movie.overview}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomePage
