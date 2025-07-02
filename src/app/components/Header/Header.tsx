"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "~/app/components/Header/Logo";
import Nav from "~/app/components/Header/Nav";
import { Button } from "~/components/shadcn/button";
import ThemeToggler from "~/components/ThemeToggler";

export default function Header() {
  const [scrolled, setScrolled] = useState<true | undefined>();
  const prevScrollY = useRef(0);

  useEffect(() => {
    const controller = new AbortController();

    const scrollHandler = (ev: Event) => {
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
      className="py-4 data-scrolled:-translate-y-full bg-hero-background fixed top-0 w-full backdrop-blur-lg duration-300"
    >
      <div className="max-w-wrapper mx-auto flex items-center">
        <div className="flex items-center gap-6">
          <Logo />
          <span aria-hidden className="w-3 h-1 mt-1 bg-hero-foreground rounded-full decoration-only"></span>
          <ThemeToggler />
        </div>
        <Nav />
        <Button className="ml-8 font-semibold">Start a free trial</Button>
      </div>
    </header>
  );
}
