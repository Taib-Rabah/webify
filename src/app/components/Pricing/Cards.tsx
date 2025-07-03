"use client";

import { Check, X } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/shadcn/button";
import { Label } from "~/components/shadcn/label";
import { Switch } from "~/components/shadcn/switch";

export function Cards({ defaultDuration }: { defaultDuration?: "monthly" | "yearly" }) {
  const [duration, setDuration] = useState<"monthly" | "yearly">(defaultDuration ?? "monthly");

  return (
    <div>
      <PricingToggle defaultPricing={duration} onPricingChange={setDuration} />
      <div className="flex gap-10 flex-wrap justify-center">
        {cards.map((card, ind) => (
          <Card key={ind} {...card} duration={duration} />
        ))}
      </div>
    </div>
  );
}

type CardProps = CardData & {
  duration: "monthly" | "yearly";
};

function Card({ title, price, highlight, features, duration }: CardProps) {
  const processedPrice =
    duration === "monthly" ? price : price * 12 - (price * 12 * data.yearlyDiscount) / 100;

  return (
    <div
      data-highlight={highlight || undefined}
      className="bg-white dark:bg-hero-background rounded-2xl py-6 px-8 sm:p-10 w-fit"
    >
      <p className="text-primary uppercase text-sm font-bold">{title}</p>
      <p className="mt-6 sm:mt-10">
        <span className="font-bold text-xl sm:text-2xl">$</span>
        <span className="font-bold text-5xl sm:text-6xl">{processedPrice}</span>
        <span>/ {duration === "monthly" ? "month" : "year"}</span>
      </p>
      <p className="text-sm sm:mt-6 mt-3 sm:mb-12 mb-6">billed {duration}</p>
      <ul className="flex flex-col not-lg:mx-auto not-lg:w-fit gap-2">
        {Object.entries(features).map(([key, value], index) => (
          <li key={index} className="flex gap-2">
            <FeatureIcon name={key as keyof Features} value={value} />
            {featureTitles[key as keyof Features]}
          </li>
        ))}
      </ul>
      <Button size="lg" variant={highlight ? "default" : "secondary"} className="font-bold mt-8">
        Start Free Trial
      </Button>
    </div>
  );
}

function PricingToggle({
  defaultPricing,
  onPricingChange,
}: {
  defaultPricing?: "monthly" | "yearly";
  onPricingChange?: (pricing: "monthly" | "yearly") => void;
}) {
  return (
    <Label htmlFor="pricing-toggle" className="cursor-pointer w-fit mx-auto my-12 flex items-center">
      <span>Monthly</span>
      <Switch
        id="pricing-toggle"
        checked={defaultPricing === "yearly"}
        onCheckedChange={(checked) => {
          if (onPricingChange === undefined) return;
          checked ? onPricingChange("yearly") : onPricingChange("monthly");
        }}
      ></Switch>
      <span>Yearly</span>
      <span className="bg-primary/10 text-primary uppercase font-bold px-2 text-xs py-1 rounded-full">
        Save {data.yearlyDiscount}%
      </span>
    </Label>
  );
}

function FeatureIcon({ name, value }: { name: keyof Features; value: Features[keyof Features] }) {
  if (["commercialLicense", "uiElements", "premiumSupport", "updates"].includes(name)) {
    return value === true ? <Check className="text-[#68D585]" /> : <X className="text-border" />;
  }
  return <Check className="text-[#68D585]" />;
}

const featureTitles: Record<keyof Features, string> = {
  commercialLicense: "Commercial License",
  uiElements: "+100 HTML UI Elements",
  domains: "Domain Support",
  premiumSupport: "6 Months Premium Support",
  updates: "Lifetime Updates",
};

type Data = {
  yearlyDiscount: number;
  defaultPrice: "monthly" | "yearly";
};

const data: Data = {
  yearlyDiscount: 25,
  defaultPrice: "monthly",
};

type Features = {
  commercialLicense: boolean;
  uiElements: boolean;
  domains: number;
  premiumSupport: boolean;
  updates: boolean;
};

type CardData = {
  title: string;
  price: number;
  highlight?: boolean;
  features: Features;
};

const cards: CardData[] = [
  {
    title: "Starter",
    price: 19,
    features: {
      commercialLicense: true,
      uiElements: true,
      domains: 1,
      premiumSupport: false,
      updates: false,
    },
  },
  {
    title: "Standard",
    price: 49,
    highlight: true,
    features: {
      commercialLicense: true,
      uiElements: true,
      domains: Infinity,
      premiumSupport: true,
      updates: false,
    },
  },
  {
    title: "Premium",
    price: 99,
    features: {
      commercialLicense: true,
      uiElements: true,
      domains: Infinity,
      premiumSupport: true,
      updates: true,
    },
  },
];
