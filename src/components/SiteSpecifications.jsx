import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
  BsFileEarmarkRichtextFill,
  BsFillChatDotsFill,
  BsFillCpuFill,
  BsFillCreditCardFill,
  BsFillEyeFill,
  BsFillStarFill,
} from "react-icons/bs";
import { theme } from "../layouts/theme/theme";
import CustomNumeralNumericFormat from "../helpers/PersianNumber";

const SiteSpecifications = () => {
  return (
    <Box
      sx={{
        backgroundColor: "linear-gradient(4deg, #f8f7fe 0%, #f8fcff 100%)",
        backgroundImage:
          "linear-gradient(4deg, rgb(248, 247, 254) 0%, rgb(248, 252, 255) 100%)",
        p: "5rem 5rem 2rem",
        [theme.breakpoints.down("md")]: {
          p: "5rem 0rem 2rem",
          ".typo1": { fontSize: "15px" },
        },
        [theme.breakpoints.down("sm")]: {
          ".box": { m: "0 0 80px", p: "0 15px" },
        },
      }}
    >
      <Grid container>
        <Grid xs={6} sm={6} md={4} lg={4} sx={{ px: 2, mb: 2 }}>
          <Box className="box" sx={{ width: "70%", m: "0 40px 80px" }}>
            <Box
              sx={{
                backgroundColor:
                  "linear-gradient(0deg, rgba(197,199,208,1) 0%, rgba(211,213,220,1) 100%)",
                backgroundImage:
                  "linear-gradient(0deg, rgb(197, 199, 208) 0%, rgb(211, 213, 220) 100%);",
                height: "48px",
                width: "48px",
                borderRadius: "12px",
                mb: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsFileEarmarkRichtextFill color="#FFF" fontSize="30px" />
            </Box>
            <Typography
              className="typo1"
              variant="body2"
              color="#5d647b"
              gutterBottom
            >
              حفظ ساختار
            </Typography>
            <Typography
              fontSize="14px"
              color="#797979"
              textAlign="left"
              sx={{ margin: "5px 0px 20px" }}
            >
              کلیه جداول، ستونها و تصاویر شناسایی و در فایل ورد ذخیره خواهد شد.
            </Typography>
          </Box>
        </Grid>

        <Grid xs={6} sm={6} md={4} lg={4} sx={{ px: 2, mb: 2 }}>
          <Box className="box" sx={{ width: "70%", m: "0 40px 80px" }}>
            <Box
              sx={{
                backgroundColor:
                  "linear-gradient(0deg, rgba(197,199,208,1) 0%, rgba(211,213,220,1) 100%)",
                backgroundImage:
                  "linear-gradient(0deg, rgb(197, 199, 208) 0%, rgb(211, 213, 220) 100%);",
                height: "48px",
                width: "48px",
                borderRadius: "12px",
                mb: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsFillEyeFill color="#FFF" fontSize="30px" />
            </Box>
            <Typography
              className="typo1"
              variant="body2"
              color="#5d647b"
              gutterBottom
            >
              <CustomNumeralNumericFormat
                value={99}
                style={{ fontSize: "0.9rem", fontFamily: "YekanBakh" }}
              />
              % دقت تشخیص
            </Typography>
            <Typography
              fontSize="14px"
              color="#797979"
              textAlign="left"
              sx={{ margin: "5px 0px 20px" }}
            >
              ما هر روز هوش مصنوعی سایت را آموزش داده و آنرا با فونت جدید به
              روزرسانی می کنیم.
            </Typography>
          </Box>
        </Grid>
        <Grid xs={6} sm={6} md={4} lg={4} sx={{ px: 2, mb: 2 }}>
          <Box className="box" sx={{ width: "70%", m: "0 40px 80px" }}>
            <Box
              sx={{
                backgroundColor:
                  "linear-gradient(0deg, rgba(197,199,208,1) 0%, rgba(211,213,220,1) 100%)",
                backgroundImage:
                  "linear-gradient(0deg, rgb(197, 199, 208) 0%, rgb(211, 213, 220) 100%);",
                height: "48px",
                width: "48px",
                borderRadius: "12px",
                mb: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsFillStarFill color="#FFF" fontSize="30px" />
            </Box>
            <Typography
              className="typo1"
              variant="body2"
              color="#5d647b"
              gutterBottom
            >
              تبدیل رایگان
            </Typography>
            <Typography
              fontSize="14px"
              color="#797979"
              textAlign="left"
              sx={{ margin: "5px 0px 20px" }}
            >
              برای اطمینان از صحت عملکرد میتوانید پس از انتخاب فایل یک صفحه
              رایگان تبدیل کنید.
            </Typography>
          </Box>
        </Grid>
        <Grid xs={6} sm={6} md={4} lg={4} sx={{ px: 2, mb: 2 }}>
          <Box className="box" sx={{ width: "70%", m: "0 40px 80px" }}>
            <Box
              sx={{
                backgroundColor:
                  "linear-gradient(0deg, rgba(197,199,208,1) 0%, rgba(211,213,220,1) 100%)",
                backgroundImage:
                  "linear-gradient(0deg, rgb(197, 199, 208) 0%, rgb(211, 213, 220) 100%);",
                height: "48px",
                width: "48px",
                borderRadius: "12px",
                mb: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsFillCpuFill color="#FFF" fontSize="30px" />
            </Box>
            <Typography
              className="typo1"
              variant="body2"
              color="#5d647b"
              gutterBottom
            >
              <CustomNumeralNumericFormat
                value={4}
                style={{ fontSize: "0.9rem", fontFamily: "YekanBakh" }}
              />
              {" "} روش هوشمند
            </Typography>
            <Typography
              fontSize="14px"
              color="#797979"
              textAlign="left"
              sx={{ margin: "5px 0px 20px" }}
            >
              
              بدلیل تفاوت در ساختار فایلها ما <CustomNumeralNumericFormat
                value={4}
                style={{ fontSize: "14px", fontFamily: "YekanBakh" }}
              /> روش تبدیل کاملا هوشمند در اختیار
              شما قرار می دهیم.
            </Typography>
          </Box>
        </Grid>
        <Grid xs={6} sm={6} md={4} lg={4} sx={{ px: 2, mb: 2 }}>
          <Box className="box" sx={{ width: "70%", m: "0 40px 80px" }}>
            <Box
              sx={{
                backgroundColor:
                  "linear-gradient(0deg, rgba(197,199,208,1) 0%, rgba(211,213,220,1) 100%)",
                backgroundImage:
                  "linear-gradient(0deg, rgb(197, 199, 208) 0%, rgb(211, 213, 220) 100%);",
                height: "48px",
                width: "48px",
                borderRadius: "12px",
                mb: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsFillCreditCardFill color="#FFF" fontSize="30px" />
            </Box>
            <Typography
              className="typo1"
              variant="body2"
              color="#5d647b"
              gutterBottom
            >
              ضمانت بازگشت وجه
            </Typography>
            <Typography
              fontSize="14px"
              color="#797979"
              textAlign="left"
              sx={{ margin: "5px 0px 20px" }}
            >
              در صورت بروز خطا یا عدم رضایت از کیفیت تبدیل ما وجه را به حساب شما
              باز میگردانیم.
            </Typography>
          </Box>
        </Grid>
        <Grid xs={6} sm={6} md={4} lg={4} sx={{ px: 2, mb: 2 }}>
          <Box className="box" sx={{ width: "70%", m: "0 40px 80px" }}>
            <Box
              sx={{
                backgroundColor:
                  "linear-gradient(0deg, rgba(197,199,208,1) 0%, rgba(211,213,220,1) 100%)",
                backgroundImage:
                  "linear-gradient(0deg, rgb(197, 199, 208) 0%, rgb(211, 213, 220) 100%);",
                height: "48px",
                width: "48px",
                borderRadius: "12px",
                mb: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsFillChatDotsFill color="#FFF" fontSize="30px" />
            </Box>
            <Typography
              className="typo1"
              variant="body2"
              color="#5d647b"
              gutterBottom
            >
              پشتیبانی آنلاین
            </Typography>
            <Typography
              fontSize="14px"
              color="#797979"
              textAlign="left"
              sx={{ margin: "5px 0px 20px" }}
            >
              ما با پشتیبانی آنلاین همیشه در تلاشیم تا پاسخگوی سوالات و نظرات
              شما باشیم.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SiteSpecifications;
