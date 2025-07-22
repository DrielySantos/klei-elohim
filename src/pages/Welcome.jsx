import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      {/* Adicionadas classes `dark:` para o gradiente e para o texto */}
      {/* SUGESTÃO: Simplificamos a estrutura removendo um div aninhado e a altura fixa. */}
      <div className="h-[100dvh] w-full flex flex-col justify-center items-center bg-gradient-to-b from-[#f8ecd6] to-[#f5d7b2] dark:from-zinc-900 dark:to-zinc-800 text-center p-6">
        <div className="w-full max-w-md flex flex-col items-center">
          <img
            src="/capa-ke-removebg-preview.png"
            alt="Klei Elohim Logo"
            style={{ width: "320px", height: "auto" }}
            // className="w-24 h-auto mb-4"
          />

          <p className="text-[#5c4a31] dark:text-zinc-300 text-base font-medium max-w-xs mt-4 mb-10 leading-relaxed">
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
