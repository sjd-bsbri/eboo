import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { AiLearning, CoopIcon, Security, BrainTextare } from "../assets";
import { theme } from "../layouts/theme/theme";

const BrainDescriptions = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "linear-gradient(4deg, #f8f7fe 0%, #f8fcff 100%)",
          backgroundImage:
            "linear-gradient(4deg, rgb(248, 247, 254) 0%, rgb(248, 252, 255) 100%)",
          p: "5rem 2rem",
          [theme.breakpoints.down("md")]: {
            ".brain": { display: "none" },
            ".disBlock": { display: "block" },
            ".grid": { p: "0rem 5rem", m: "0 7rem" },
            ".typo": { mt: "25px" },
            ".img": { p: 0, textAlign: "left" },
          },
          [theme.breakpoints.down("768")]: {
            ".grid": { m: 0, p: "0rem 2rem" },
          },
          [theme.breakpoints.down("sm")]: {
            p: "3rem 0rem",
          },
        }}
      >
        <Grid container>
          <Grid
            className="grid"
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            sx={{ p: "0 15px" }}
          >
            <Grid container>
              <Box className="disBlock" sx={{ mt: "25px", display: "flex" }}>
                <Grid
                  className="img"
                  lg={3}
                  sx={{ p: "0 15px", textAlign: "center", minWidth: "25%" }}
                >
                  <img
                    src={AiLearning}
                    style={{ height: "60px", borderRadius: "0.25rem" }}
                  />
                </Grid>
                <Grid lg={9}>
                  <Typography
                    className="typo"
                    sx={{ fontSize: "17px", color: "#252525" }}
                  >
                    ما هر روز هوش مصنوعی را ارتقا می دهیم
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      mt: "5px",
                      color: "#212529",
                      m: "5px 0 20px",
                      lineHeight: "25px",
                    }}
                  >
                    متخصصین ما بطور روزانه فایلهای عکس و PDF را مورد بررسی قرار
                    داده و فونت ها و کلمات جدید را به هوش مصنوعی سرور آموزش می
                    دهند تا دقت سیستم در شناسایی کلمات افزایش یابد.
                  </Typography>
                </Grid>
              </Box>
              <Box className="disBlock" sx={{ mt: "25px", display: "flex" }}>
                <Grid
                  className="img"
                  lg={3}
                  sx={{ p: "0 15px", textAlign: "center", minWidth: "25%" }}
                >
                  <img
                    src={Security}
                    style={{ height: "60px", borderRadius: "0.25rem" }}
                  />
                </Grid>
                <Grid lg={9}>
                  <Typography
                    className="typo"
                    sx={{ fontSize: "17px", color: "#252525" }}
                  >
                    حفظ حریم شخصی اطلاعات
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      mt: "5px",
                      color: "#212529",
                      m: "5px 0 20px",
                      lineHeight: "25px",
                    }}
                  >
                    کلیه اطلاعات کاربران اعم از مشخصات و فایل ها، با امنیت فوق
                    العاده بالا کدگذاری و ذخیره می شود. کاربران قادرند بنا به
                    ضرورت فایل را از سرور حذف کنند.
                  </Typography>
                </Grid>
              </Box>
              <Box
                className="disBlock"
                sx={{ mt: "25px", display: "flex", alignItems: "center" }}
              >
                <Grid
                  className="img"
                  lg={3}
                  sx={{
                    p: "0 15px",
                    textAlign: "center",
                    alignItems: "center",
                    minWidth: "25%",
                  }}
                >
                  <img
                    src={CoopIcon}
                    style={{ width: "60px", borderRadius: "0.25rem" }}
                  />
                </Grid>
                <Grid lg={9}>
                  <Typography
                    className="typo"
                    sx={{ fontSize: "17px", color: "#252525" }}
                  >
                    ما آماده همکاری هستیم
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      mt: "5px",
                      color: "#212529",
                      m: "5px 0 20px",
                      lineHeight: "25px",
                    }}
                  >
                    تیم فنی ایبو همیشه آماده همکاری با اشخاص و سازمان ها در
                    راستای مکانیزه سازی بخش های سنتی با استفاده از هوش مصنوعی می
                    باشد. کافیست با ما تماس بگیرید!
                  </Typography>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Grid
            className="brain"
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            sx={{ textAlign: "right", p: "0 15px" }}
          >
            <img src={BrainTextare} style={{ borderRadius: "0.25rem" }} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BrainDescriptions;
// LOADING

{
  /* <>
<Typography textAlign="center"> 🌟این قسمت به زودی بارگذاری میشه ... انشاالله🌟 </Typography>
<Box className="loader"></Box>
</> */
}
