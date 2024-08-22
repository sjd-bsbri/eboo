import {
  Box,
  Divider,
  Typography,
  Checkbox,
  Button,
  TextField,
  TextareaAutosize,
  Modal,
 
} from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";
import {
  BsAward,
  BsCashCoin,
  BsDot,
  BsHeadset,
  BsPlus,
  BsSlack,
} from "react-icons/bs";
import { typeServicesInput } from "../constants/typeServicesInput";
import styled from "@emotion/styled";
import { theme } from "../layouts/theme/theme";
import { useFormik } from "formik";
import axios from "axios";
import { useState } from "react";

const TypeServices = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);


  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];

  //     setSelectedFile(file);
  //     setPreviewUrl(URL.createObjectURL(file));

  //     const reader = new FileReader();
  //     reader.onload = (e) => setPreviewUrl(e.target.result);
  //     reader.readAsDataURL(file);
    
  // };

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setSelectedFile(file);

  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       setPreview(e.target.result);
  //     };
  //     reader.readAsDataURL(file);
  //   } else {
  //     setPreview(null);
  //   }
  // };

  const formik = useFormik({
    initialValues: {
      desiredDeliveryTime: '',
      userFiles:[],
      userDescription: '',
      // acceptedTerms: false,
    },
    validate: (values) => {
      const errors = {};
      if (!values.desiredDeliveryTime      ) {
        errors.desiredDeliveryTime        = 'زمان تحویل را انتخاب کنید';
      }
      if (!values.userFiles.length) {
        errors.userFiles = 'فایل ها را انتخاب کنید';
      }
      if (!values.userDescription      ) {
        errors.userDescription        = 'توضیحات تکمیلی را وارد کنید';
      }
      // if (!values.acceptedTerms) {
      //   errors.acceptedTerms = 'قوانین و مقررات را باید بپذیرید';
      // }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        
        const formData = new FormData();
        formData.append('desiredDeliveryTime', values.desiredDeliveryTime        );
        formData.append('userDescription', values.userDescription        );
        formData.append('userFiles', values.userFiles);
        // formData.append('userFiles', selectedFile );
        // console.log( values.userFiles)
        console.log(selectedFile)
        console.log(preview)
        // console.log(values.userFiles.length)
        
        console.log(values.desiredDeliveryTime)
        // for (let i = 0; i < values.userFiles.length; i++) {
        //   formData.append('userFiles', values.userFiles[i]);
        // }
        console.log(values)
        // console.log(values.userFiles)
          
            console.log(values.userDescription)
            console.log(values.desiredDeliveryTime)
            console.log(values.userFiles)
            console.log(values.userFiles.length)
        const responseType = await axios.post('http://chap-chii.ir/net/api/orders/typings/typing-order', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(values.desiredDeliveryTime)
        // console.log(values.userFiles)
        console.log(values.userDescription)

        // setPreviewUrl(URL.createObjectURL(selectedFile));

        // alert('سفارش شما با موفقیت ثبت شد!');
        console.log(responseType)
      } catch (error) {
        setOpen(true);
        console.error(error);
        
      }
    },
  });

  const handleFileChange = (event) => {
    formik.setFieldValue('userFiles',Array.from(event.target.files));
  };

  


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
            ".texBoxTypeService": { textAlign: "center",  },
            ".typo": { fontSize: "16px" },
            ".typeDivider": { display: "block" },
            ".justifyPurple": { justifyContent: "center" },
            ".infos": { display: "none" },
            ".grid2": { m: 0, p: 0 },
            ".typeDivider2": { "&.MuiDivider-root::before": { width: "100%" } },
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
              sx={{
                m: "130px 0 0",
                pr: "150px",
                textAlign: "center",
              }}
            >
              <Box
                className="texBoxTypeService"
                sx={{ textAlign: "left", p: 0 }}
              >
                <Typography
                  sx={{ fontSize: "40px", color: "#0c0c0c", mb: "20px" }}
                >
                  سفارش تایپ
                </Typography>
                <Divider
                  className="typeDivider"
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
                  ما آماده انجام تایپ متون فارسی، عربی، انگلیسی و فایل های صوتی
                  با بهترین کیفیت و بهترین قیمت هستیم. ما با تضمین 2 روزه خدمات
                  پس از تحویل، این اطمینان را به شما می دهیم که کلیه تایپ ها با
                  حداکثر دقت توسط تایپیست های مجرب تایپ خواهند شد. همچنین با
                  تقسیم سفارشات بین چند تایپیست قادر به انجام حتی 1000 صفحه در
                  یک روز هستیم.
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
                <Box sx={{ display: "flex", ml: "10px" }}>
                  <Typography
                    className="typoPurple"
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
                    className="typoPurple"
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
              <Box sx={{ textAlign: "left", mt: "30px" }} className="infos">
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <BsAward style={{ fontSize: "28px", color: "#c4c4c4" }} />
                  <Typography
                    sx={{ ml: "10px", fontSize: "15px", color: "#303030" }}
                  >
                    تایپ فرمول ها و جداول پیچیده
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
                  className="typeDivider2"
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
                    ثبت سفارش تایپ جدید
                  </Typography>{" "}
                </Divider>
              </Box>{" "}
              <form autoComplete="off" style={{ paddingTop: "15px" }} onSubmit={formik.handleSubmit}>
                {/* <TextField
                defaultValue="انتخاب کنید"
                select
                SelectProps={{
                  native: true,
                }}
                label="زمان تحویل"
                
                // id="desiredDeliveryTime"
                name="desiredDeliveryTime"
                value={formik.values.desiredDeliveryTime
                }
                onChange={formik.handleChange}
                // error={formik.touched.desiredDeliveryTime
                //   && Boolean(formik.errors.desiredDeliveryTime
                //   )}
                // helperText={formik.touched.desiredDeliveryTime
                //   && formik.errors.desiredDeliveryTime
                // }  
                 
                  sx={{
                    minWidth: 1,
                    background: "#FFF",
                    color: "#000",
                    fontSize: "14px",
                    "& .MuiInputBase-root": {
                      fontSize: "14px",
                      borderRadius: "8px",
                                          
                    },
                    "& .MuiFormLabel-root": { fontSize: "14px", },
                    "& .MuiInputLabel-root": { transform:"translate(15px, -9px) scale(0.75)" }
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
                </TextField> */}
                   <TextField
                      defaultValue="انتخاب کنید"
                      select
                      SelectProps={{
                        native: true,
                      }}
                      label="زمان تحویل "
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
                        "& .MuiInputLabel-root": { transform:"translate(15px, -14px) scale(0.75)", }

                      }}
                      name="desiredDeliveryTime"
                      value={formik.values.desiredDeliveryTime
                      }
                      onChange={formik.handleChange}
                      // disabled={formik.values.desiredDeliveryTime==="انتخاب کنید"}

                    >
                      <option disabled value=""> {"انتخاب کنید"}</option>
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
                <Typography sx={{color:"#d32f2f",fontFamily:"YekanBakh",fontWeight:400,fontSize:"15px",mt:"3px",mx:"14px"}}>
                        {
                          formik.touched.desiredDeliveryTime
                          && formik.errors.desiredDeliveryTime
                        }
                      </Typography>

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
                      <VisuallyHiddenInput1  name="userFiles" type="file" onChange={handleFileChange} multiple accept="*" />
                     
                    </Box>
                    
                  </Box>

                  {/* {selectedFile && (
        <div>
          <img src={preview} alt="پیش نمایش فایل" width={100} height={100} />
        </div>
      )} */}
                  <Typography sx={{color:"#d32f2f",fontFamily:"YekanBakh",fontWeight:400,fontSize:"15px",mt:"7px",mx:"14px"}}>
                        {
                          formik.touched.userFiles
                          && formik.errors.userFiles
                        }
                      </Typography>
                </Box>
                <Box sx={{ mt: "20px" }}>
                  <TextareaAutosize
                            // id="userDescription"
                            name="userDescription"

                     value={formik.values.userDescription}
                     onChange={formik.handleChange}
                     
                    placeholder="توضیحات تکمیلی برای ارائه به تایپیست"
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
                      // required
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
                  type="submit"
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
              </form>
              <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{ p: 3 }}>
          <h2 id="modal-title">خطا</h2>
          <p id="modal-description">مشکلی در ثبت سفارش شما رخ داده است. لطفا دوباره تلاش کنید.</p>
        </Box>
      </Modal>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default TypeServices;
