import Link from "next/link";

type SectionProps = {
  title: string;
  links: Link[];
};

export default function Section({ title, links }: SectionProps) {
  return (
    <div>
      <h3 className="text-hero-foreground/70 mb-5 not-md:font-thin">{title}</h3>
      <ul className="flex flex-col gap-2 md:text-lg">
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export type Link = {
  id: string;
  label: string;
  href: string;
};
