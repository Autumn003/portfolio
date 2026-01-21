"use client";

import Image from "next/image";
import BlurFadeText from "./magicui/blur-fade-text";
import { DATA } from "@/Content";
import { Ring } from "./ring";
import { useTheme } from "next-themes";
import { useRef } from "react";
import { AnimatedBeam } from "./animated-beam";
import { Badge } from "./ui/badge";

const BLUR_FADE_DELAY = 0.04;

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ParentRef = useRef<HTMLDivElement>(null);
  const rightChild1Ref = useRef<HTMLDivElement>(null);
  const rightChild2Ref = useRef<HTMLDivElement>(null);
  const rightChild3Ref = useRef<HTMLDivElement>(null);
  const rightChild4Ref = useRef<HTMLDivElement>(null);
  const rightChild5Ref = useRef<HTMLDivElement>(null);
  const rightChild6Ref = useRef<HTMLDivElement>(null);

  const { theme } = useTheme();
  const heroImage = theme === "dark" ? "/me1.png" : "/me.png";
  return (
    <div className="">
      <section
        ref={containerRef}
        id="hero"
        className="relative w-full h-full flex flex-col justify-center items-center md:h-screen overflow-hidden"
      >
        <div className="flex w-full h-full min-h-64 justify-center items-center md:scale-90">
          <div
            className="absolute h-64 sm:h-80 md:h-96 lg:h-125 aspect-square z-40 flex justify-center items-center rounded-t-full"
            style={{
              background:
                "radial-gradient(circle, rgba(0, 0, 0, 0.1) 0%, var(--color-background) 67%, var(--color-background) 100%)",
            }}
          ></div>
          <Ring />
          <div ref={ParentRef} className="absolute">
            <div className="relative z-30">
              <Image
                src="/me1.png"
                height={500}
                width={500}
                alt="hero"
                className="z-10 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-110 lg:h-110"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto z-100 w-full max-w-2xl space-b-8 md:-translate-y-20">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 items-center space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="max-w-150 md:text-xl text-center"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="md:block hidden">
        {/* Right side badges */}
        <div
          ref={rightChild1Ref}
          className="absolute top-8 right-12 sm:top-12 sm:right-20 md:top-16 md:right-32 lg:top-20 lg:right-60 z-50"
        >
          <Badge>Backend</Badge>
        </div>
        <div
          ref={rightChild2Ref}
          className="absolute top-32 right-8 sm:top-40 sm:right-12 md:top-52 md:right-20 lg:top-64 lg:right-40 z-50"
        >
          <Badge>DevOps</Badge>
        </div>
        <div
          ref={rightChild3Ref}
          className="absolute bottom-16 right-16 sm:bottom-20 sm:right-24 md:bottom-28 md:right-40 lg:bottom-50 lg:right-80 z-50"
        >
          <Badge>System Design</Badge>
        </div>

        {/* Left side badges */}
        <div
          ref={rightChild4Ref}
          className="absolute top-8 left-12 sm:top-12 sm:left-20 md:top-16 md:left-32 lg:top-20 lg:left-60 z-50"
        >
          <Badge>Frontend</Badge>
        </div>
        <div
          ref={rightChild5Ref}
          className="absolute top-32 left-8 sm:top-40 sm:left-12 md:top-52 md:left-20 lg:top-64 lg:left-40 z-50"
        >
          <Badge>UI/UX</Badge>
        </div>
        <div
          ref={rightChild6Ref}
          className="absolute bottom-16 left-16 sm:bottom-20 sm:left-24 md:bottom-28 md:left-40 lg:bottom-50 lg:left-80 z-50"
        >
          <Badge>Database</Badge>
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={ParentRef}
          toRef={rightChild1Ref}
          duration={6}
          delay={1}
          bendRadius={30}
          startYOffset={-100}
          startXOffset={200}
          bend={"horizontal"}
          className="z-30"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={ParentRef}
          toRef={rightChild2Ref}
          duration={8}
          delay={1.5}
          startYOffset={-30}
          startXOffset={200}
          className="z-30"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={ParentRef}
          toRef={rightChild3Ref}
          duration={7}
          delay={2}
          bendRadius={30}
          startYOffset={60}
          startXOffset={200}
          bend={"horizontal"}
          className="z-30"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={ParentRef}
          toRef={rightChild4Ref}
          duration={6}
          delay={1.5}
          bendRadius={30}
          startYOffset={-100}
          startXOffset={-200}
          bend={"horizontal"}
          className="z-30"
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={ParentRef}
          toRef={rightChild5Ref}
          duration={8}
          delay={1}
          startYOffset={-30}
          startXOffset={-200}
          className="z-30"
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={ParentRef}
          toRef={rightChild6Ref}
          duration={6}
          delay={2}
          bendRadius={30}
          startYOffset={60}
          startXOffset={-200}
          bend={"horizontal"}
          className="z-30"
          reverse
        />
      </div>
    </div>
  );
};
