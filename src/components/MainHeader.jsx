import { Box, Card, Typography, useMediaQuery } from "@mui/material";
import "../../public/css/style.css";
import { theme } from "../layouts/theme/theme";
import PulseButtonHeader from "./PulseButtonHeader";
import IconCountUpHeader from "./IconCountUpHeader";
import DividerCountUpHeader from "./DividerCountUpHeader";
const MainHeader = () => {
  const btn = useMediaQuery(theme.breakpoints.down("940"));
  const resCountup = useMediaQuery(theme.breakpoints.down("940"));

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FCFCFC",

          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          [theme.breakpoints.down("940")]: {
            ".Card": {
              display: "none",
            },
            ".dot": {
              display: "none",
            },
            ".box1": {
              width: "100%",
              justifyContent: "space-around",
              // py: 7,
              position: "relative",
              bottom: "3rem",
              border: "1px solid #E9E9E9",
              borderRadius: "5px",
            },
            ".box": {
              flexDirection: "column",
              alignItems: "center",
              fontSize: "15px",
            },
            ".typo": {
              color: "#31326f",
            },
            ".pulse": {
              // m: "0 auto",
              position: "inherit",
            },
          },
        }}
      >
        <Box sx={{ textAlign: "center", mt: 0 }}>
          <Typography sx={{ fontSize: 25, color: "#31326F" }}>
            تبدیل عکس و PDF به Word
          </Typography>
          <Typography sx={{ fontSize: 16, color: "grey", mt: 1 }}>
            فایلهای پی دی اف و عکس را آنلاین و بدون بهم ریختگی به ورد قابل
            ویرایش تبدیل کنید
          </Typography>
          {btn ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="caption"
                color="#444"
                sx={{ fontSize: "16px", mt: "4rem", mb: "1rem" }}
              >
                جهت آزمایش ميتوانيد 1 صفحه رايگان تبديل کنيد
              </Typography>
              <PulseButtonHeader />
            </Box>
          ) : (
            <>
              <Card
                className="Card"
                sx={{
                  position: "relative",
                  top: "2rem",
                  // right:"0rem",
                  display: "flex",
                  alignItems: "center",
                  // justifyContent: "space-between",
                  width: "30rem",
                  height: "4rem",
                  backgroundColor: "#fff",
                  // py: 5,
                  // px: 3,
                  boxShadow: "0px 5px 9px 0px rgb(240 240 240)",
                  // mr: 20,
                  borderRadius: 5,
                  // mt: "2rem",
                }}
              >
                <PulseButtonHeader />

                <Typography
                  variant="caption"
                  color="#bdc3c7"
                  sx={{ position: "absolute", right: "2rem" }}
                >
                  جهت آزمایش ميتوانيد 1 صفحه رايگان تبديل کنيد
                </Typography>
              </Card>
             
            </>
          )}
        </Box>
        {resCountup ? <DividerCountUpHeader /> : <IconCountUpHeader />}
      </Box>
    </>
  );
};

export default MainHeader;
