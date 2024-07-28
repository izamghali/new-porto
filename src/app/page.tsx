import Homepage from "@/components/custom/Homepage";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-black from-65% via-sky-900 to-ocean-light">
        <Homepage />
        <Toaster />
    </main>
  );
}
