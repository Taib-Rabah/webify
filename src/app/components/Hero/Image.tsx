import NextImage from "next/image";

export default function Image() {
  return (
    <div className="h-100 relative">
      <NextImage className="rounded-2xl" src="/hero.jpg" alt="hero" fill />
    </div>
  )
}