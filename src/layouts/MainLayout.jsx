import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { theme } from "./theme/theme";

const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayout = ({children}) => {
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>کافی نت آنلاین</title>
          </Helmet>
          {/* Grid System */}
          {children}
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MainLayout;
