import { ArrowRight } from "lucide-react";
import { Button } from "~/components/shadcn/button";

export default function Content() {
  return (
    <div className="flex flex-col gap-6 xl:gap-10 not-xl:items-center items-start">
      <Title />
      <Description />
      <ActionButton />
    </div>
  );
}

function Title() {
  return (
    <p className="font-bold not-xl:text-balance text-2xl 2xs:text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-hero-foreground">
      {data.title}
    </p>
  );
}

function Description() {
  return (
    <p className="text-white/70 max-w-lg xl:max-w-lg 2xs:fs-4.25 sm:fs-4.5 md:fs-4.75">
      {data.description}
    </p>
  );
}

function ActionButton() {
  return (
    <Button
      variant={"link"}
      size="min"
      className="text-[#68D585] font-semibold text-lg sm:text-xl"
    >
      Get a free trial <ArrowRight className="stroke-3" />
    </Button>
  );
}

const data = {
  title: "Get more visitors, get more sales.",
  description:
    "With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.",
};
