const colors = {
  white: "#FFFFFF",
  gray50: "rgba(235, 235, 245, 0.6)",
  gray100: "#EBEBF5",
  gray200: "rgba(154, 157, 172, 0.6)",
  gray300: "#9A9DAC",
  gray400: "#222222",
  gray500: "#1A1A1A",
  green50: "#B8F4E0",
  green100: "#88BEAC",
  green200: "#00CC88",
  green300: "#029161",
  red50: "#EE4344",
  red100: "rgba(129, 36, 36, 0.75)",
  pink50: "#FFD9E5",
  pink100: "#FF0055",
  blue50: "#C8E9FF",
  blue100: "#0099FF",
};

const typography = {
  headers: {
    h1: {
      fontFamily: "Inter",
      fontSize: "32px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
      letterSpacing: "-0.32px",
    },
    h2: {
      fontFamily: "Inter",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
    h3: {
      fontFamily: "Inter",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
    h4: {
      fontFamily: "Inter",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
      letterSpacing: "0.28px",
      textTransform: "uppercase",
    },
  },
  paragraphs: {
    default: {
      fontFamily: "Inter",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
    },
    large: {
      fontFamily: "Inter",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
    },
    bold: {
      fontFamily: "Inter",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
  },
  disclaimers: {
    default: {
      fontFamily: "Inter",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
    },
    bold: {
      fontFamily: "Inter",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
  },
};

export const theme = { colors, typography };
