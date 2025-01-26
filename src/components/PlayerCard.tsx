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
    <div className="border w-2/3 rounded-lg bg-white shadow-lg">
      <img
        src={player.photo}
        alt={player.name}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="p-4 flex justify-between">
        <div>
          <h1 className="text-black text-xl">{player.name}</h1>
          <p className="text-slate-600 text-sm">{player.position}</p>
        </div>
        <div className="text-4xl text-black">
          #{player.jerseyNumber}
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
