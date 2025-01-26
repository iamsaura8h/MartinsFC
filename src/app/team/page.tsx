import Navbar from "@/components/Navbar";
import CategorySection from "@/components/CategorySection";

const teamData = {
  goalkeepers: [
    
  ],
  defenders: [],
  midfielders: [
    {
    id: 1,
    name: "Saurabh",
    jerseyNumber: 10,
    position: "Midfielder",
    batchYear: "2025",
    photo: "/images/players/odegard.jpeg",
  },
  ],
  forwards: [],
};

export default function TeamPage() {
  return (
    <main>
      <Navbar />
      <div className="container text-white p-6 ">
        <CategorySection title="Goalkeepers" players={teamData.goalkeepers} />
        <CategorySection title="Defenders" players={teamData.defenders} />
        <CategorySection title="Midfielders" players={teamData.midfielders} />
        <CategorySection title="Forwards" players={teamData.forwards} />
      </div>
    </main>
  );
}
