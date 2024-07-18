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
