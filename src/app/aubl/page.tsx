import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeagueHomePage from "@/components/LeagueHomePage";
import { getLeague } from "@/lib/leagues";

export default function AUBLPage() {
  const league = getLeague("aubl")!;
  return (
    <>
      <Navbar />
      <LeagueHomePage league={league} />
      <Footer />
    </>
  );
}
