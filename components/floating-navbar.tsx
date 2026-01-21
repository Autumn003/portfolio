"use client";

import { motion } from "motion/react";
import { useState, useMemo, useCallback, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { DATA } from "@/Content";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

// Shared spring config
const SPRING_CONFIG = {
  type: "spring",
  stiffness: 150,
  damping: 25,
  mass: 0.9,
} as const;

// Shared pill spring config (lighter damping)
const PILL_SPRING_CONFIG = {
  ...SPRING_CONFIG,
  damping: 10,
} as const;

export default function FloatingNavbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [hoverState, setHoverState] = useState<
    "none" | "left" | "center" | "right"
  >("none");

  // Determine active tab based on current pathname
  // const active = useMemo(() => {
  //   const activeItem = DATA.navbar.find((item) => item.url === pathname);
  //   return activeItem ? activeItem.label : DATA.navbar[0].label;
  // }, [pathname]);

  const [active, setActive] = useState("Home");

  useEffect(() => {
    const updateHash = () => {
      const hash = window.location.hash || "#home";
      const activeItem = DATA.navbar.find((item) => item.url === hash);
      setActive(activeItem?.label ?? "Home");
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);

    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const handleNavClick = useCallback((url: string, label: string) => {
    setActive(label);
    window.history.pushState(null, "", url);
  }, []);

  // Left pill animations based on hover state
  const leftPillAnimation = useMemo(
    () => ({
      scaleX: hoverState === "none" ? 1.15 : 1,
      borderRadius:
        hoverState === "left" || hoverState === "center"
          ? "100px 100px 100px 100px"
          : hoverState === "right"
            ? "100px 0px 0px 100px"
            : "100px 0px 0px 100px",
    }),
    [hoverState],
  );

  // Right pill animations based on hover state
  const rightPillAnimation = useMemo(
    () => ({
      scaleX: hoverState === "none" ? 1.15 : 1,
      borderRadius:
        hoverState === "right" || hoverState === "center"
          ? "100px 100px 100px 100px"
          : hoverState === "left"
            ? "0px 100px 100px 0px"
            : "0px 100px 100px 0px",
    }),
    [hoverState],
  );

  // Center animations based on hover state
  const centerAnimation = useMemo(
    () => ({
      x: hoverState === "left" ? 10 : hoverState === "right" ? -10 : 0,
      scaleX: hoverState === "none" ? 1.05 : 1,
      borderRadius:
        hoverState === "left"
          ? "50px 0px 0px 50px"
          : hoverState === "right"
            ? "0px 50px 50px 0px"
            : hoverState === "center"
              ? "50px 50px 50px 50px"
              : "0px 0px 0px 0px",
      paddingLeft: hoverState !== "none" ? 24 : 20,
      paddingRight: hoverState !== "none" ? 24 : 20,
      marginLeft: hoverState === "right" ? 0 : hoverState !== "none" ? 8 : 0,
      marginRight: hoverState === "left" ? 0 : hoverState !== "none" ? 8 : 0,
    }),
    [hoverState],
  );

  // Memoize callbacks
  const handleLeftEnter = useCallback(() => setHoverState("left"), []);
  const handleCenterEnter = useCallback(() => setHoverState("center"), []);
  const handleRightEnter = useCallback(() => setHoverState("right"), []);
  const handleMouseLeave = useCallback(() => setHoverState("none"), []);

  return (
    <div className="flex justify-center items-center fixed inset-x-0 bottom-0 z-100 mx-auto mb-4 origin-bottom h-full max-h-14">
      <motion.div
        initial={{
          y: 50,
          opacity: 0,
          filter: "blur(10px)",
        }}
        animate={{
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay: 0.2,
        }}
        className="relative flex items-center"
        onMouseLeave={handleMouseLeave}
      >
        {/* LEFT DETACHED PILL */}
        <motion.div
          onMouseEnter={handleLeftEnter}
          initial={{ scaleX: 1.15, borderRadius: "100px 0px 0px 100px" }}
          animate={leftPillAnimation}
          transition={PILL_SPRING_CONFIG}
          className="flex items-center bg-neutral-200 dark:bg-neutral-900 z-10 h-14 px-1 dark:text-neutral-400 text-neutral-500 hover:dark:text-white hover:text-neutral-800 transition-colors duration-300 cursor-pointer whitespace-nowrap"
        >
          <motion.div
            initial={{ scaleX: 1 / 1.15 }}
            animate={{ scaleX: hoverState === "none" ? 1 / 1.15 : 1 }}
            transition={PILL_SPRING_CONFIG}
            className="flex items-center gap-2"
          >
            <AnimatedThemeToggler className="p-3" />
          </motion.div>
        </motion.div>

        {/* CENTER NAVBAR */}
        <motion.div
          onMouseEnter={handleCenterEnter}
          initial={{
            x: 0,
            scaleX: 1.05,
            borderRadius: "0px 0px 0px 0px",
            paddingLeft: 20,
            paddingRight: 20,
            marginLeft: 0,
            marginRight: 0,
          }}
          animate={centerAnimation}
          transition={SPRING_CONFIG}
          className="flex items-center gap-2 bg-neutral-200 dark:bg-neutral-900 h-14 px-5"
        >
          {DATA.navbar.map((item) => (
            <NavItem
              key={item.label}
              item={item}
              isActive={active === item.label}
              onClick={() => handleNavClick(item.url, item.label)}
            />
          ))}
        </motion.div>

        {/* RIGHT DETACHED PILL - Theme Toggle */}
        <motion.a
          href="#contacts"
          onMouseEnter={handleRightEnter}
          initial={{ scaleX: 1.15, borderRadius: "0px 100px 100px 0px" }}
          animate={rightPillAnimation}
          transition={PILL_SPRING_CONFIG}
          className="flex items-center bg-neutral-200 dark:bg-neutral-900 z-10 h-14 px-2 dark:text-neutral-400 text-neutral-500 hover:dark:text-white hover:text-neutral-800 transition-colors duration-300 cursor-pointer whitespace-nowrap"
        >
          <motion.div
            initial={{ scaleX: 1 / 1.15 }}
            animate={{ scaleX: hoverState === "none" ? 1 / 1.15 : 1 }}
            transition={PILL_SPRING_CONFIG}
            className="flex items-center justify-center border rounded-full px-1 py-1 border-neutral-300 dark:border-neutral-600 overflow-hidden"
          >
            <motion.div
              animate={{
                width:
                  hoverState === "none" || hoverState === "right" ? "auto" : 0,
                opacity:
                  hoverState === "none" || hoverState === "right" ? 1 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 25,
                mass: 0.9,
              }}
              className="overflow-hidden"
            >
              <div className="text-sm font-medium px-1 whitespace-nowrap hidden sm:block">
                Contact Me
              </div>
            </motion.div>

            <Image
              src="/me1.png"
              alt="Hemant"
              width={30}
              height={30}
              className="rounded-full shrink-0 bg-neutral-800"
            />
          </motion.div>
        </motion.a>
      </motion.div>
    </div>
  );
}

// Extracted NavItem component to prevent unnecessary re-renders
const NavItem = ({ item, isActive, onClick }: any) => {
  return (
    <Link
      href={item.url}
      onClick={onClick}
      className="relative px-2 py-2 text-sm font-medium w-full"
    >
      {isActive && (
        <motion.span
          layoutId="active-pill"
          className="absolute inset-0 w-full bg-linear-to-r from-neutral-300/20 to-neutral-200/20 dark:from-neutral-600/20 dark:to-neutral-500/20 shadow-lg inset-shadow-sm dark:inset-shadow-neutral-400 inset-shadow-neutral-50 rounded-full backdrop-blur-sm shadow-neutral-400/40 dark:shadow-neutral-600/40"
          transition={{
            type: "spring",
            stiffness: 160,
            damping: 17,
            mass: 0.9,
          }}
        />
      )}
      <span
        className={cn(
          "relative z-10 flex items-center justify-center gap-1",
          isActive
            ? "dark:text-white text-neutral-800"
            : "dark:text-neutral-400 text-neutral-500 hover:dark:text-white hover:text-neutral-800 transition-all duration-300",
        )}
      >
        <item.icon className="size-4" />
        <div className="hidden sm:block">{item.label}</div>
      </span>
    </Link>
  );
};
