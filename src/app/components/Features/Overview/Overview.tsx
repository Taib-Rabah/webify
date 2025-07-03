import { type Feature as FeatureProps, features } from "./data";

export default function FeaturesOverview() {
  return (
    <div className="wrapper py-12 sm:py-20">
      <div className="flex justify-center xl:justify-between flex-wrap gap-12 min-sm:max-xl:text-center">
        {features.map((feature) => (
          <Feature key={feature.id} {...feature} />
        ))}
      </div>
    </div>
  );
}

function Feature({ title, description, icon }: FeatureProps) {
  return (
    <div className="flex flex-col gap-4 max-w-xs">
      <div className="flex gap-4 min-sm:max-xl:justify-center items-center">
        {icon}
        <p className="font-bold text-lg sm:text-xl">{title}</p>
      </div>
      <p className="sm:text-lg">{description}</p>
    </div>
  );
}
