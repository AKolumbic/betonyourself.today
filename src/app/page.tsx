"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main style={{ position: "relative", width: "100%", minHeight: "100vh" }}>
      {/* Background Video */}
      <video
        src="/home_loop.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      {/* Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5))",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Animated Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(90%, 400px)",
          padding: "1.5rem",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          zIndex: 2,
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
          Bet on Yourself
        </h1>
        <p style={{ marginBottom: "0.5rem" }}>
          Turn your goals into commitments.
        </p>
        <p>
          Double your money if you succeed. Coming soon on iOS &amp; Android.
        </p>
      </motion.div>
    </main>
  );
}
