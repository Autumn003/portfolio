"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const VerticalCard = ({
  skills,
  className,
}: {
  skills: any;
  className: string;
}) => {
  return (
    <motion.div
      className={cn(
        "relative w-full overflow-hidden rounded-3xl p-4",
        className
      )}
      style={{
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
      }}
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        rest: {
          scale: 1,
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
        },
        hover: {
          scale: 1.03,
          boxShadow: "0 12px 40px 0 rgba(0, 0, 0, 0.15)",
        },
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {/* blur for glass effect */}
      <motion.div
        className="absolute inset-0 z-10 bg-neutral-400"
        style={{
          filter: "blur(12px)",
        }}
        variants={{
          rest: {
            scale: 1,
            opacity: 0.15,
          },
          hover: {
            scale: 1.1,
            opacity: 0.2,
          },
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      />
      <h2 className="sm:text-3xl text-2xl font-semibold text-neutral-400 drop-shadow-lg mb-2">
        Skills
      </h2>
      <div>
        {skills.map((userSkill: any) => (
          <div className=" my-2">
            <h3 className="sm:text-xl text-lg font-semibold drop-shadow-md dark:text-neutral-300 text-neutral-500">
              {userSkill.title}
            </h3>
            <div className="flex flex-wrap gap-1">
              {userSkill.skills.map((skill: string) => (
                <div className="text-sm bg-neutral-500/10 backdrop-blur-lg w-fit px-1.5 py-0.5 rounded-lg text-neutral-500 drop-shadow-md dark:text-neutral-300 my-1 shadow-md">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
