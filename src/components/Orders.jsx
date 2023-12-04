import { Box, Button, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { BsArrowLeftShort } from "react-icons/bs";
import { theme } from "../layouts/theme/theme";

const Orders = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#FCFCFC", pb:"4rem" }}>
        <Typography
          sx={{
            fontSize: "26px",
            textAlign: "center",
            color: "#1A1A1A",
            pt: "6rem",
          }}
        >
          آماده انجام هر نوع{" "}
          <span style={{ fontWeight: "lighter" }}>سفارش</span> هستیم.
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            textAlign: "center",
            color: "#9A9A9A",
            mt: "10px",
          }}
        >
          ما با مجرب ترین پیمانکاران آماده انجام سفارشات شما در کمترین زمان و با
          بهترین کیفیت ممکن هستیم.
        </Typography>
        <Box
          sx={{
            px: "2rem",
            mt: "3rem",
            [theme.breakpoints.down("md")]: {
              ".btnMd": { mt: "2rem" },
            },
            [theme.breakpoints.down("768")]: {
              ".btnMd768": { textAlign: "right" },
            },
            [theme.breakpoints.down("sm")]: {
              ".typo1": { fontSize: "18px" },
              ".typo2": { fontSize: "14px" },
              ".btnMd": { width: "100%" },
              ".padSm": { p: "15px", m: "0px 10px 10px 0px " },
              ".gridSm": { px: 0 },
              px: "0.5rem",
            },
          }}
        >
          <Grid container>
            <Grid className="gridSm" xs={6} sm={6} md={6} lg={3} sx={{ px: 2 }}>
              <Box
                className="padSm"
                sx={{
                  backgroundColor: "#FFF",
                  p: "2.5rem 3rem",
                  border: "1px solid #EBEBEB",
                  borderRadius: "20px",
                }}
              >
                <Typography
                  className="typo1"
                  sx={{ fontSize: "19px", color: "#212529", mb: "0.5rem" }}
                >
                  سفارش تایپ
                </Typography>
                <Typography
                  className="typo2"
                  sx={{
                    fontSize: "15px",
                    color: "#9A9A9A",
                    mt: "15px",
                    mb: "1rem",
                  }}
                >
                  تایپ متون فارسی، عربی، انگلیسی و فایل های صوتی با بهترین کیفیت
                </Typography>
                <Box className="btnMd768">
                  <Link href="سفارش ">
                    <Button
                      className="btnMd"
                      disableRipple
                      sx={{
                        backgroundColor: "#EFF0FD",
                        color: "#6B69EA",
                        p: "5px 10px",
                        borderRadius: "7px",
                        mt: "5rem",
                        ":hover": {
                          color: "#212529",
                          backgroundColor: "#EFF0FD",
                        },
                      }}
                    >
                      <Typography> سفارش</Typography>
                      <BsArrowLeftShort
                        style={{ fontSize: "22px", marginRight: "5px" }}
                      />
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid className="gridSm" xs={6} sm={6} md={6} lg={3} sx={{ px: 2 }}>
              <Box
                className="padSm"
                sx={{
                  backgroundColor: "#FFF",
                  p: "2.5rem 3rem",
                  border: "1px solid #EBEBEB",
                  borderRadius: "20px",
                }}
              >
                <Typography
                  className="typo1"
                  sx={{ fontSize: "19px", color: "#212529", mb: "0.5rem" }}
                >
                  سفارش ترجمه
                </Typography>
                <Typography
                  className="typo2"
                  sx={{
                    fontSize: "15px",
                    color: "#9A9A9A",
                    mt: "15px",
                    mb: "1rem",
                  }}
                >
                  ترجمه متون عمومی و تخصصی کلیه رشته ها توسط متخصص مجرب
                </Typography>
                <Box className="btnMd768">
                  <Link href="سفارش ">
                    <Button
                      className="btnMd"
                      disableRipple
                      sx={{
                        backgroundColor: "#EFF0FD",
                        color: "#6B69EA",
                        p: "5px 10px",
                        borderRadius: "7px",
                        mt: "5rem",
                        ":hover": {
                          color: "#212529",
                          backgroundColor: "#EFF0FD",
                        },
                      }}
                    >
                      <Typography> سفارش</Typography>
                      <BsArrowLeftShort
                        style={{ fontSize: "22px", marginRight: "5px" }}
                      />
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid className="gridSm" xs={6} sm={6} md={6} lg={3} sx={{ px: 2 }}>
              <Box
                className="padSm"
                sx={{
                  backgroundColor: "#FFF",
                  p: "2.5rem 3rem",
                  border: "1px solid #EBEBEB",
                  borderRadius: "20px",
                }}
              >
                <Typography
                  className="typo1"
                  sx={{ fontSize: "19px", color: "#212529", mb: "0.5rem" }}
                >
                  سفارش ویراستاری
                </Typography>
                <Typography
                  className="typo2"
                  sx={{
                    fontSize: "15px",
                    color: "#9A9A9A",
                    mt: "15px",
                    mb: "1rem",
                  }}
                >
                  ویراستاری فنی، ساختاری، صفحه آرایی و تنظیم فرمت پایان نامه
                  دانشگاه
                </Typography>
                <Box className="btnMd768">
                  <Link href="سفارش ">
                    <Button
                      className="btnMd"
                      disableRipple
                      sx={{
                        backgroundColor: "#EFF0FD",
                        color: "#6B69EA",
                        p: "5px 10px",
                        borderRadius: "7px",
                        mt: "5rem",
                        ":hover": {
                          color: "#212529",
                          backgroundColor: "#EFF0FD",
                        },
                      }}
                    >
                      <Typography> سفارش</Typography>
                      <BsArrowLeftShort
                        style={{ fontSize: "22px", marginRight: "5px" }}
                      />
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid className="gridSm" xs={6} sm={6} md={6} lg={3} sx={{ px: 2 }}>
              <Box
                className="padSm"
                sx={{
                  backgroundColor: "#FFF",
                  p: "2.5rem 3rem",
                  border: "1px solid #EBEBEB",
                  borderRadius: "20px",
                }}
              >
                <Typography
                  className="typo1"
                  sx={{ fontSize: "19px", color: "#212529", mb: "0.5rem" }}
                >
                  سفارش پاورپوینت
                </Typography>
                <Typography
                  className="typo2"
                  sx={{
                    fontSize: "15px",
                    color: "#9A9A9A",
                    mt: "15px",
                    mb: "1rem",
                  }}
                >
                  ساخت پاورپوینت ویژه ارائه دانشگاهی و جلسات با جدیدترین افکت ها
                </Typography>
                <Box className="btnMd768">
                  <Link href="سفارش ">
                    <Button
                      className="btnMd"
                      disableRipple
                      sx={{
                        backgroundColor: "#EFF0FD",
                        color: "#6B69EA",
                        p: "5px 10px",
                        borderRadius: "7px",
                        mt: "5rem",
                        ":hover": {
                          color: "#212529",
                          backgroundColor: "#EFF0FD",
                        },
                      }}
                    >
                      <Typography> سفارش</Typography>
                      <BsArrowLeftShort
                        style={{ fontSize: "22px", marginRight: "5px" }}
                      />
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Orders;
