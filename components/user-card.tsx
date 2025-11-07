"use client";

import { motion } from "motion/react";

export const UserCard = ({ userInfo }: { userInfo: any }) => {
  return (
    <>
      <motion.div
        className="relative flex w-full items-start justify-center overflow-hidden rounded-3xl"
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

        <div className="z-20">
          <motion.img
            src="/me.jpg"
            alt="User Image"
            className=" aspect-square w-72 rounded-4xl object-cover p-5"
            fetchPriority="high"
            variants={{
              rest: {
                scale: 1,
              },
              hover: {
                scale: 0.96,
              },
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 0.08,
            }}
          />
        </div>
        <div className="relative z-10 mx-2 h-20 w-full py-5">
          <motion.h2
            className="sm:text-4xl text-2xl font-semibold text-neutral-400 drop-shadow-lg"
            variants={{
              rest: {
                scale: 1,
              },
              hover: {
                scale: 1.02,
              },
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 15,
            }}
          >
            Hi! I'm {userInfo.name}
          </motion.h2>
          <motion.p
            className="text-xs bg-neutral-500/10 backdrop-blur-lg w-fit px-1.5 py-0.5 rounded-full text-neutral-500 drop-shadow-md dark:text-neutral-300 my-2 shadow-md"
            variants={{
              rest: {
                scale: 1,
              },
              hover: {
                scale: 0.98,
              },
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 15,
            }}
          >
            {userInfo.role}
          </motion.p>
          <motion.p
            className="line-clamp-4 text-[15px] text-neutral-500 drop-shadow-md dark:text-neutral-400"
            variants={{
              rest: {
                scale: 1,
              },
              hover: {
                scale: 0.98,
              },
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 15,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            repellendus dolorum labore officia laborum rem eligendi non
            obcaecati distinctio laboriosam magnam, maiores nisi, architecto
            autem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
            consequatur ducimus eveniet, eaque laudantium aperiam Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quam, voluptates. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Consectetur,
            ea.?
          </motion.p>
        </div>
      </motion.div>
    </>
  );
};
