"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import PlayerCard from "@/components/PlayerCard";

interface Player {
  id: number;
  name: string;
  jersey_number: number;
  position: string;
  batch_year: string;
  photo: string;
}

export default function TeamPage() {
  const [goalkeepers, setGoalkeepers] = useState<Player[]>([]);
  const [defenders, setDefenders] = useState<Player[]>([]);
  const [midfielders, setMidfielders] = useState<Player[]>([]);
  const [forwards, setForwards] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const positions = ["Goalkeeper", "Defender", "Midfielder", "Forward"];
        const queries = positions.map(position =>
          supabase.from("Player").select("*").eq("position", position)
        );

        // Run all queries in parallel
        const [gkRes, defRes, midRes, fwdRes] = await Promise.all(queries);

        if (gkRes.error || defRes.error || midRes.error || fwdRes.error) {
          console.error("Error fetching players:", gkRes.error || defRes.error || midRes.error || fwdRes.error);
          return;
        }

        // Set state with filtered data
        setGoalkeepers(gkRes.data || []);
        setDefenders(defRes.data || []);
        setMidfielders(midRes.data || []);
        setForwards(fwdRes.data || []);
      } catch (error) {
        console.error("Unexpected error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPlayers();
  }, []);

  if (loading) return <p className="text-center text-white">Loading players...</p>;

  return (
    <main className="container text-white p-6">
      <Section title="Goalkeepers" players={goalkeepers} />
      <Section title="Defenders" players={defenders} />
      <Section title="Midfielders" players={midfielders} />
      <Section title="Forwards" players={forwards} />
    </main>
  );
}

const Section = ({ title, players }: { title: string; players: Player[] }) => (
  <section className="mt-8">
    <h2 className="text-4xl font-bold text-red-500 mb-4">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {players.map(player => <PlayerCard key={player.id} player={player} />)}
    </div>
  </section>
);
