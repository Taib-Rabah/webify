import Content from "~/app/components/Hero/Content";
import Image from "~/app/components/Hero/Image";

export default function Hero() {
  return (
    <div className="min-h-dvh bg-hero-background wrapper">
      <div className="grid grid-cols-2 text-hero-foreground pt-60 not-xl:pt-50">
        <Content />
        <Image />
      </div>
    </div>
  );
}
