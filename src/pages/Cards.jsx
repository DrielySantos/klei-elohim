import BibleCharacterCard from "../components/CharacterCard";


function Cards() {
  return (
    <div className="min-h-screen bg-[#dbd0c6] flex flex-col items-center justify-center p-4">
      {/* Header fictício */}
      <div className="w-full flex justify-between items-center mb-4 max-w-xs">
        <h1 className="text-sm text-gray-800 font-medium">Klei Elohim</h1>
        <div className="flex items-center gap-2">
          <div className="w-10 h-5 bg-gray-400 rounded-full relative">
            <div className="w-4 h-4 bg-white rounded-full absolute left-1 top-0.5 shadow"></div>
          </div>
        </div>
      </div>

      {/* Card */}
      <BibleCharacterCard />
    </div>
  );
}

export default Cards;
