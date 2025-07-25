import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Flame, Heart } from 'lucide-react';
import Button from './Button'; // Importando o componente Button

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

      <div className="absolute top-0 left-0 w-full h-full p-4 bg-gradient-to-b from-black/40 to-black/10 text-white flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl">✅</span>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-4">
              {character.nome}
            </h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 mt-1">
            Livro Bíblico: {character.livro} <br />
            {character.localizacao}
          </p>
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
