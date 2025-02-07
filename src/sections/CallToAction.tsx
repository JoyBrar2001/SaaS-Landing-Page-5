"use client";

import { useEffect, useRef, useState } from "react";

import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";

export default function CallToAction() {
  const [scope, animate] = useAnimate();
  const animation = useRef<AnimationPlaybackControls>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: ["0%", "-50%"] },
      {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      });
  }, []);

  useEffect(() => {
    if (animation.current) {
      if (isHovered) {
        animation.current.speed = 0.5;
      } else {
        animation.current.speed = 1;
      }
    }
  }, [isHovered]);

  return (
    <section className="py-24">
      <div className="overflow-x-clip p-4 flex">
        <motion.div
          ref={scope}
          className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium group cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-lime-400 text-7xl font-medium">
                &#10038;
              </span>

              <span className="text-7xl md:text-8xl font-medium text-nowrap group-hover:text-lime-400 transition-colors duration-300">
                Try it for free
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}