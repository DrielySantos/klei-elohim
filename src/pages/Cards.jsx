import characters from "../data/characters.json";
import CharacterCard from "../components/CharacterCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Cards() {
  return (
  
    <div className="flex flex-col items-center justify-center w-full px-4">
  <div className="w-full max-w-6xl">
    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      loop
      className="w-full"
    >
      {characters.map((character) => (
        <SwiperSlide key={character.id} className="flex justify-center">
          <CharacterCard character={character} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>

  );
}

export default Cards;
