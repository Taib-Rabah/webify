import { Companies, Features, Hero, Pricing } from "~/app/components";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <Features />
      <Pricing />
      <Testimonials />
    </main>
  );
}
