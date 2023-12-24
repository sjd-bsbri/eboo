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
import {
  BsAward,
  BsCashCoin,
  BsHeadset,
  BsPlus,
  BsSlack,
} from "react-icons/bs";
import { typeServicesInput } from "../constants/typeServicesInput";
import styled from "@emotion/styled";
import { editingServiceSubject } from "../constants/editingServiceSubject";
import { theme } from "../layouts/theme/theme";

const EditingServices = () => {
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
      <Box
        sx={{
          backgroundColor: "#FCFCFC",
          minHeight: "100vh",
          [theme.breakpoints.down("lg")]: {
            ".grid1": { m: "70px 0 0", pr: "100px" },
            ".grid2": { m: "70px 0 0" },
          },
          [theme.breakpoints.down("md")]: {
            ".grid1": { pr: 0, m: "10px 0 0" },
            ".boxPad1": { p: "0 1rem" },
            ".texBoxEditingService": { textAlign: "center",  },
            ".typo": { fontSize: "16px" },
            ".editingDivider": { display: "block" },
            ".justifyPurple": { justifyContent: "center" },
            ".infos": { display: "none" },
            ".grid2": { m: 0, p: 0 },
            ".editingDivider2": {
              "&.MuiDivider-root::before": { width: "100%" },
            },
            ".boxBtn": { textAlign: "center", mt: "35px" },
            ".btn": { width: "100%", height: "55px" },
          },
          [theme.breakpoints.down("sm")]: {
            ".typoPurple": { fontSize: "14px" },
            ".typoCheck": { fontSize: "12px" },
            ".typoCheckBlue": { fontSize: "13px" },
            ".typo": { fontSize: "13px" },

          },
        }}
      >
        <Box className="boxPad1" sx={{ p: "0 3rem", borderRadius: "20px" }}>
          <Grid container sx={{ display: "flex", height: "100%" }}>
            <Grid
              className="grid1"
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              sx={{ m: "130px 0 0", pr: "150px", textAlign: "center" }}
            >
              <Box
                className="texBoxEditingService"
                sx={{ textAlign: "left", p: 0 }}
              >
                <Typography
                  sx={{ fontSize: "40px", color: "#0c0c0c", mb: "20px" }}
                >
                  سفارش ویراستاری
                </Typography>
                <Divider
                  className="editingDivider"
                  sx={{
                    display: "none",
                    m: "20px 0",
                    border: 0,
                    borderTop: "1px solid rgba(0,0,0,0.1)",
                  }}
                />
                <Typography
                  className="typo"
                  sx={{
                    m: "10px 0 20px",
                    color: "#303030",
                    lineHeight: "230%",
                    fontSize: "14px",
                    textAlign: "justify",
                  }}
                >
                  انجام ویراستاری فنی (تنظیم حاشیه ها، فاصله کلمات، سایز فونت و
                  ... )، صفحه آرایی ( استفاده از گرافیک، اعراب گذاری متون، تنظیم
                  فرمت و... ) و تنظیم پایان نامه بر اساس فرمت دانشگاه های مورد
                  نظر توسط تایپیست و ویراستاران حرفه ای و مسلط به ادبیات فارسی
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
                  alignItems: "center",
                }}
                className="justifyPurple"
              >
                <BsSlack
                  style={{
                    fontSize: "22px",
                    color: "#a63489",
                  }}
                />

                <Typography
                  className="typoPurple"
                  sx={{ fontSize: "20px", color: "#a63489", ml: "10px" }}
                >
                  قیمت پس از ثبت سفارش توسط کارشناس اعلام خواهد شد
                </Typography>
              </Box>
              <Box sx={{ textAlign: "left", mt: "30px" }} className="infos">
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <BsAward style={{ fontSize: "28px", color: "#c4c4c4" }} />
                  <Typography
                    sx={{ ml: "10px", fontSize: "15px", color: "#303030" }}
                  >
                    دقت بالا در انجام مطابق با توضیحات ثبت شده
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
              className="grid2"
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              sx={{ m: "130px 0 0", p: "0 15px" }}
            >
              <Box>
                <Divider
                  className="editingDivider2"
                  textAlign="left"
                  sx={{
                    "&.MuiDivider-root::before": {
                      width: 0,
                      borderTop: "thin solid #f0f0f1",
                    },
                    "&.MuiDivider-root::after": {
                      borderTop: "thin solid #f0f0f1",
                    },
                    m: "25px 0 25px",
                  }}
                >
                  <Typography sx={{ fontSize: "18px", color: "#212529" }}>
                    ثبت سفارش ویراستاری جدید
                  </Typography>{" "}
                </Divider>
              </Box>{" "}
              <form autoComplete="off" style={{ paddingTop: "15px" }}>
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
                      label="نوع ویراستاری"
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
                      {editingServiceSubject.map((input, index) => (
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
                  </Grid>
                </Grid>

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
                      placeholder="توضیحات تکمیلی برای ارائه به ویراستار"
                      style={{
                        height: "5rem",
                        width: "100%",
                        borderRadius: "5px",
                        fontFamily: "YekanBakh",
                        fontSize: "14px",
                        padding: "12px 15px",
                        border: "1px solid #ced4da",
                        color: "#495057",
                        resize: "vertical",
                        overflow: "auto",
                        lineHeight: 1.5,
                        boxSizing: "border-box",
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
                        className="typoCheck"
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
                        className="typoCheckBlue"
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
                  <Box className="boxBtn" sx={{ textAlign: "right" }}>
                    <Button
                      className="btn"
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

export default EditingServices;
