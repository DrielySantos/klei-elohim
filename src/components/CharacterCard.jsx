// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CharacterCard({ character }) {
    // const [mostrarDetalhes, setMostrarDetalhes] = useState(false)
    const navigate = useNavigate();

    const verDetalhes = () =>{
        navigate(`/character/${character.id}`, { state: { character } });
    }

  return (
    <div className="w-full max-w-[380px] h-[85vh] object-cover rounded-[30px] overflow-hidden relative shadow-lg bg-gray-100">
      <img
        src={character.imagem}
        alt={character.nome}
        className="w-full h-[800px] object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full p-4 bg-gradient-to-b from-black/40 to-black/10 text-white flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl">✅</span>
            <h2 className="text-xl font-bold">{character.nome}</h2>
          </div>
          <p className="text-sm text-gray-200 leading-snug">
            Livro Bíblico: {character.livro} <br />
            {character.localizacao}
          </p>
        </div>
        
        <button 
          onClick={verDetalhes}
          className="mt-4 bg-white/20 p-2 rounded text-sm text-white"
        >
            ❤️
        </button>

      </div>
    </div>
  );
}

export default CharacterCard;
