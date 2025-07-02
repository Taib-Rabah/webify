import Logo from "~/app/components/Header/Logo";
import Nav from "~/app/components/Header/Nav";
import { Button } from "~/components/shadcn/button";
import ThemeToggler from "~/components/ThemeToggler";

export default function Header() {
  return (
    <header className="flex items-center mt-3">
      <div className="flex items-center gap-6">
        <Logo />
        <span aria-hidden className="w-3 h-1 mt-1 bg-foreground rounded-full decoration-only"></span>
        <ThemeToggler />
      </div>
      <Nav />
      <Button className="mx-8 font-semibold">Start a free trial</Button>
    </header>
  );
}
