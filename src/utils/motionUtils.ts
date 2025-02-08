import { useMotionValue, useTransform } from "framer-motion";

export function useParallaxMotion() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const translateX = useTransform(mouseX, [-1, 1], [-15, 15]);
  const translateY = useTransform(mouseY, [-1, 1], [-15, 15]);
  const blurAmount = useTransform(mouseX, [-1, 1], ["0px", "8px"]);

  return { mouseX, mouseY, translateX, translateY, blurAmount };
}
