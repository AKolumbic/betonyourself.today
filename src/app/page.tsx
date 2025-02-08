"use client";

import { motion } from "framer-motion";
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
  const { translateX, translateY, blurAmount } = useParallaxMotion();

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
        style={textContainerStyle}
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
