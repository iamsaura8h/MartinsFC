interface Player {
    id: number;
    name: string;
    jerseyNumber: number;
    position: string;
    batchYear: string;
    photo: string;
  }
  
  const PlayerCard = ({ player }: { player: Player }) => {
    return (
      <div className="border rounded-lg p-4 bg-white shadow-lg">
        <img
          src={player.photo}
          alt={player.name}
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="mt-2 text-center">
          <h2 className="text-lg font-bold">{player.name}</h2>
          <p className="text-gray-600">#{player.jerseyNumber} | {player.position}</p>
          <p className="text-sm text-gray-500">Batch: {player.batchYear}</p>
        </div>
      </div>
    );
  };
  
  export default PlayerCard;
  