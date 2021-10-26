// - Framer Motion Variants
export const titleVariant = {
  hover: {
    scale: 1.2,
    originX: 0,
    transition: {
      type: "spring",
      stiffness: 150,
    },
  },
};
export const linkVariant = {
  initial: {
    opacity: 0,
    x: 7,
  },
  hover: {
    backgroundColor: "#f8dd42",
    textShadow: "0px 0px 8px rgb(225,225,225)",
    boxShadow: "0px 0px 8px rgb(225,225,225)",
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.4,
      ease: [0.5, 0.06, -0.01, 0.9],
    },
  },
};
export const authorVariant = {
  initial: {
    opacity: 0,
    x: 7,
  },
  hover: {
    scale: 1.1,
    originX: 0,
    textShadow: "0px 0px 10px #bebeba",
    transition: {
      duration: 0.1,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.4,
      ease: [0.5, 0.06, -0.01, 0.9],
    },
  },
};
