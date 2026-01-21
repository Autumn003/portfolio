"use client";

import { useRef, useCallback } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export function AnimatedThemeToggler({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const isDark = resolvedTheme === "dark";

  const toggleTheme = useCallback(() => {
    if (!buttonRef.current) return;

    const run = () => {
      flushSync(() => {
        setTheme(isDark ? "light" : "dark");
      });
    };

    // ✅ fallback for unsupported browsers
    if (!document.startViewTransition) {
      run();
      return;
    }

    const transition = document.startViewTransition(run);

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();

    const x = left + width / 2;
    const y = top + height / 2;

    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    );

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 400,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  }, [isDark, setTheme]);

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn("cursor-pointer", className)}
    >
      {isDark ? <IconSun /> : <IconMoon />}
    </button>
  );
}
