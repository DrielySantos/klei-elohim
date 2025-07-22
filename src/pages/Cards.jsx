import characters from "../data/characters.json";
import CharacterCard from "../components/CharacterCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Cards() {
  return (
    // Removido min-h-screen e bg-[#dbd0c6] para herdar do AppLayout
    <div className="flex flex-col items-center justify-center p-4">
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
    </div>
  );
}

export default Cards;
