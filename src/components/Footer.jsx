import {
  Box,
  Divider,
  Link,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
  BsDot,
  BsInstagram,
  BsLinkedin,
  BsShare,
  BsTelegram,
  BsTelephone,
  BsTwitter,
} from "react-icons/bs";
import { styled } from "@mui/material/styles";
import { Enamad, Samandehi } from "../assets/index";
import { theme } from "../layouts/theme/theme";
import { LocationOnOutlined } from "@mui/icons-material";
import CustomNumeralNumericFormat from "../helpers/PersianNumber";

const Anchor = styled("a")({
  display: "flex",
  alignItems: "center",
  borderRadius: "10px",
  padding: "8px 10px",
  textDecoration: "none",
  backgroundColor: "transparent",
});

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          background: "#FFF",
          p: "70px 3rem 10px",
          [theme.breakpoints.down("md")]: {
            ".social": { display: "flex" },
            ".mtOrdLink": { mt: "40px" },
            p: "5rem 2rem",
          },
          [theme.breakpoints.down("sm")]: {
            ".social": { display: "block" },
            ".twoLogo": { mt: "30px" },
            ".geo": { fontSize: "48px" },
          },
        }}
      >
        <Grid container>
          <Grid sx={{ px: "15px" }} xs={12} sm={12} md={4} lg={5} xl={5}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LocationOnOutlined sx={{ fontSize: "28px", color: "#ee2556" }} />
              <Typography
                sx={{ ml: "20px", color: "#212529", fontSize: "20px" }}
              >
                آدرس : مازندران ، بابل ، میدان کشوری ، مجتمع تجاری هجرت ، پلاک{" "}
                <CustomNumeralNumericFormat
                  value={17}
                  style={{ fontSize: "20px", fontFamily: "YekanBakh" }}
                />
              </Typography>
            </Box>
            <Box sx={{ display: "flex", m: "20px 0" }}>
              <BsTelephone style={{ fontSize: "28px", color: "#ee2556" }} />
              <Typography
                sx={{ ml: "20px", color: "#212529", fontSize: "20px" }}
              >
                تلفن :{" "}
                <CustomNumeralNumericFormat
                  value={"01132251476"}
                  style={{ fontSize: "20px", fontFamily: "YekanBakh" }}
                />
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <BsShare style={{ fontSize: "28px", color: "#ee2556" }} />
              <Box
                className="social"
                sx={{ ml: "20px", display: "block", alignItems: "center" }}
              >
                <Anchor
                  target="_blank"
                  href="https://www.instagram.com/eboo_group/"
                  sx={{
                    color: "#ee2556",
                    border: "2px solid #ee2556",
                    ":hover": { backgroundColor: "#ee2556", color: "#FFF" },
                  }}
                >
                  <BsInstagram
                    style={{
                      fontSize: "28px",
                    }}
                  />
                  <Typography sx={{ fontSize: "20px", ml: "5px" }}>
                    اینستاگرام
                  </Typography>
                </Anchor>

                <Box sx={{ mx: "1rem" }}>
                  <BsDot style={{ fontSize: "20px", color: "#e7e7e7" }} />
                </Box>
                <Anchor
                  target="_blank"
                  href="https://t.me/eboogroup"
                  sx={{
                    color: "#0c8fff",
                    border: "2px solid #0c8fff",
                    ":hover": { backgroundColor: "#0c8fff", color: "#FFF" },
                  }}
                >
                  <BsTelegram style={{ fontSize: "28px" }} />
                  <Typography sx={{ fontSize: "20px", ml: "5px" }}>
                    تلگرام
                  </Typography>
                </Anchor>
              </Box>
            </Box>
          </Grid>
          <Grid
            className="mtOrdLink"
            sx={{
              px: "15px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
            }}
            xs={6}
            sm={6}
            md={4}
            lg={4}
            xl={4}
          >
            <Typography sx={{ color: "#ee2556", mb: "25px", fontSize: "20px" }}>
              سفارشات
            </Typography>
            <MenuList sx={{ right: "14px", p: 0, mb: "20px" }}>
              <MenuItem
                disableRipple
                sx={{ ":hover": { background: "none" }, mb: "15px" }}
              >
                <Link underline="hover" sx={{ color: "#393939" }}>
                  <Typography sx={{ fontSize: "14px", color: "#393939" }}>
                    سفارش تایپ
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem
                disableRipple
                sx={{ ":hover": { background: "none" }, mb: "15px" }}
              >
                <Link underline="hover" sx={{ color: "#393939" }}>
                  <Typography sx={{ fontSize: "14px", color: "#393939" }}>
                    سفارش ترجمه
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem
                disableRipple
                sx={{ ":hover": { background: "none" }, mb: "15px" }}
              >
                <Link underline="hover" sx={{ color: "#393939" }}>
                  <Typography sx={{ fontSize: "14px", color: "#393939" }}>
                    سفارش ویراستاری
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem
                disableRipple
                sx={{ ":hover": { background: "none" }, mb: "15px" }}
              >
                <Link underline="hover" sx={{ color: "#393939" }}>
                  <Typography sx={{ fontSize: "14px", color: "#393939" }}>
                    سفارش پاورپونت
                  </Typography>
                </Link>
              </MenuItem>
            </MenuList>
          </Grid>
          <Grid
            className="mtOrdLink"
            sx={{
              px: "15px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
            }}
            xs={6}
            sm={6}
            md={4}
            lg={3}
            xl={3}
          >
            <Typography sx={{ color: "#ee2556", mb: "25px", fontSize: "20px" }}>
              لینک ها
            </Typography>
            <MenuList sx={{ right: "14px", p: 0, mb: "20px" }}>
              <MenuItem
                disableRipple
                sx={{ ":hover": { background: "none" }, mb: "15px" }}
              >
                <Link underline="hover" sx={{ color: "#393939" }}>
                  <Typography sx={{ fontSize: "14px", color: "#393939" }}>
                    درباره ما{" "}
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem
                disableRipple
                sx={{ ":hover": { background: "none" }, mb: "15px" }}
              >
                <Link underline="hover" sx={{ color: "#393939" }}>
                  <Typography sx={{ fontSize: "14px", color: "#393939" }}>
                    تماس با ما{" "}
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem
                disableRipple
                sx={{ ":hover": { background: "none" }, mb: "15px" }}
              >
                <Link underline="hover" sx={{ color: "#393939" }}>
                  <Typography sx={{ fontSize: "14px", color: "#393939" }}>
                    ثبت نظر/شکایات{" "}
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem
                disableRipple
                sx={{ ":hover": { background: "none" }, mb: "15px" }}
              >
                <Link underline="hover" sx={{ color: "#393939" }}>
                  <Typography sx={{ fontSize: "14px", color: "#393939" }}>
                    استخدام پیمانکار{" "}
                  </Typography>
                </Link>
              </MenuItem>
            </MenuList>
          </Grid>
        </Grid>

        <Grid container sx={{ mt: "70px" }}>
          <Grid
            sx={{ px: "15px", mb: "15px" }}
            xs={12}
            sm={12}
            md={6}
            lg={8}
            xl={8}
          >
            <Typography
              sx={{
                fontSize: "0.8rem",
                color: "#6b6b6b",
                textAlign: "justify",
              }}
            >
              سایت نرم افزاری ایبو در سال{" "}
              <CustomNumeralNumericFormat
                value={1392}
                style={{ fontSize: "0.8rem", fontFamily: "YekanBakh" }}
              />{" "}
              با هدف ارائه خدمات مبتنی بر هوش مصنوعی آغاز به کار کرد. ما با در
              نظرگیری علاقه انسان به آسان سازی کارها در تلاشیم با ارائه خدمات
              پیشرفته در قالب استفاده آسان این امکان را برای کاربران فراهم
              سازیم. از جمله این سرویس ها نرم افزار تبدیل عکس و PDF به ورد
              فارسی، تبدیل گفتار به نوشتار، ارائه خدمات پیشرفته برای فایلهای PDF
              و Word، تایپ، ترجمه، ویراستاری متون دانشگاهی و ساخت پاورپوینت می
              باشد. تا بحال بیش از{" "}
              <CustomNumeralNumericFormat
                value={255}
                style={{ fontSize: "0.8rem", fontFamily: "YekanBakh" }}
              />{" "}
              هزار نفر از سرویس های ما استفاده کرده اند و مشاغلی نظیر کافی نت
              ها، تایپیست ها، مترجم ها و بسیاری دیگر بطور روزانه از این سامانه
              استفاده می کنند که باعث ایجاد سهولت و همچنین با توجه به افزودن
              سرویس های تایپ و ترجمه باعث ایجاد مشاغل بسیار نیز شده است. ما در
              تیم پشتیبانی ایبو در طول شبانه روز آماده شنیدن نظرات و پیشنهادات
              شما هستیم. ما همیشه از ایده های نو استقبال و حمایت می کنیم.
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  color: "#6b6b6b",
                  textAlign: "justify",
                }}
              >
                از ابتدا تا لبخند رضایت با شما هستیم
              </Typography>
            </Typography>
          </Grid>
          <Grid
            className="twoLogo"
            sx={{ px: "15px", textAlign: "center" }}
            xs={6}
            sm={6}
            md={3}
            lg={2}
            xl={2}
          >
            <Link href="#">
              <img
                referrerPolicy="origin"
                target="_blank"
                style={{ cursor: "pointer" }}
                src={Enamad}
                alt="لوگو اینماد"
              />
            </Link>
          </Grid>
          <Grid
            className="twoLogo"
            sx={{ px: "15px", textAlign: "left" }}
            xs={6}
            sm={6}
            md={3}
            lg={2}
            xl={2}
          >
            <Link href="#">
              <img
                referrerPolicy="origin"
                target="_blank"
                style={{ cursor: "pointer" }}
                src={Samandehi}
                alt="لوگو ساماندهی"
              />
            </Link>
          </Grid>
        </Grid>
        <Divider sx={{ mt: "70px", mb: "1rem" }} />
        <Grid container>
          <Grid sx={{ px: "15px" }} xs={8} sm={8} md={10} lg={10} xl={10}>
            <Typography sx={{ fontSize: "14px", color: "#919191" }}>
              کلیه حقوق متعلق به گروه فنی و مهندسی ایبو می باشد.©‏{" "}
              <CustomNumeralNumericFormat
                value={1392}
                style={{ fontSize: "14px", fontFamily: "YekanBakh" }}
              />
              -
              <CustomNumeralNumericFormat
                value={1402}
                style={{ fontSize: "14px", fontFamily: "YekanBakh" }}
              />
            </Typography>
          </Grid>
          <Grid
            sx={{ px: "15px", textAlign: "right" }}
            xs={4}
            sm={4}
            md={2}
            lg={2}
            xl={2}
          >
            <Link target="_blank" href="https://ir.linkedin.com/company/eboo">
              <BsLinkedin
                style={{ fontSize: "24px", color: "#1f2ad2", margin: "0 7px" }}
              />
            </Link>
            <Link target="_blank" href="https://twitter.com/eboo_group">
              <BsTwitter
                style={{ fontSize: "24px", color: "#1f2ad2", margin: "0 7px" }}
              />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
