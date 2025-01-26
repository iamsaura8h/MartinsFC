import Navbar from "@/components/Navbar";
import CategorySection from "@/components/CategorySection";

const teamData = {
  goalkeepers: [
    {
      id: 1,
      name: "Sarthak",
      position: "Goalkeeper",
      jerseyNumber: 1,
      batchYear: "2025",
      photo: "/images/players/sarthak.jpeg",
    },
  ],
  defenders: [
    {
      id: 2,
      name: "Ronald",
      position: "Defender",
      jerseyNumber: 12,
      batchYear: "2028",
      photo: "/images/players/ronald.jpeg",
    },
    {
      id: 3,
      name: "Thapa",
      position: "Defender",
      jerseyNumber: 4,
      batchYear: "2025",
      photo: "/images/players/thapa.jpeg",
    },
    {
      id: 4,
      name: "Rohit",
      position: "Defender",
      jerseyNumber: 5,
      batchYear: "2027",
      photo: "/images/players/rohit.jpeg",
    },
    {
      id: 5,
      name: "Rahil",
      position: "Defender",
      jerseyNumber: 2,
      batchYear: "2026",
      photo: "/images/players/rahil.jpeg",
    },
    {
      id: 6,
      name: "Kumaran",
      position: "Defender",
      jerseyNumber: 6,
      batchYear: "2025",
      photo: "/images/players/kumaran.jpeg",
    },
    {
      id: 7,
      name: "Sameer",
      position: "Defender",
      jerseyNumber: 40,
      batchYear: "2027",
      photo: "/images/players/sameer.jpeg",
    },
    {
      id: 8,
      name: "Hun",
      position: "Defender",
      jerseyNumber: 28,
      batchYear: "2025",
      photo: "/images/players/hun.jpeg",
    },
    {
      id: 9,
      name: "Bhargav",
      position: "Defender",
      jerseyNumber: 29,
      batchYear: "2025",
      photo: "/images/players/bhargav.jpeg",
    },
  ],
  midfielders: [
    {
      id: 10,
      name: "Saurabh",
      position: "Midfielder",
      jerseyNumber: 10,
      batchYear: "2025",
      photo: "/images/players/odegard.jpeg",
    },
    {
      id: 11,
      name: "Hafeez",
      position: "Midfielder",
      jerseyNumber: 13,
      batchYear: "2027",
      photo: "/images/players/hafeez.jpeg",
    },
    {
      id: 12,
      name: "Manish",
      position: "Midfielder",
      jerseyNumber: 30,
      batchYear: "2025",
      photo: "/images/players/manish.jpeg",
    },
  ],
  forwards: [
    {
      id: 13,
      name: "Varshit",
      position: "Forward",
      jerseyNumber: 19,
      batchYear: "2027",
      photo: "/images/players/varshit.jpeg",
    },
    {
      id: 14,
      name: "Bhavi",
      position: "Forward",
      jerseyNumber: 29,
      batchYear: "2026",
      photo: "/images/players/bhavi.jpeg",
    },
    {
      id: 15,
      name: "Afroz",
      position: "Forward",
      jerseyNumber: 7,
      batchYear: "2025",
      photo: "/images/players/afroz.jpeg",
    },
    {
      id: 16,
      name: "Kalki",
      position: "Forward",
      jerseyNumber: 42,
      batchYear: "2025",
      photo: "/images/players/kalki.jpeg",
    },
    {
      id: 17,
      name: "Kaushik",
      position: "Forward",
      jerseyNumber: 9,
      batchYear: "2025",
      photo: "/images/players/kaushik.jpeg",
    },
  ],
};


export default function TeamPage() {
  return (
    <main>
      <div className="container text-white p-6 ">
        <CategorySection title="Goalkeepers" players={teamData.goalkeepers} />
        <CategorySection title="Defenders" players={teamData.defenders} />
        <CategorySection title="Midfielders" players={teamData.midfielders} />
        <CategorySection title="Forwards" players={teamData.forwards} />
      </div>
    </main>
  );
}
