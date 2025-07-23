import { useNavigate } from 'react-router-dom';

function CharacterCard({ character }) {
    const navigate = useNavigate();

    const verDetalhes = () =>{
        navigate(`/character/${character.id}`, { state: { character } });
    }

  return (
    <div className="w-full max-w-[600px] h-auto bg-white dark:bg-gray-800 relative rounded-lg overflow-hidden shadow-lg">
      <img
        src={character.imagem}
        alt={character.nome}
        className="w-full max-h-[848px] object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full p-4 bg-gradient-to-b from-black/40 to-black/10 text-white flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl">✅</span>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-4">{character.nome}</h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 mt-1">
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
