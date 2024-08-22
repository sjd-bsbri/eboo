// import * as React from "react";
// import { styled, useTheme } from "@mui/material/styles";

import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

// import { Typography } from '@mui/material';

// import Box from "@mui/material/Box";
// import MuiDrawer from "@mui/material/Drawer";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import CssBaseline from "@mui/material/CssBaseline";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import { BackDashboard } from "../../assets";
// import { FiBell, FiBriefcase, FiEdit, FiHome, FiLogOut, FiMail, FiPower, FiUser } from "react-icons/fi";
// import { Badge, ClickAwayListener, Tooltip,  tooltipClasses } from "@mui/material";
// import { Link, Outlet,  useLocation, useNavigate } from "react-router-dom";

// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 0,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginRight: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
// }));
// const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
//   "&.Mui-selected": {
//     borderRight: `5px solid #ed656d`,
//     backgroundColor: "rgba(173, 176, 203, 0.2)",
//     ":hover": { backgroundColor: "rgba(173, 176, 203, 0.2)" },
//   },

//   "&.MuiListItemButton-root.Mui-selected": {
//     color: "#ed656d",

//     "& .MuiListItemIcon-root": {
//       color: "#ed656d",
//     },
//   },
// }));

// const StyledListItem = styled(ListItem)({
//   ":hover": {
//     "& .MuiListItemButton-root": {
//       color: "#ed656d",
//     },
//     "& .MuiListItemIcon-root": {
//       color: "#ed656d",
//       boxShadow: "0 0 15px  rgba(237, 101, 109, .3)",
//     },
//     "& .MuiListItemText-root": {
//       transition: "margin 0.4s ease",
//       marginRight: 4,
//     },
//   },
// });

// const LightTooltip = styled(({ className, ...props }) => (
//   <Tooltip arrow  {...props} classes={{ popper: className }} />
// ))(({ theme }) => ({
//   [`& .${tooltipClasses.tooltip}`]: {
//     backgroundColor: theme.palette.common.white,
//     color: 'rgba(0, 0, 0, 0.87)',
//     boxShadow: theme.shadows[1],
//     "& .MuiTooltip-arrow":{color:"#FFF"}
//   },
// }));

// // const useStyles = makeStyles({
// //  active:{
// //   background:"blue"
// // }
// // })
// export default function Dashboard() {
//   // const classes = useStyles();
//   const location = useLocation();
//   const navigate = useNavigate()
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(true);

//   const handleDrawerOpen = () => {
//     setOpen(!open);
//   };
//   // const [selectedIndex, setSelectedIndex] = React.useState("");

//   // const handleListItemClick = (event, index) => {
//   //   setSelectedIndex(index);
//   // };
//   const [openToolTip, setOpenToolTip] = React.useState(false);

//   const handleTooltipClose = () => {
//     setOpenToolTip(false);
//   };

//   const handleTooltipOpen = () => {
//     setOpenToolTip(true);
//   };

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           direction: "rtl",
//           background: "linear-gradient(to right, #32cafe, #9f78ff);",
//         }}
//         open={open}
//       >
//         <Toolbar
//           sx={{
//             "@media all": {
//               minHeight: 100,
//             },
//             display:"flex",
//             justifyContent:"space-between",
//             alignItems:"center"
//           }}
//         >
//           <IconButton
//           disableRipple
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{
//               // "& .MuiIconBase-root":{p:15},
//               paddingRight: "60px",

//               ...(open && { display: "block", }),
//             }}
//           >

//             <MenuIcon />
//           </IconButton>

//           <Box >

//             <IconButton disableRipple sx={{color:"#FFF"}}
//             >
//               <Badge  anchorOrigin={{
//     vertical: 'top',
//     horizontal: 'left',
//   }} showZero  badgeContent={0} color="primary" >
//             <FiBell style={{fontSize:"1.8rem",cursor:"pointer"}} />
//           </Badge>
//             </IconButton>
//             <ClickAwayListener onClickAway={handleTooltipClose}>
//               <LightTooltip

//                 onClose={handleTooltipClose}
//                 open={openToolTip}
//                 // disableFocusListener
//                 disableHoverListener
//                 disableTouchListener
//                 title={
//                   <Box>
//                   <Typography sx={{fontSize:"14px", color:"#6b6f80",fontWeight:700,p:"5px"}} >a9</Typography>
//                   <Divider variant="fullWidth"  sx={{"&.MuiDivider-root":{border:"2px solid rgba(0, 0, 0, 0.12)"},my:"2px"}} />
//                   <Box sx={{display:"flex",justifyContent:"flex-start", alignItems:"center",p:"10px 20px",cursor:"pointer",":hover":{background:"rgba(173, 176, 203, 0.2)"}}}>
//                     <FiUser style={{marginLeft:"10px",fontSize:"18px"}}/>
//                     <Typography sx={{fontFamily:"Vazir",fontSize:"14px",color:"#2a2e30"}} >ویرایش مشخصات</Typography>
//                   </Box>

//                   <Box sx={{display:"flex",justifyContent:"flex-start", alignItems:"center",p:"10px 20px",cursor:"pointer",":hover":{background:"rgba(173, 176, 203, 0.2)"}}}>
//                     <FiMail style={{marginLeft:"10px",fontSize:"18px"}}/>
//                     <Typography sx={{fontFamily:"Vazir",fontSize:"14px",color:"#2a2e30"}} > صندوق پیامهای من</Typography>
//                   </Box>
//                   <Divider variant="fullWidth"  sx={{"&.MuiDivider-root":{border:"2px solid rgba(0, 0, 0, 0.12)"},my:"2px"}}/>
//                   <Box sx={{display:"flex",justifyContent:"flex-start", alignItems:"center",p:"10px 20px",cursor:"pointer",":hover":{background:"rgba(173, 176, 203, 0.2)"}}}>
//                     <FiPower style={{marginLeft:"10px",fontSize:"18px"}}/>
//                     <Typography sx={{fontFamily:"Vazir",fontSize:"14px",color:"#2a2e30"}} >   خروج</Typography>
//                   </Box>
//                   </Box>
//                 }
//               >
//                  <IconButton onClick={handleTooltipOpen}  disableRipple sx={{color:"#FFF"}}>
//             <FiUser  style={{border:"3px solid #FFF",borderRadius:"50%",fontSize:"1.8rem",margin:"0 30px",cursor:"pointer"}} />

//             </IconButton>
//               </LightTooltip>
//           </ClickAwayListener>

//           <Tooltip title={<Typography sx={{fontFamily:"Vazir", fontSize:"12px"}}>بازگشت به صفحه اصلی سایت</Typography>}   arrow >
//           <IconButton disableRipple sx={{color:"#FFF",}}>
//           <FiHome style={{fontSize:"1.8rem",cursor:"pointer"}} />

//           </IconButton>

// </Tooltip>

//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         variant="permanent"
//         anchor="right"
//         open={open}
//         sx={{
//           flexShrink: 0,
//           "& .MuiDrawer-paper": {
//             boxSizing: "border-box",
//             backgroundImage: `url(${BackDashboard})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             border: "none",
//             boxShadow: "rgba(100, 100, 111, 0.3) 0px 7px 29px 0px",
//           },
//         }}
//       >
//         <Divider />
//         <List  >
//               <StyledListItem
//                 disablePadding
//                 sx={{ display: "block",color:"#2b345f" }}
//                 component={Link} to={"/eboo/dashboard"}
//                 active={location.pathname==="/eboo/dashboard"}
//               >
//                 <StyledListItemButton
//                   // selected={selectedIndex === 0}
//                   // onClick={(event) => handleListItemClick(event, 0)}
//                   disableRipple
//                   sx={{
//                     minHeight: 48,
//                     justifyContent: open ? "initial" : "center",
//                     px: 2.5,
//                     my: 3,
//                     alignItems: "center",
//                     ":hover": { background: "none" },
//                   }}
//                 >
//                   <ListItemIcon
//                     sx={{
//                       minWidth: 0,
//                       ml: open ? 3 : "auto",
//                       justifyContent: "center",
//                       fontSize: "26px",
//                       boxShadow: "0 0 10px rgba(0,0,0,.12)",
//                       background: "#FFF",
//                       borderRadius: "12%",
//                       width: "40px",
//                       height: "40px",
//                       alignItems: "center",
//                       color: "#2b345f",
//                     }}
//                   >
//                    <FiHome/>
//                   </ListItemIcon>
//                   <ListItemText
//                     primary={"داشبورد"}
//                     primaryTypographyProps={{
//                       fontWeight: 600,
//                       fontSize: "16px",
//                       fontFamily: "Vazir",
//                       textAlign: "right",
//                     }}
//                     sx={{ opacity: open ? 1 : 0 }}
//                   />
//                 </StyledListItemButton>
//               </StyledListItem>

//               <StyledListItem
//                 disablePadding
//                 sx={{ display: "block",color:"#2b345f" }}

//                 // component={Link} to={"/eboo/dashboard/"}

//               >
//                 <StyledListItemButton
//                   // selected={selectedIndex === 1}
//                   // onClick={(event) => handleListItemClick(event, 1)}
//                   disableRipple
//                   sx={{
//                     minHeight: 48,
//                     justifyContent: open ? "initial" : "center",
//                     px: 2.5,
//                     my: 3,
//                     alignItems: "center",
//                     ":hover": { background: "none" },
//                   }}
//                 >
//                   <ListItemIcon
//                     sx={{
//                       minWidth: 0,
//                       ml: open ? 3 : "auto",
//                       justifyContent: "center",
//                       fontSize: "26px",
//                       boxShadow: "0 0 10px rgba(0,0,0,.12)",
//                       background: "#FFF",
//                       borderRadius: "12%",
//                       width: "40px",
//                       height: "40px",
//                       alignItems: "center",
//                       color: "#2b345f",
//                     }}
//                   >
//                    <FiBriefcase/>
//                   </ListItemIcon>
//                   <ListItemText
//                     primary={"سفارشات متن"}
//                     primaryTypographyProps={{
//                       fontWeight: 600,
//                       fontSize: "16px",
//                       fontFamily: "Vazir",
//                       textAlign: "right",
//                     }}
//                     sx={{ opacity: open ? 1 : 0 }}
//                   />
//                 </StyledListItemButton>
//               </StyledListItem>
//               <StyledListItem
//                 disablePadding
//                 sx={{ display: "block",color:"#2b345f", }}
//                 component={Link} to={"/eboo/dashboard/Tickets"}

//               >
//                 <StyledListItemButton
//                   // selected={selectedIndex === 2}
//                   // onClick={(event) => handleListItemClick(event, 2)}
//                   disableRipple
//                   sx={{
//                     minHeight: 48,
//                     justifyContent: open ? "initial" : "center",
//                     px: 2.5,
//                     my: 3,
//                     alignItems: "center",
//                     ":hover": { background: "none" },

//                   }}
//                 >
//                   <ListItemIcon
//                     sx={{
//                       minWidth: 0,
//                       ml: open ? 3 : "auto",
//                       justifyContent: "center",
//                       fontSize: "26px",
//                       boxShadow: "0 0 10px rgba(0,0,0,.12)",
//                       background: "#FFF",
//                       borderRadius: "12%",
//                       width: "40px",
//                       height: "40px",
//                       alignItems: "center",
//                       color: "#2b345f",
//                     }}
//                   >
//                    <FiMail/>
//                   </ListItemIcon>
//                   <ListItemText
//                     primary={"پیام ها"}
//                     primaryTypographyProps={{
//                       fontWeight: 600,
//                       fontSize: "16px",
//                       fontFamily: "Vazir",
//                       textAlign: "right",
//                     }}
//                     sx={{ opacity: open ? 1 : 0 }}
//                   />
//                 </StyledListItemButton>
//               </StyledListItem>

//               <StyledListItem
//                 disablePadding
//                 sx={{ display: "block",color:"#2b345f" }}
//                 component={Link} to={"/eboo/dashboard/EditProfile"}
//               >
//                 <StyledListItemButton
//                   // selected={selectedIndex === 3}
//                   // onClick={(event) => handleListItemClick(event, 3)}
//                   disableRipple
//                   sx={{
//                     minHeight: 48,
//                     justifyContent: open ? "initial" : "center",
//                     px: 2.5,
//                     my: 3,
//                     alignItems: "center",
//                     ":hover": { background: "none" },
//                   }}
//                 >
//                   <ListItemIcon
//                     sx={{
//                       minWidth: 0,
//                       ml: open ? 3 : "auto",
//                       justifyContent: "center",
//                       fontSize: "26px",
//                       boxShadow: "0 0 10px rgba(0,0,0,.12)",
//                       background: "#FFF",
//                       borderRadius: "12%",
//                       width: "40px",
//                       height: "40px",
//                       alignItems: "center",
//                       color: "#2b345f",
//                     }}
//                   >
//                    <FiEdit/>
//                   </ListItemIcon>
//                   <ListItemText
//                     primary={"ویرایش اطلاعات"}
//                     primaryTypographyProps={{
//                       fontWeight: 600,
//                       fontSize: "16px",
//                       fontFamily: "Vazir",
//                       textAlign: "right",
//                     }}
//                     sx={{ opacity: open ? 1 : 0 }}
//                   />
//                 </StyledListItemButton>
//               </StyledListItem>

//               <StyledListItem
//                 disablePadding
//                 sx={{ display: "block",color:"#2b345f" }}
//                 component={Link} to={"/eboo/dashboard/Logout"}
//               >
//                 <StyledListItemButton
//                   // selected={selectedIndex === 4}
//                   // onClick={(event) => handleListItemClick(event, 4)}
//                   disableRipple
//                   sx={{
//                     minHeight: 48,
//                     justifyContent: open ? "initial" : "center",
//                     px: 2.5,
//                     my: 3,
//                     alignItems: "center",
//                     ":hover": { background: "none" },
//                   }}
//                 >
//                   <ListItemIcon
//                     sx={{
//                       minWidth: 0,
//                       ml: open ? 3 : "auto",
//                       justifyContent: "center",
//                       fontSize: "26px",
//                       boxShadow: "0 0 10px rgba(0,0,0,.12)",
//                       background: "#FFF",
//                       borderRadius: "12%",
//                       width: "40px",
//                       height: "40px",
//                       alignItems: "center",
//                       color: "#2b345f",
//                     }}
//                   >
//                    <FiLogOut/>
//                   </ListItemIcon>
//                   <ListItemText
//                     primary={"خروج"}
//                     primaryTypographyProps={{
//                       fontWeight: 600,
//                       fontSize: "16px",
//                       fontFamily: "Vazir",
//                       textAlign: "right",
//                     }}
//                     sx={{ opacity: open ? 1 : 0 }}
//                   />
//                 </StyledListItemButton>
//               </StyledListItem>
//         </List>
//       </Drawer>
//       {/* <Box>
//         <Typography variant="h1" color="initial">jkhlhlh</Typography>
//       </Box> */}
//       <Outlet/>
//     </Box>
//   );
// }

// export default function Dashboard(){
//   <>
//   <Typography>shjkhkjhkjhkjhkjhgdghh</Typography>
//   </>
// }

const Dashboard = () => {
  return (
    <Box sx={{ "&.MuiBox-root": { background: "#f4f5fa", width: 1 } }}>
      <Grid container sx={{ transform: "translateY(150px)", mx: 4 }}>
        <Grid xs={12} sm={12} md={6} lg={4} xl={4}>
          <Typography
            fontSize="16px"
            color="#464855"
            fontFamily="Vazir"
            sx={{ mb: "21px", fontWeight: 700 }}
          >
            تبدیل های اخیر
          </Typography>

          <TableContainer component={Paper}    sx={{
                      direction: "rtl",
                      boxShadow: "none",
                      mb: "1rem",
                      // border: "1px solid #dee2e6 ",
                      borderRadius: 2,
                      width:"90%"
                      
                    }}>
            <Table  sx={{ minWidth: 200 }}>
              <TableHead sx={{borderBottom:"3px solid #dee2e6"}}>
                <TableRow >
                  <TableCell  sx={{
                    
                              textAlign: "center",
                              fontSize: "14px",
                              p: "15px",
                              color: "#6b6f80",
                              fontFamily:"Vazir",
                              fontWeight:700
                            }}>
                    #
                  </TableCell>
                  <TableCell sx={{
                                                  borderRight: "1px solid #dee2e6",

                              textAlign: "center",
                              fontSize: "14px",
                              p: "15px",
                              color: "#6b6f80",
                              fontFamily:"Vazir",
                              fontWeight:700                                  
                            }}>
                   تاریخ
                  </TableCell>
                  <TableCell
                  
                  sx={{
                    borderRight: "1px solid #dee2e6",

                    textAlign: "center",
                    fontSize: "14px",
                    p: "15px",
                    color: "#6b6f80",
                    fontFamily:"Vazir",
                    fontWeight:700  ,
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center" ,
                    borderBottom:"none"                               
                  }}>
                    مبلغ
                    <Typography sx={{ color: "#6b6f80",
                    fontFamily:"Vazir",
                    fontWeight:700 ,                    fontSize: "9px",
                    mr:.5,
                    
                  }}>
                    (تومان)
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell >
                  </TableCell>
                  <Typography sx={{ textAlign: "left",
                    fontSize: "14px",
                    p: "10px",
                    color: "#6b6f80",
                    fontFamily:"Vazir",
                    }}>
                  موردی وجود ندارد.
                  </Typography>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>






















        <Grid xs={12} sm={12} md={6} lg={4} xl={4}>
          <Typography
            fontSize="16px"
            color="#464855"
            fontFamily="Vazir"
            sx={{ mb: "21px", fontWeight: 700 }}
          >
            سفارشات اخیر
          </Typography>
          <TableContainer component={Paper}    sx={{
                      direction: "rtl",
                      boxShadow: "none",
                      mb: "1rem",
                      // border: "1px solid #dee2e6 ",
                      borderRadius: 2,
                      width:"90%"
                      
                    }}>
            <Table  sx={{ minWidth: 200 }}>
              <TableHead sx={{borderBottom:"3px solid #dee2e6"}}>
                <TableRow >
                  <TableCell  sx={{
                    
                              textAlign: "center",
                              fontSize: "14px",
                              p: "15px",
                              color: "#6b6f80",
                              fontFamily:"Vazir",
                              fontWeight:700
                            }}>
                    #
                  </TableCell>
                  <TableCell sx={{
                                                  borderRight: "1px solid #dee2e6",

                              textAlign: "center",
                              fontSize: "14px",
                              p: "15px",
                              color: "#6b6f80",
                              fontFamily:"Vazir",
                              fontWeight:700                                  
                            }}>
                   نوع
                  </TableCell>
                  <TableCell
                  
                  sx={{
                    borderRight: "1px solid #dee2e6",

                    textAlign: "center",
                    fontSize: "14px",
                    p: "15px",
                    color: "#6b6f80",
                    fontFamily:"Vazir",
                    fontWeight:700  ,
                                                 
                  }}>
                    وضعیت
                   
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell >
                  </TableCell>
                  <Typography sx={{ textAlign: "left",
                    fontSize: "14px",
                    p: "10px",
                    color: "#6b6f80",
                    fontFamily:"Vazir",
                    }}>
                  موردی وجود ندارد.
                  </Typography>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={4} xl={4}>
          <Typography
            fontSize="16px"
            color="#464855"
            fontFamily="Vazir"
            sx={{ mb: "21px", fontWeight: 700 }}
          >
            آخرین پیام ها
          </Typography>
          <TableContainer component={Paper}    sx={{
                      direction: "rtl",
                      boxShadow: "none",
                      mb: "1rem",
                      // border: "1px solid #dee2e6 ",
                      borderRadius: 2,
                      width:"90%"
                      
                    }}>
            <Table  sx={{ minWidth: 200 }}>
              <TableHead sx={{borderBottom:"3px solid #dee2e6"}}>
                <TableRow >
                  <TableCell  sx={{
                    
                              textAlign: "center",
                              fontSize: "14px",
                              p: "15px",
                              color: "#6b6f80",
                              fontFamily:"Vazir",
                              fontWeight:700
                            }}>
                    #
                  </TableCell>
                  <TableCell sx={{
                                                  borderRight: "1px solid #dee2e6",

                              textAlign: "center",
                              fontSize: "14px",
                              p: "15px",
                              color: "#6b6f80",
                              fontFamily:"Vazir",
                              fontWeight:700                                  
                            }}>
                   عنوان
                  </TableCell>
                  <TableCell
                  
                  sx={{
                    borderRight: "1px solid #dee2e6",

                    textAlign: "center",
                    fontSize: "14px",
                    p: "15px",
                    color: "#6b6f80",
                    fontFamily:"Vazir",
                    fontWeight:700  ,
                                                 
                  }}>
                    وضعیت
                   
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell >
                  </TableCell>
                  <Typography sx={{ textAlign: "left",
                    fontSize: "14px",
                    p: "10px",
                    color: "#6b6f80",
                    fontFamily:"Vazir",
                    }}>
                  موردی وجود ندارد.
                  </Typography>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
