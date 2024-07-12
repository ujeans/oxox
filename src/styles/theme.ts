const colors = {
  white: "#fff",
  gray50: "#EBEBF5",
  gray100: "rgba(235, 235, 245, 0.6)",
  gray200: "#9A9DAC",
  gray300: "rgba(154, 157, 172, 0.6)",
  gray400: "#010618",
  gray500: "#020618",
  blue50: "#c6ddff",
  blue100: "c6cdf1",
  blue200: "#a0c2f4",
  blue300: "#97aece",
  blue400: "#4F90F0",
  blue500: "#536eff",
  blue600: "#21283f",
  red50: "#f9cccc",
  red100: "#fe7171",
  red200: "#ee4344",
  red300: "rgba(129, 36, 36, 0.75)",
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
