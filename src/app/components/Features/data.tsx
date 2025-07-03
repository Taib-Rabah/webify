import Image from "next/image";

export type Feature = {
  id: string;
  title: string;
  description: string;
  image: React.ReactNode;
  imagePosition: "left" | "right";
  CTA: {
    title: string;
    url: string;
  };
};

const description =
  "We share common trends and strategies for improving your rental income and making sure you stay in high demand.";

const CTA: Feature["CTA"] = {
  title: "Start a free trial",
  url: "/",
};

export const features: Feature[] = [
  {
    id: "1",
    title: "Track your progress with our advanced site.",
    description,
    image: <Feature01Image />,
    imagePosition: "left",
    CTA,
  },
  {
    id: "2",
    title: "Understand your visitors fast. Take quick actions.",
    description,
    image: <Feature02Image />,
    imagePosition: "right",
    CTA,
  },
  {
    id: "3",
    title: "Make your customers happy by giving services.",
    description,
    image: <Feature03Image />,
    imagePosition: "left",
    CTA,
  },
];

function Feature01Image() {
  return <Image src="/dashboard.webp" alt="dashboard" width={720} height={480} />;
}
function Feature02Image() {
  return (
    <div className="grid-single not-sm:mr-12 xl:ml-40">
      <Image src="/score01.webp" alt="score01" width={320} height={500} />
      <Image
        src="/score02.webp"
        alt="score02"
        width={320}
        height={500}
        className="scale-80 -z-1 ml-40 xs:ml-50 opacity-60"
      />
    </div>
  );
}
function Feature03Image() {
  return (
    <div className="flex gap-4 sm:gap-8 xl:mr-30">
      <div className="flex flex-col gap-4 sm:gap-8">
        <Image src="/customer01.webp" alt="customer01" width={220} height={220} className="rounded-lg" />
        <Image src="/customer02.webp" alt="customer02" width={220} height={260} className="rounded-lg" />
      </div>
      <div className="flex flex-col gap-4 sm:gap-8 translate-y-8">
        <Image src="/customer03.webp" alt="customer03" width={220} height={260} className="rounded-lg" />
        <Image src="/customer04.webp" alt="customer04" width={220} height={220} className="rounded-lg" />
      </div>
    </div>
  );
}
