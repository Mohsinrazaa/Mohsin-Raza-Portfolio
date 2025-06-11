"use client";
import React from "react";
import { motion } from "motion/react";


export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Array<{
    text: string;
    image: string;
    name: string;
    role: string;
  }>;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-10 font-myMainFont rounded-3xl border border-myPalette2 bg-white shadow-lg shadow-primary/10 max-w-xs w-full" key={i}>
                  <div className="font-normal text-myPalette8">{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-12 w-12 rounded-full border border-myPalette2 shadow-sm"
                    />
                    <div className="flex flex-col">
                      <div className="font-bold tracking-tight leading-5 text-myPalette9">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight text-myPalette9">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

;