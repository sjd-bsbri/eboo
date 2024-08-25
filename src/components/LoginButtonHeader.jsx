import { BsChatRightText, BsChevronRight, BsHouse } from "react-icons/bs";
import { SlNotebook } from "react-icons/sl";
import { CiLogout } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import {
  Badge,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import {
  Close,
  KeyboardArrowDownRounded,
  PersonOutlineRounded,
} from "@mui/icons-material";
import { useEffect, useState, } from "react";
import axios from 'axios';
// import * as yup from 'yup';
import Cookies from 'js-cookie';

import CircularProgress from '@mui/material/CircularProgress';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { theme } from "../layouts/theme/theme";
import { useFormik } from "formik";
import { loginValidationSchema } from "../validations/loginValidation";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useTimer } from "react-timer-hook";
import { Link, useNavigate  } from "react-router-dom";
// import { Link } from "react-router-dom";
// const loginValidationSchema = yup.object({
//   phoneNumber: yup
//     .string()
//     .required('شماره موبایل را وارد کنید')
//     .matches(/^\d{11}$/, 'شماره موبایل باید 11 رقمی باشد'),
// });

function MyTimer({ expiryTimestamp }) {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 120);

  const { seconds, minutes, restart, pause } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      document.getElementById("seconds").style.display = "none";
      pause(time),
        (document.getElementById("resendCode").style.display = "block");
    },
  });

  return (
    <Box sx={{ textAlign: "center", mt: 2 }}>
      <Box id="seconds">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "17px",
              mx: 1,
              [theme.breakpoints.down("sm")]: { fontSize: "14px" },
            }}
          >
            ارسال مجدد کد بعد از{" "}
          </Typography>{" "}
          <Typography
            sx={{ [theme.breakpoints.down("sm")]: { fontSize: "15px" } }}
          >
            {seconds.toString().padStart(2, "0")}:
          </Typography>{" "}
          <Typography
            sx={{ [theme.breakpoints.down("sm")]: { fontSize: "15px" } }}
          >
            0{minutes}{" "}
          </Typography>
        </Box>
      </Box>
      <Typography sx={{ display: "none" }} id="resendCode">
        {" "}
        <Button
          disableRipple
          variant="text"
          sx={{
            ":hover": { background: "none", textDecoration: "underline" },
            textDecoration: "underline",
            textUnderlinePosition: "from-font",
          }}
          onClick={() => {
            document.getElementById("seconds").style.display = "block";
            document.getElementById("resendCode").style.display = "none";
            const time = new Date();
            time.setSeconds(time.getSeconds() + 120);
            restart(time);
          }}
        >
          ارسال مجدد کد
        </Button>{" "}
      </Typography>
    </Box>
  );
}

const LoginButtonHeader = () => {
 

  const [anchorEl2, setAnchorEl2] = useState(null);

  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleLogin = () => {
    openDialog1();
  };

  const handleBack = () => {
    closeDialog2();
    openDialog1();
  };

  const handleForward = () => {
    closeDialog1();
    openDialog2();
  };

  const openDialog1 = () => {
    setIsDialog1Open(true);
  };

  const openDialog2 = () => {
    setIsDialog2Open(true);
  };

  const closeDialog1 = () => {
    setIsDialog1Open(false);
  };
  const closeDialog2 = () => {
    setIsDialog2Open(false);
  };

  const [isDialog1Open, setIsDialog1Open] = useState(false);
  const [isDialog2Open, setIsDialog2Open] = useState(false);

  const [isLoggedIn,] = useState(false);
  const navigate = useNavigate();


  // const handleChange = (newValue) => {
  //   setOtp(newValue);
  // };
  // const [loading, setLoading] = useState(false);
  // const timer = useRef();
  
  // useEffect(() => {
    //   return () => {
      //     clearTimeout(timer.current);
      
      //   };
      
      // }, []);
      
      // const handleButtonClick = () => {
        //   if (!loading) {
          //     setLoading(true);
          //     timer.current = setTimeout(() => {
            //       setLoading(false);
            //     }, 5000);
            //   }
            // };
            
  //   const [disabled, setDisabled] = useState(true);        
  //   const handleComplete = (value) => {
  //   if (value.length === 6) {
  //     setDisabled(false);
  //   } else if (value.length === 0) {
  //     setDisabled(true);
  //   }
  // };
  const [access, setAccessToken] = useState('');
  const [refreshT, setRefreshToken] = useState('');

  // useEffect(() => {
  //   // Make a GET request to the server to get the access token
  //   axios.get('http://chap-chii.ir/api/AccessToken')
  //     .then((response) => {
  //       const { accessToken } = response.data;
  //       setAccessToken(accessToken);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching access token:', error);
  //     });
  // }, []);

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    validationSchema: loginValidationSchema,
    // comented fron here👇🏻


    onSubmit: async (values) => {
      
      try {
          const response = await axios.post('http://chap-chii.ir/net/api/auth/login', { phoneNumber: values.phoneNumber },{
          headers: {
            'Content-Type': 'application/json',
          }});
          if (response.status === 200)  {
            // handleButtonClick();

            // alert('کد تایید به شماره شما ارسال شد');
            handleForward();
            console.log(response.data)
          }else{
            console.error('Error:', response.data);

          }
        }
          catch(error) {
              
            console.error('"تعداد درخواستها از حد مجاز روزانه عبور کرده است !"', error);
            // alert('خطایی در ارسال کد تایید رخ داد');
            // toast.error("تعداد درخواستها از حد مجاز روزانه عبور کرده است!", { position: 'top-right', style:{fontFamily:"vazir",fontSize:"12px",direction:"rtl"} });
            toast.error("به دلیل قطع بودن سرویس ارسال پیام از سمت سرور ، امکان ارسال پیام وجود ندارد !", { position: 'top-right', style:{fontFamily:"vazir",fontSize:"12px",direction:"rtl"} });

          }
      } 
// comented to here☝🏻
    
    }
  )

  const [sendedCode, ] = useState("");


  const formikOtp = useFormik({
    initialValues: {
      // phoneNumber: formik.values.phoneNumber,
      sendedCode: '',
    },
    // validate: (values) => {
    //   const errors = {};
    //    if (!values.sendedCode) {
    //     errors.sendedCode = 'کد تایید را وارد کنید';
    //   }
    //   if(values.sendedCode!==6){
    //     errors.sendedCode = 'لطفا کد تایید را کامل وارد کنید';

    //   }
    //   return errors;
    // },
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://chap-chii.ir/net/api/auth/verify-code', {
          phoneNumber: formik.values.phoneNumber,
          sendedCode: values.sendedCode,
          
        },

        
        { headers: {
          'Content-Type': 'application/json',
          // "Set-Cookie":`accessToken=${response.data.accessToken}; path=/;`,
          // "Set-Cookies":`refreshToken=${response.data.refreshToken}; path=/; secure`
          
        }});

        // console.log(response.data.data.accessToken)
        // console.log(response.data.refreshToken)
        const { accessToken, refreshToken } = response.data.data;

        // document.cookie = `access_token=${accessToken}`
        // document.cookie = `refresh_token=${refreshToken}`
        // navigate("/eboo/dashboard")
        
        
        
        // const responseAcc =  axios.get('http://chap-chii.ir/api/AccessToken');
          // console.log(response.data.data)
        // const { accessToken, refreshToken } = response.data;
        
        // console.log(responseAcc)
        Cookies.set('access_token', accessToken);
        Cookies.set('refresh_token', refreshToken);
        navigate("/eboo/dashboard")

        // setAccessToken(token);
        // setRefreshToken(refresh);

        // if (!token || !refresh) {
        //   navigate("/eboo")
          

        // }else{
        //   navigate("/eboo/dashboard")
        // }

        // const accessT = Cookies.get('access_token', { domain: 'http://chap-chii.ir/net/api/auth/verify-code' });
        // const refreshT = Cookies.get('refresh_token', { domain: 'http://chap-chii.ir/net/api/auth/verify-code' });
        // console.log(accessT)
        // console.log(refreshT)
        // if (!accessT || !refreshT) {
        //   navigate("/eboo")
          

        // }else{
        //   navigate("/eboo/dashboard")
        // }
        // Cookies.set('refresh_token', refreshToken, { secure: true, sameSite: 'strict', httpOnly: true });
        // const { data } = response.data;
        // Cookies.set('access_token', data);

            // console.log(response)

        // localStorage.setItem('accessToken', accessToken);
        // localStorage.setItem('refreshToken', refreshToken);
        // console.log(response)

        // toast.success('ورود موفقیت‌آمیز!', { position: 'top-right', style:{fontFamily:"vazir",fontSize:"12px",direction:"rtl"}  });


        // Redirect to user panel or update state to show user panel
      } catch (error) {
        console.log(error.response)
        toast.error('کد تایید اشتباه است!', { position: 'top-right', style:{fontFamily:"vazir",fontSize:"12px",direction:"rtl"}  });
      }
    },
  });


 
  // ...



  const time = new Date();
  time.setSeconds(time.getSeconds() + 120);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        [theme.breakpoints.up("md")]: {
          ".person": {
            display: "none",
          },
        },
        [theme.breakpoints.down("md")]: {
          ".Button1": { border: "none", p: 0 },
          ".Button2": { border: "none", p: 0, m: 0 },
          ".typoBtn2": { fontSize: "0.7rem" },
        },
        [theme.breakpoints.down("sm")]: {
          ".Button1": {
            padding: 0,
            margin: 0,
            mr: 1,
          },
          ".Button2": {
            padding: 0,
            margin: 0,
          },
          ".box": { mr: 1 },
          ".iconBtn2": { fontSize: "0.8rem", mt: 0.5 },
          ".arrowBtn2": { fontSize: "0.9rem" },
          ".bellIcon": { height: "1.4rem" },
          ".badge": { size: "small" },
        },
      }}
    >
      {isLoggedIn ? (
        <Box sx={{ mr: 3 }} className="box">
          <Button
            className="Button2"
            size="medium"
            variant="outlined"
            sx={{
              color: "text.primary",
              mr: 1,
              borderRadius: 2,
              borderColor: "black",
              "&.MuiButton-root": { backgroundColor: "transparent" },
              "&:hover": {
                backgroundColor: "primary.main",
                color: "background.default",
              },
            }}
            id="basic-button2"
            aria-controls={open2 ? "basic-menu2" : undefined}
            aria-haspopup="true"
            aria-expanded={open2 ? "true" : undefined}
            onClick={handleClick2}
          >
            <PersonOutlineRounded
              className="iconBtn2"
              sx={{ fontSize: 25, mb: 0.9, mr: 0.3 }}
            />
            <Typography
              className="typoBtn2"
              sx={{ fontSize: 20, fontWeight: 700 }}
            >
              حساب کاربری
            </Typography>
            <KeyboardArrowDownRounded
              className="arrowBtn2"
              sx={{ fontSize: 20 }}
            />
          </Button>
          <Badge
            className="badge"
            showZero
            badgeContent={0}
            color="primary"
            sx={{ "& .MuiBadge-badge": { top: 3 } }}
          >
            <CiBellOn
              className="bellIcon"
              style={{
                fontSize: 33,
                verticalAlign: "middle",
                cursor: "pointer",
              }}
            />
          </Badge>
        </Box>
      ) : (
        <>
          <Button
            className="Button1"
            onClick={handleLogin}
            size="large"
            variant="outlined"
            sx={{
              color: "text.primary",
              mr: 2,
              borderRadius: 2,
              borderColor: "black",
              "&.MuiButton-root": { backgroundColor: "transparent" },
              "&:hover": {
                backgroundColor: "primary.main",
                color: "background.default",
              },
            }}
          >
            <PersonOutlineRounded
              className="person"
              sx={{ fontSize: 22, mb: 0.9 }}
            />
            <Typography variant="caption">ورود / ثبت نام</Typography>
          </Button>
        </>
      )}

      <Dialog
        open={isDialog1Open}
        onClose={closeDialog1}
        sx={{
          "& .MuiModal-backdrop": {
            backgroundColor: "rgba(153,153,153,0.2)",
            backdropFilter: "blur(12px)",
          },
          "& .MuiPaper-root": {
            borderRadius: "12px",
            boxShadow: "none",
            p: "0px 15px",
            maxWidth: "600px",
            maxHeight: "calc(100% - 64px)",
            width: "600px",
            height: "400px",
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: "20px 20px 20px",
          }}
        >
          {" "}
          <Typography sx={{ fontSize: "20px", textAlign: "right" }}>
            {" "}
            ورود / ثبت‌نام
          </Typography>
          <Button
            onClick={closeDialog1}
            disableRipple
            sx={{
              ":hover": {
                backgroundColor: "transparent",
              },
              p: "0px",
              m: "-25px",
              color: "#4e4e4e",
            }}
          >
            <Close sx={{ ":hover": { color: "#000" } }} />
          </Button>{" "}
        </DialogTitle>

        <DialogContent
          sx={{ p: "40px 20px", "&.MuiDialogContent-root": { pt: "40px" } }}
        >
          <DialogContentText
            sx={{ fontSize: "16px", mb: "20px", color: "#212529" }}
          >
            شماره همراه خود را وارد نمایید :
          </DialogContentText>
          <form onSubmit={formik.handleSubmit}>
          <TextField
            id="phoneNumber"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            size="medium"
            autoFocus
            margin="dense"
            label="موبایل "
            fullWidth
            variant="outlined"
            sx={{
              fontSize: "20px",
              "& .MuiInputLabel-root": {
                fontSize: "20px",
              },
              "& .MuiInputBase-root": {
                fontSize: "20px",
                borderRadius: "8px",
              },
            }}
          />
          <DialogActions sx={{ p: 0 }}>
            <Button
            type="submit"
              fullWidth
              disabled={formik.isSubmitting }
              // onClick={handleButtonClick}
              variant="contained"
              color="primary"
              sx={{
                fontSize: "20px",
                mt: "45px",
                p: "10.5px 15px",
                color: "#FFF",
                borderRadius: "8px",
                position: 'relative',

              }}
              // onClick={formik.handleSubmit}
            >
              دریافت کد تایید

              {formik.isSubmitting  ? (
          <CircularProgress
            size={30}
            sx={{
              color: "#00ADB5",
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        ):  null}   
            </Button>
          </DialogActions>

          </form>
                  </DialogContent>
                  <ToastContainer  />

      </Dialog>

      <Dialog
        open={isDialog2Open}
        onClose={closeDialog2}
        sx={{
          "& .MuiModal-backdrop": {
            backgroundColor: "rgba(153,153,153,0.2)",
            backdropFilter: "blur(12px)",
          },
          "& .MuiPaper-root": {
            borderRadius: "12px",
            boxShadow: "none",
            p: "0px 15px ",
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: "20px 14px 20px",
          }}
        >
          {" "}
          <Box sx={{ display: "flex" }}>
            <Button
              variant="outlined"
              sx={{
                p: "0px",
                color: "#818181",
                fontSize: "16px",
                mr: "5px",
                border: "1px solid #d5d5d5",
                borderRadius: "7px",
              }}
              onClick={handleBack}
            >
              {" "}
              <BsChevronRight />{" "}
            </Button>
            <Typography sx={{ fontSize: "20px", textAlign: "right" }}>
              {" "}
              ثبت‌نام
            </Typography>
          </Box>
          <Button
            onClick={closeDialog2}
            disableRipple
            sx={{
              ":hover": {
                backgroundColor: "transparent",
              },
              p: "0px",
              m: "-25px",
              color: "#4e4e4e",
            }}
          >
            <Close sx={{ ":hover": { color: "#000" } }} />
          </Button>{" "}
        </DialogTitle>
        <DialogContent
          sx={{ p: "40px 20px", "&.MuiDialogContent-root": { pt: "40px" } }}
        >
        <form onSubmit={formikOtp.handleSubmit}>
          {" "}
          <Box>
            <DialogContentText
              sx={{
                fontSize: "16px",
                mb: "20px",
                color: "#212529",
                display: "flex",
                justifyContent: "center",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "14px",
                },
              }}
            >
              کد تایید پیامک شده را وارد نمایید :
            </DialogContentText>
                
            <MuiOtpInput
              sx={{
                direction: "rtl",
                "& .MuiTextField-root": { p: "3px" },
                [theme.breakpoints.down("sm")]: {
                  "& .MuiInputBase-input": { minWidth: "16px", p: 0 },
                  "& .MuiTextField-root": { mr: "-12px" },
                },
              }}
              rowGap={5}
              columnGap={5}
              TextFieldsProps={{ size: "small" }}
              length={6}
              // value={otp}
              value={formikOtp.values.sendedCode}

              // onChange={handleChange}
              // onChange={()=>formikOtp.handleChange(sendedCode)}
              onChange={(value) => formikOtp.setFieldValue("sendedCode", value)}


              // onComplete={handleComplete}

            />
                   {/* {formikOtp.errors.sendedCode && (
          <span style={{ color: 'red' }}>{formikOtp.errors.sendedCode}</span>
        )} */}


            <Typography
              onClick={handleBack}
              sx={{
                fontSize: "15px",
                mt: 3,
                cursor: "pointer",
                textDecoration: "underline",
                display: "flex",
                justifyContent: "center",
              }}
              color="primary"
            >
              تغییر شماره همراه
            </Typography>

            <MyTimer expiryTimestamp={time} />
          </Box>
          {/* <Link to={"/eboo/dashboard"} style={{ textDecoration: "none" }}> */}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: "30px", color: "#FFF" }}
              type="submit"
              disabled={formikOtp.isSubmitting}
            >
              ثبت نام

              {formikOtp.isSubmitting  ? (
          <CircularProgress
            size={30}
            sx={{
              color: "#00ADB5",
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        ):  null} 
            </Button>
          {/* </Link> */}
        </form>
        </DialogContent>
                  
        <ToastContainer  />
      </Dialog>

      <Menu
        id="basic-menu2"
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleClose2}
        MenuListProps={{
          "aria-labelledby": "basic-button2",
        }}
      >
        <MenuItem onClick={handleClose2}>
          <Typography variant="caption" sx={{ color: "#393E46" }}>
            👋🏻 خوش آمدید
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose2}>
          <BsHouse />
          <Typography sx={{ ml: 1 }}>پروفایل کاربری</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose2}>
          <SlNotebook />
          <Typography sx={{ ml: 1 }}> سفارشات </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose2}>
          <BsChatRightText />
          <Typography sx={{ ml: 1 }}> پیام ها </Typography>
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose2}>
          <CiLogout />
          <Typography sx={{ ml: 1 }}> خروج از حساب کاربری </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default LoginButtonHeader;


