import { Cards } from "./Cards";
import Header from "./Header";

export default function Pricing() {
  return (
    <div className="wrapper pt-25 bg-[#ECF2F7] dark:bg-[color-mix(in_oklab,var(--background)_90%,black)]">
      <div className="w-fit mx-auto">
        <Header />
        <Cards />
      </div>
    </div>
  );
}
