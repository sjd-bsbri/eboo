import {
  Box,
  Button,
  Checkbox,
  Divider,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { SiSlack } from "react-icons/si";
import { BsAward, BsCashCoin, BsDot, BsHeadset, BsPlus } from "react-icons/bs";
import styled from "@emotion/styled";
import { typeServicesInput } from "../constants/typeServicesInput";
import { translateServiceUsage } from "../constants/translateServiceUsage";
import { translateServiceSubject } from "../constants/translateServiceSubject";

const TranslateServices = () => {
  const VisuallyHiddenInput1 = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  return (
    <>
      <Box sx={{ backgroundColor: "#FCFCFC", minHeight: "100vh" }}>
        <Box sx={{ p: "0 3rem", borderRadius: "20px" }}>
          <Grid container sx={{ display: "flex", height: "100%" }}>
            <Grid
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              sx={{ m: "130px 0 0", pr: "150px", textAlign: "center" }}
            >
              <Box sx={{ textAlign: "left", p: 0 }}>
                <Typography
                  sx={{ fontSize: "40px", color: "#0c0c0c", mb: "20px" }}
                >
                  سفارش ترجمه
                </Typography>
                <Divider
                  sx={{
                    display: "none",
                    m: "20px 0",
                    border: 0,
                    borderTop: "1px solid rgba(0,0,0,0.1)",
                  }}
                />
                <Typography
                  sx={{
                    m: "10px 0 20px",
                    color: "#303030",
                    lineHeight: "230%",
                    fontSize: "14px",
                    textAlign: "justify",
                  }}
                >
                  انجام سفارشات ترجمه در دو سطح عمومی و تخصصی در کلیه رشته ها
                  اعم از پزشکی، مکانیک، حقوق، کامپیوتر، مدیریت، عمران، حسابداری
                  و... با بهترین مترجم از رشته های مورد نظر انجام می پذیرد. کلیه
                  سفارشات در سه حالت عادی، نیم فوری و فوری ابتدا توسط مترجم
                  ترجمه و سپس توسط تایپیست تایپ خواهد شد.
                </Typography>
              </Box>

              <Box
                sx={{
                  background:
                    "linear-gradient(90deg, rgb(252 252 252) 0%, rgb(252 252 252) 50%, rgb(255 239 252) 100%)",
                  color: "#a63489",
                  p: "6px 15px",
                  borderRadius: "10px",
                  textAlign: "left",
                  mt: "30px",
                  display: "flex",
                }}
              >
                <SiSlack
                  style={{
                    fontSize: "22px",
                    color: "#a63489",
                    textAlign: "left",
                  }}
                />
                <Box
                  sx={{
                    ml: "10px",
                    color: "#a63489",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      color: "#a63489",
                      cursor: "pointer",
                    }}
                  >
                    تعرفه قیمت ها
                  </Typography>
                  <BsDot style={{ fontSize: "20px", color: "#a63489" }} />
                  <Typography
                    sx={{
                      fontSize: "20px",
                      color: "#a63489",
                      cursor: "pointer",
                    }}
                  >
                    محاسبه حدودی قیمت
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ textAlign: "left", mt: "30px" }}>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <BsAward style={{ fontSize: "28px", color: "#c4c4c4" }} />
                  <Typography
                    sx={{ ml: "10px", fontSize: "15px", color: "#303030" }}
                  >
                    انجام توسط مترجم متخصص
                  </Typography>
                </Box>
                <Box
                  sx={{ m: "35px 0", display: "flex", alignItems: "flex-end" }}
                >
                  <BsHeadset style={{ fontSize: "28px", color: "#c4c4c4" }} />
                  <Typography
                    sx={{ ml: "10px", fontSize: "15px", color: "#303030" }}
                  >
                    خدمات تصحیح تا 2 روز پس از تحویل
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <BsCashCoin style={{ fontSize: "28px", color: "#c4c4c4" }} />
                  <Typography
                    sx={{ ml: "10px", fontSize: "15px", color: "#303030" }}
                  >
                    ضمانت بازگشت وجه در صورت عدم رضایت
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              sx={{ m: "130px 0 0", p: "0 15px" }}
            >
              <Box>
                <Divider
                  textAlign="left"
                  sx={{
                    "&.MuiDivider-root::before": { width: 0 },
                    "&.MuiDivider-root::after": {
                      borderTop: "thin solid #f0f0f1",
                    },
                    m: "25px 0 25px",
                  }}
                >
                  <Typography sx={{ fontSize: "18px", color: "#212529" }}>
                    ثبت سفارش ترجمه جدید
                  </Typography>{" "}
                </Divider>
              </Box>{" "}
              <form autoComplete="off" style={{ padding: "0 0 15px 15px" }}>
                <Grid
                  container
                  sx={{
                    mb: "15px",
                  }}
                >
                  <Grid xs={6} sm={6} md={6} lg={6} xl={6} sx={{ pr: "15px" }}>
                    <TextField
                      defaultValue="انتخاب کنید"
                      select
                      SelectProps={{
                        native: true,
                      }}
                      label="زمینه متن "
                      sx={{
                        minWidth: 1,
                        background: "#FFF",
                        color: "#000",
                        fontSize: "14px",
                        "& .MuiInputBase-root": {
                          fontSize: "14px",
                          borderRadius: "8px",
                        },
                        "& .MuiFormLabel-root": { fontSize: "14px" },
                      }}
                    >
                      <option disabled>{"انتخاب کنید"} </option>
                      {translateServiceSubject.map((input, index) => (
                        <option
                          style={{ fontSize: "14px", color: "#000" }}
                          key={index}
                          value={input.value}
                        >
                          {input.info}
                        </option>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
                    <TextField
                      defaultValue="انتخاب کنید"
                      select
                      SelectProps={{
                        native: true,
                      }}
                      label="مورد استفاده "
                      sx={{
                        minWidth: 1,
                        background: "#FFF",
                        color: "#000",
                        fontSize: "14px",
                        "& .MuiInputBase-root": {
                          fontSize: "14px",
                          borderRadius: "8px",
                        },
                        "& .MuiFormLabel-root": { fontSize: "14px" },
                      }}
                    >
                      <option disabled>{"انتخاب کنید"} </option>
                      {translateServiceUsage.map((input, index) => (
                        <option
                          style={{ fontSize: "14px", color: "#000" }}
                          key={index}
                          value={input.value}
                        >
                          {input.info}
                        </option>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
                <TextField
                  defaultValue="انتخاب کنید"
                  select
                  SelectProps={{
                    native: true,
                  }}
                  label="زمان تحویل"
                  sx={{
                    minWidth: 1,
                    background: "#FFF",
                    color: "#000",
                    fontSize: "14px",
                    "& .MuiInputBase-root": {
                      fontSize: "14px",
                      borderRadius: "8px",
                    },
                    "& .MuiFormLabel-root": { fontSize: "14px" },
                  }}
                >
                  <option disabled>{"انتخاب کنید"} </option>
                  {typeServicesInput.map((input, index) => (
                    <option
                      style={{ fontSize: "14px", color: "#000" }}
                      key={index}
                      value={input.value}
                    >
                      {input.info}
                    </option>
                  ))}
                </TextField>
                <Box sx={{ pt: "20px" }}>
                  <Box
                    sx={{
                      background: "#FFF",
                      p: "40px 0",
                      border: "1px dashed #ced4da",
                      borderRadius: "10px",
                    }}
                  >
                    <Box
                      component="label"
                      disableRipple
                      sx={{
                        width: "fit-content",
                        overflow: "hidden",
                        color: "#007bff",
                        height: "30px",
                        borderRadius: "5px",
                        m: "0 auto",
                        p: "7.5px 15px",
                        fontSize: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        ":hover": { background: "#007bff", color: "#FFf" },
                      }}
                    >
                      <BsPlus style={{ marginBottom: "5px" }} />
                      <Typography
                        sx={{ fontFamily: "YekanBakh", fontSize: "15px" }}
                      >
                        انتخاب فایل ها
                      </Typography>
                      <VisuallyHiddenInput1 type="file" multiple accept="*" />
                    </Box>
                  </Box>
                  <Box sx={{ mt: "20px" }}>
                    <TextareaAutosize
                      placeholder="توضیحات تکمیلی برای ارائه به مترجم"
                      style={{
                        height: "4rem",
                        width: "95%",
                        borderRadius: "5px",
                        fontFamily: "YekanBakh",
                        fontSize: "14px",
                        padding: "12px 15px",
                        border: "1px solid #ced4da",
                        color: "#495057",
                        resize: "vertical",
                        overflow: "auto",
                        lineHeight: 1.5,
                        "&:focus": { borderColor: "red" },
                      }}
                    />
                  </Box>
                  <Box sx={{ mt: "20px", textAlign: "left" }}>
                    <Box
                      sx={{
                        fontSize: "14px",
                        display: "flex",
                        alignItems: "center",
                        mb: "10px",
                      }}
                    >
                      <Checkbox
                        required
                        disableRipple
                        size="10px"
                        sx={{
                          mr: "5px",
                          p: 0,
                          fontSize: "18px",
                          "&.Mui-checked": {
                            color: "#007bff",
                          },
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#212529",
                          mr: "5px",
                          mt: "3px",
                        }}
                      >
                        قوانین و مقررات را خوانده و قبول دارم
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "15px",
                          color: "#0275ff",
                          cursor: "pointer",
                          mt: "5px",
                        }}
                      >
                        (مشاهده)
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ textAlign: "right" }}>
                    <Button
                      variant="contained"
                      sx={{
                        color: "#FFF",
                        borderRadius: "7px",
                        width: "170px",
                      }}
                    >
                      ثبت سفارش
                    </Button>
                  </Box>
                </Box>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default TranslateServices;
