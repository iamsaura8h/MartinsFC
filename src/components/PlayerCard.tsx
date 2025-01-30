import { Player } from '@/types/Player';

interface PlayerCardProps {
  player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <div className="border border-gray-200 w-full sm:w-2/3 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Player Image */}
      <img
        src={player.photo}
        alt={player.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      {/* Player Details */}
      <div className="p-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{player.name}</h1>
          <p className="text-sm text-gray-600 mt-1">{player.position}</p>
        </div>
        <div className="text-4xl font-bold text-red-500">#{player.jersey_number}</div>
      </div>
    </div>
  );
};

export default PlayerCard;