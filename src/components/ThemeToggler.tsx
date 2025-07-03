"use client";

import { Check, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "~/components/shadcn/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/shadcn/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/shadcn/tooltip";
import { upperFirst } from "~/lib/utils";

export type Theme = "light" | "dark" | "system";

const themes = ["light", "dark", "system"] as const satisfies Theme[];

export default function ThemeToggler({ className }: { className?: string }) {
  const { setTheme, theme: currentTheme } = useTheme();

  const updateTheme = (newTheme: Theme) => () => setTheme(newTheme);

  return (
    <DropdownMenu>
      <Trigger className={className} />
      <DropdownMenuContent align="start" className="z-top">
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme}
            onClick={updateTheme(theme)}
            className="flex items-center justify-between cursor-pointer"
          >
            <span>{upperFirst(theme)}</span>
            {theme === currentTheme ? <Check /> : null}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function Trigger({ className }: { className?: string }) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={200} disableHoverableContent>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className={className}>
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent className="z-top text-[14px]">Change theme</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
