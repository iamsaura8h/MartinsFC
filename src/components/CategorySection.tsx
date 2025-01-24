import PlayerCard from "./PlayerCard";

interface CategorySectionProps {
  title: string;
  players: {
    id: number;
    name: string;
    jerseyNumber: number;
    position: string;
    batchYear: string;
    photo: string;
  }[];
}

const CategorySection = ({ title, players }: CategorySectionProps) => {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold text-red-500 mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
