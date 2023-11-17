import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: "#00ADB5",
    },
    secondary: {
      main: "#393E46",
    },
    text: {
      primary: "#222831",
    },
    background: {
      default: "#EEEEEE",
    },
  },
  typography: {
    fontFamily: "YekanBakh,vazir, Tanha, roboto",
  },
  Link: {
    fontFamily: "YekanBakh,vazir, Tanha, roboto",
  },
  breackpoints: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
});
