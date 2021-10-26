// - Framer Motion Variants
export const containerVariants = {
  initial: {
    opacity: 0,
    y: -72,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.3, 0.04, -0.01, 0.8],
    },
  },
};
