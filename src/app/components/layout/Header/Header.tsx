"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "~/components/shadcn/button";
import ThemeToggler from "~/components/ThemeToggler";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Header() {
  const [scrolled, setScrolled] = useState<true | undefined>();
  const prevScrollY = useRef(0);

  useEffect(() => {
    const controller = new AbortController();

    const scrollHandler = () => {
      const scrollY = window.scrollY;
      const scrolledDown = scrollY > prevScrollY.current;
      if (scrolledDown) {
        setScrolled(true);
      } else {
        setScrolled(undefined);
      }
      prevScrollY.current = scrollY;
    };

    window.addEventListener("scroll", scrollHandler, { signal: controller.signal });

    return controller.abort;
  }, []);

  return (
    <header
      data-scrolled={scrolled}
      className="py-4 md:px-12 data-scrolled:-translate-y-full bg-hero-background/85 fixed z-top top-0 w-full backdrop-blur-lg duration-300"
    >
      <div className="max-w-wrapper mx-auto flex items-center">
        <Logo />
        <div className="not-lg:hidden flex gap-8 items-center ml-8">
          <Separator />
          <ThemeToggler />
        </div>
        <div className="flex ml-auto gap-3 md:gap-8">
          <Nav />
          <Button className="font-semibold not-lg:-order-1">Start a free trial</Button>
        </div>
      </div>
    </header>
  );
}

function Separator() {
  return (
    <span
      aria-hidden
      className="inline-block w-3 h-1 mt-1 bg-hero-foreground rounded-full decoration-only"
    ></span>
  );
}
