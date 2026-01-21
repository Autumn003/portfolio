"use client";

import { useRef } from "react";

import { AnimatedBeam } from "./animated-beam";

export function Beam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-full max-w-125 h-60 items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex size-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row justify-between">
          <div ref={div1Ref} className="absolute top-10 left-10">
            A
          </div>
          <div ref={div2Ref} className="absolute bottom-10 right-10">
            B
          </div>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        bendRadius={30}
        bend={"horizontal"}
      />
    </div>
  );
}
