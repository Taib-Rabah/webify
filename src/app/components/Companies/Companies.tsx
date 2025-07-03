import Askimat from "~/app/components/Companies/Logos/Askimat";
import Coworks from "~/app/components/Companies/Logos/Coworks";
import Dorfus from "~/app/components/Companies/Logos/Dorfus";
import Greener from "~/app/components/Companies/Logos/Greener";
import MakeLess from "~/app/components/Companies/Logos/MakeLess";
import SaaSToday from "~/app/components/Companies/Logos/SaaSToday";

export default function Companies() {
  return (
    <div className="wrapper [--gap:2.5rem] sm:[--gap:4.5rem] md:[--gap:6rem] bg-white">
      <div className="flex *:shrink-0 py-9 md:py-12 xl:py-16 overflow-hidden hover:*:paused col-span-full mask-x-from-90%">
        <div className="flex items-center *:pl-[var(--gap)] *:box-content w-max horizontal-infinite-scroll *:shrink-0">
          <MakeLess />
          <Coworks />
          <Greener />
          <SaaSToday />
          <Dorfus />
          <Askimat />
        </div>
        <div
          role="presentation"
          aria-hidden
          className="flex items-center *:pl-[var(--gap)] *:box-content w-max horizontal-infinite-scroll *:shrink-0"
        >
          <MakeLess />
          <Coworks />
          <Greener />
          <SaaSToday />
          <Dorfus />
          <Askimat />
        </div>
      </div>
    </div>
  );
}
