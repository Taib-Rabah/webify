import Content from "~/app/components/Hero/Content";
import Image from "~/app/components/Hero/Image";

export default function Hero() {
  return (
    <div className="col-span-full grid grid-cols-trick min-h-dvh bg-hero-background">
      <div className="col-2 flex *:flex-1 text-hero-foreground pt-60">
        <Content />
        <Image />
      </div>
    </div>
  );
}

