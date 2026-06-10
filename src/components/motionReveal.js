export const revealEase = [0.16, 1, 0.3, 1];

export const revealViewport = {
  once: false,
  amount: 0.12,
  margin: "0px 0px -50px 0px",
};

export const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.06,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: revealEase },
  },
};

export const sectionReveal = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: revealEase },
  },
};

export const fadeUpReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: revealEase },
  }),
};

export const fadeLeftReveal = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: revealEase },
  },
};

export const cardReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: revealEase },
  }),
};

export const scaleReveal = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, delay, ease: revealEase },
  }),
};
