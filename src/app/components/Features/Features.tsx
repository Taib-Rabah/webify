import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/shadcn/button";
import { features, type Feature as FeatureProps } from "./data";
import FeaturesOverview from "./Overview/Overview";

export default function Features() {
  return (
    <div className="wrapper overflow-hidden">
      <div>
        <FeaturesOverview />
        <div className="mt-15 sm:mt-30 flex flex-col gap-24 sm:gap-40">
          {features.map((feature) => (
            <Feature key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Feature({ title, description, image, imagePosition, CTA }: FeatureProps) {
  return (
    <div className="flex gap-12 sm:gap-20 items-center not-xl:flex-col not-xl:text-center">
      <FeatureImage image={image} imagePosition={imagePosition} />
      <FeatureContent title={title} description={description} CTA={CTA} />
    </div>
  );
}

function FeatureContent({ title, description, CTA }: Pick<FeatureProps, "title" | "description" | "CTA">) {
  return (
    <div className="flex flex-col gap-5 sm:gap-8 max-w-md not-xl:items-center">
      <h2 className="font-bold text-2xl text-balance sm:text-3xl md:text-4xl">{title}</h2>
      <p className="sm:text-lg md:text-xl">{description}</p>
      <Button asChild variant={"link"} size="min">
        <Link href={CTA.url} className="not-sm:text-lg sm:text-xl font-bold! flex items-center gap-4">
          {CTA.title} <ArrowRight className="stroke-3" />
        </Link>
      </Button>
    </div>
  );
}

function FeatureImage({ image, imagePosition }: Pick<FeatureProps, "image" | "imagePosition">) {
  return <div className={imagePosition === "left" ? "-order-1" : ""}>{image}</div>;
}
