import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import CategorySection from "@/components/CategorySection";
import TeamPage from "@/components/Team";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroCarousel />
      <section className="container mx-auto mt-8">
        <h1 className="text-6xl font-bold text-center text-red-500">
          Welcome to Martins FC!
        </h1>
      </section>
      {/* Embed the Team content below */}
      <section className="container mx-auto mt-12">
        <h2 className="text-4xl font-semibold text-center text-gray-700">
          Meet Our Starting XI
        </h2>
        <TeamPage /> {/* Render the team content */}
      </section>
      
      
      
    </main>
  );
}
