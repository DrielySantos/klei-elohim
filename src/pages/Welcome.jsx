import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="h-[100dvh] w-full flex flex-col justify-center items-center bg-gradient-to-b from-[#f8ecd6] to-[#f5d7b2] text-center overflow-hidden px-6">
        <div className="w-full max-w-[412px] h-[915px] mx-auto flex flex-col items-center justify-center px-6 text-center">
          <img
            src="/capa-ke-removebg-preview.png"
            alt="Klei Elohim Logo"
            style={{ width: "320px", height: "auto" }}
            // className="w-24 h-auto mb-4"
          />

          <p className="text-[#5c4a31] text-base font-medium max-w-xs mt-4 mb-10 leading-relaxed">
            Descubra a transformação de personagens bíblicos em uma jornada com Deus.
          </p>

          <button
          onClick={() => navigate("/home")}
          className="px-10 py-1 text-lg text-white font-semibold bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full shadow-md hover:from-amber-600 hover:to-yellow-500 transition-all duration-300 ease-in-out"
          >
            COMEÇAR
          </button>


        </div>
      </div>
    </PageWrapper>
  );
}

