import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroCarousel />
      <section className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold text-center text-red-500">
          Welcome to Martins FC!
        </h1>
      </section>
    </main>
  );
}
