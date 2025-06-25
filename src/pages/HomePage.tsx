const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#FFF8E7] text-[#3E3A36] flex flex-col items-center px-4 py-10 relative overflow-x-hidden">
      {/* Header */}
      <header className="relative w-full flex justify-center p-4">
          <h1 className="text-6xl font-extrabold tracking-wide">🍿팝 콘 픽🍿</h1>
      </header>

      {/* Intro */}
      <p className="text-lg font-medium text-center">평점 높은 랜덤 영화를 생성해 보세요!</p>

      {/* Button */}
      <button className="mt-6 cursor-pointer bg-[#F7D354] hover:bg-[#f5c93f] text-[#3E3A36] text-2xl font-semibold px-6 py-4 rounded-lg shadow-lg transition-all duration-200 hover:scale-105">
        🎲 영화 생성하기
      </button>

      {/* Movie Card */}
      <div className="w-full max-w-xl mt-12 bg-[#F3EFDC] rounded-2xl shadow-lg p-6 space-y-5 animate-fade-in">
        {/* Title */}
        <div className="flex items-center gap-2 text-4xl font-bold">
          <span>🎬</span>
          영화 제목
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <span className="bg-[#AC3222] text-white text-sm font-semibold px-3 py-1 rounded-full">★ 8.7</span>
          <span className="text-sm text-[#7A7572]">TMDB 평점</span>
        </div>

        {/* Poster */}
        <div className="w-full h-64 bg-[#DDD6C1] border border-[#CFC8B0] rounded-xl flex items-center justify-center text-[#7A7572] text-sm">
          포스터 이미지
        </div>

        {/* Overview */}
        <p className="text-base text-[#3E3A36] leading-relaxed">
          여기에 영화 줄거리가 표시됩니다. API 연결 후 실제 데이터가 나타날 예정입니다.
        </p>
      </div>

    </div>
  );
};

export default HomePage;
