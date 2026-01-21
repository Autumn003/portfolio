"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Laptop } from "./laptop";
import { ProjectCard } from "./project-card";
import BlurFade from "./magicui/blur-fade";
import { DATA } from "@/Content";

export const Projects = () => {
  const [isLaptopHovered, setIsLaptopHovered] = useState(false);
  const content = DATA.projects;
  const [activeCard, setActiveCard] = React.useState(0);
  const [height, setHeight] = useState(0);
  const containerRef = useRef<any>(null);
  const ref = useRef<any>(null);

  // Changed: Use container as the scroll container instead of target
  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start start", "end end"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  // Get the active project's content and determine its type
  const activeProject = content[activeCard];

  // Check for content in priority order: node, video, image
  const getActiveContent = () => {
    if (activeProject?.node) {
      return activeProject.node; // Already a React node
    }
    if (activeProject?.video) {
      return (
        <video
          src={activeProject.video}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      );
    }
    if (activeProject?.image) {
      return (
        <img
          src={activeProject.image}
          alt={activeProject.title}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      );
    }
    return null;
  };

  const activeContent = getActiveContent();

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  return (
    <motion.div
      ref={containerRef}
      className="h-131 no-scrollbar overflow-y-auto pt-10"
    >
      <div className="max-w-5xl flex relative justify-center space-x-10 w-full mx-auto px-4 md:px-6 lg:px-8">
        <div className="w-full relative flex items-start ">
          <div ref={ref} className="flex flex-col gap-30">
            {content.map((project, index) => (
              <div key={index} className="flex justify-start md:gap-10">
                <div className="sticky flex flex-row z-40 items-center top-0 self-start ">
                  <div className="h-5 absolute left-0 top-1 w-5 rounded-full bg-foreground/10 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-foreground border border-neutral-300 dark:border-neutral-700 " />
                  </div>
                </div>
                <BlurFade key={project.title} delay={0.04 * 12 + index * 0.05}>
                  <ProjectCard
                    index={index}
                    activeCard={activeCard}
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    links={project.links}
                    className="pl-10 md:pl-0"
                  />
                </BlurFade>
              </div>
            ))}
            <div
              style={{
                height: height + "px",
              }}
              className="absolute left-2.5 top-0 overflow-hidden w-px bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 dark:via-neutral-700 to-transparent to-99% mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
            >
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0 w-px bg-linear-to-t from-foreground via-gray-400 to-transparent from-0% via-10% rounded-full"
              />
            </div>
          </div>
        </div>
        <motion.div
          onHoverStart={() => setIsLaptopHovered(true)}
          onHoverEnd={() => setIsLaptopHovered(false)}
          animate={{
            scale: isLaptopHovered ? 1.15 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 160,
            damping: 18,
          }}
          className={cn(
            "sticky -top-10 hidden h-130 w-full overflow-hidden rounded-md lg:block z-50",
          )}
        >
          <Laptop content={activeContent} />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLaptopHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-xs",
          isLaptopHovered ? "pointer-events-auto" : "pointer-events-none",
        )}
      />
    </motion.div>
  );
};
