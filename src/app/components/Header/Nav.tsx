import Link from "next/link";

export default function Nav() {
  return (
    <nav className="ml-auto">
      <ul className="flex items-center">
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.href} className="px-4 py-2 inline-block group">
              <span className="before:content-empty before:w-0 before:h-0.5 before:bg-foreground before:absolute before:top-full before:left-0 group-hover:before:w-full relative before:duration-200 before:rounded-full">
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

type Link = {
  id: string;
  label: string;
  href: string;
};

// demos pages support contact
const links: Link[] = [
  {
    id: "demos",
    label: "Demos",
    href: "/",
  },
  {
    id: "pages",
    label: "Pages",
    href: "/",
  },
  {
    id: "support",
    label: "Support",
    href: "/",
  },
  {
    id: "contact",
    label: "Contact",
    href: "/",
  },
];
