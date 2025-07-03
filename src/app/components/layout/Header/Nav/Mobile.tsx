import { Menu } from "lucide-react";
import Link from "next/link";
import { links } from "./data";
import {
  SheetFooter,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/shadcn/sheet";
import ThemeToggler from "~/components/ThemeToggler";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden ml-auto cursor-pointer">
        <Menu className="stroke-white" />
      </SheetTrigger>
      <SheetContent className="z-top bg-hero-background text-hero-foreground">
        <SheetHeader>
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <SheetDescription className="sr-only">Navigate to different pages</SheetDescription>
        </SheetHeader>
        <SheetBody />
        <SheetFooter>
          <ThemeToggler className="text-foreground" />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

function SheetBody() {
  return (
    <nav className="">
      <ul className="flex flex-col">
        {links.map((link) => (
          <li key={link.id}>
            <SheetClose asChild>
              <Link href={link.href} className="hover:bg-primary/15 px-4 py-2 group w-full grid grid-cols-[auto_1fr] gap-3 items-center place-items-end">
                <span className="font-semibold text-xl group-hover:text-primary">
                  {link.label}
                </span>
                <span className="h-0.5 w-11/12 group-hover:w-full duration-200 col-2 bg-current/80 group-hover:bg-primary rounded-full inline-block"></span>
              </Link>
            </SheetClose>
          </li>
        ))}
      </ul>
    </nav>
  );
}
