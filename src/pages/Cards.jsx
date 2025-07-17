import characters from "../data/characters.json";
import CharacterCard from "../components/CharacterCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Header from "../components/Header";

function Cards() {
  return (
    <div className="min-h-screen bg-[#dbd0c6] flex flex-col items-center justify-center p-4">
      {/* Header fictício */}
      <Header />
      <div className="w-full flex justify-between items-center mb-4 max-w-xs">
        
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: "btn-next",
            prevEl: "btn-prev",
          }}
          loop
          className="w-full max-w-[380]"
        >
          {characters.map((character) => (
            <SwiperSlide key={character.id}>
              <CharacterCard character={character} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Botões de navegação */}
      {/* <div className="flex justify-between items-center w-60 mt-6">
        <button className="btn-prev text-3xl">🔙</button>
        <button className="btn-next text-3xl">❤️</button>
      </div> */}
    </div>
  );
}

export default Cards;
