import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import TeamPage from "@/components/TeamPage";

export default function HomePage() {
  return (
    <main className="bg-gray-50">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Welcome Section */}
      <section className="container mx-auto mt-8 px-4">
        <h1 className="text-6xl font-bold text-center text-red-500 mb-6">
          Welcome to Martins FC!
        </h1>
        <p className="text-xl text-gray-600 text-center">
          Your home for passion, teamwork, and excellence.
        </p>
      </section>

      {/* Team Section */}
      <section className="container mx-auto mt-12" id="team">
        <h2 className="text-4xl font-semibold text-center text-gray-700 mb-8">
          Meet Our Squad
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <TeamPage /> {/* Render the team content */}
        </div>
      </section>
    </main>
  );
}