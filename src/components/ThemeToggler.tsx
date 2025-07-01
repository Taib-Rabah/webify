"use client";

import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "~/components/shadcn/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "~/components/shadcn/dropdown-menu";
import { upperFirst } from "~/lib/utils";

export type Theme = "light" | "dark" | "system";

const themes = ["light", "dark", "system"] as const satisfies Theme[];

export default function ThemeToggler() {
  const { setTheme, theme: currentTheme } = useTheme();

  const updateTheme = (newTheme: Theme) => () => setTheme(newTheme);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((theme) => (
          <DropdownMenuItem key={theme} onClick={updateTheme(theme)}>
            {upperFirst(theme)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
