import NextImage from "next/image";

export default function Image() {
  return <NextImage className="rounded-2xl mx-auto" src="/hero.jpg" alt="hero" width={600} height={400} />;
}
