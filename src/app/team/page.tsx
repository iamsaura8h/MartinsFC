import Navbar from "@/components/Navbar";
import CategorySection from "@/components/CategorySection";

const teamData = {
  goalkeepers: [
    {
      id: 1,
      name: "Martin Odegaard",
      jerseyNumber: 10,
      position: "Midfielder",
      batchYear: "2025",
      photo: "/images/players/odegard.jpeg",
    },
  ],
  defenders: [],
  midfielders: [],
  forwards: [],
};

export default function TeamPage() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto mt-8">
        <CategorySection title="Goalkeepers" players={teamData.goalkeepers} />
        <CategorySection title="Defenders" players={teamData.defenders} />
        <CategorySection title="Midfielders" players={teamData.midfielders} />
        <CategorySection title="Forwards" players={teamData.forwards} />
      </div>
    </main>
  );
}
