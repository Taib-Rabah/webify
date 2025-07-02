import { ArrowRight } from "lucide-react";
import { Button } from "~/components/shadcn/button";

export default function Content() {
  return (
    <div className="flex flex-col gap-10 items-start">
      <p className="font-bold text-6xl">{data.title}</p>
      <p className="text-white/70 max-w-md text-lg">{data.description}</p>
      <Button variant={"link"} size="min" className="text-[#68D585] font-semibold text-xl">
        Get a free trial <ArrowRight className="stroke-3" />
      </Button>
    </div>
  );
}

const data = {
  title: "Get more visitors, get more sales.",
  description:
    "With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.",
};
