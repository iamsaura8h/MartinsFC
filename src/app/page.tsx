import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import TeamPage from "@/components/TeamPage";

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
          Meet Our Squad
        </h2>
        <TeamPage /> {/* Render the team content */}
      </section>
      
      
      
    </main>
  );
}
