export const modalAnimation = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: "100%",
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

export const buttonAnimation = {
  hidden: { width: "30px" },
  visible: { width: "180px", transition: { duration: 0.3, ease: "easeOut" } },
};

export const iconAnimation = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};
