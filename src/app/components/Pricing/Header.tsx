export default function Header() {
  return (
    <div className="flex flex-col gap-5 items-center text-center">
      <h2 className="font-bold text-4xl">{data.title}</h2>
      <p className="text-xl max-w-xl">{data.description}</p>
    </div>
  );
}

const data = {
  title: "Pricing & Plans",
  description:
    "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
};
