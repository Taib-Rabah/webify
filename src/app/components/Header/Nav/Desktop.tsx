import Link from "next/link";
import { links } from "~/app/components/Header/Nav/data";

export default function DesktopNav() {
  return (
    <nav className="ml-auto not-lg:hidden">
      <ul className="flex items-center">
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.href} className="px-4 py-2 inline-block group text-hero-foreground">
              <span className="before:content-empty before:w-0 before:h-0.5 before:bg-current before:absolute before:top-full before:left-0 group-hover:before:w-full relative before:duration-200 before:rounded-full">
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

