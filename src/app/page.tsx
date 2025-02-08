"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  containerStyle,
  videoWrapperStyle,
  overlayStyle,
  textContainerStyle,
  headingStyle,
  subHeadingStyle,
} from "@/styles/homeStyles";

import { useParallaxMotion } from "@/utils/motionUtils";

export default function Home() {
  // Use Parallax Hook
  const { mouseX, mouseY, translateX, translateY, blurAmount } =
    useParallaxMotion();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <main className="font-racing" style={containerStyle}>
      {/* Background Video */}
      <motion.div style={videoWrapperStyle}>
        <video
          src="/home_loop.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div style={overlayStyle} />

      {/* Centered Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          ...textContainerStyle,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        {/* Main Heading (Racing Sans One) */}
        <motion.h1
          style={{
            ...headingStyle,
            x: translateX,
            y: translateY,
            filter: blurAmount,
          }}
        >
          Bet on Yourself!
        </motion.h1>

        {/* Subheading (Nothing You Could Do - Handwritten) */}
        <motion.p
          className="font-handwritten"
          style={{
            ...subHeadingStyle,
            x: translateX,
            y: translateY,
            filter: blurAmount,
          }}
        >
          Coming soon to iOS & Android
        </motion.p>
      </motion.div>
    </main>
  );
}
