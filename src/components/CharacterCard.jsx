import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Flame, Heart } from 'lucide-react';
import Button from './Button';

function CharacterCard({ character }) {
  const navigate = useNavigate();

  const verDetalhes = () => {
    navigate(`/character/${character.id}`, { state: { character } });
  };

  const voltarCard = () => {
    console.log("Voltar ao card anterior");
  };

  return (
    <div className="w-full max-w-[600px] h-auto bg-white dark:bg-gray-800 relative rounded-lg overflow-hidden shadow-lg">
      <img
        src={character.imagem}
        alt={character.nome}
        className="w-full max-h-[848px] object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white flex flex-col justify-end">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl">✅</span>
            <h2 className="text-xl font-bold mt-4">
              {character.nome}
            </h2>
          </div>
          <p className="mt-1">
            Livro Bíblico: {character.livro} <br />
            {character.localizacao}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {character.qualidade.map((qualidade, index) => (
              <span key={index} 
                    className={`px-3 py-1 rounded-full text-sm font-medium 
                  ${qualidade === character.qualidade[0] 
                    ? 'bg-red-500 text-white' 
                    : 'bg-gray-400 text-white'}`}
              >
                {qualidade}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-8 mt-4">
          <Button
            icon={<ChevronLeft className="w-6 h-6 text-yellow-500" />}
            onClick={voltarCard}
            label="Voltar"
            className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white"
          />

          <Button
            icon={<Heart className="w-6 h-6 text-red-600" />}
            onClick={verDetalhes}
            label="Ver detalhes"
            className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white"
          />

          {/* <Button 
            icon={<Flame className="w-6 h-6" />}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
