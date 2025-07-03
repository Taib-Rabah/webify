import Content from "~/app/components/Hero/Content";
import Image from "~/app/components/Hero/Image";

export default function Hero() {
  return (
    <div className="bg-hero-background wrapper py-30 md:py-40 xl:py-60">
      <div className="grid xl:grid-cols-2 not-xl:text-center gap-12">
        <Content />
        <Image />
      </div>
    </div>
  );
}
