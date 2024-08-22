import {
  Badge,
  Box,
  ClickAwayListener,
  Divider,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  tooltipClasses,
} from "@mui/material";
import {
  FiBell,
  FiBriefcase,
  FiEdit,
  FiHome,
  FiLogOut,
  FiMail,
  FiPower,
  FiUser,
} from "react-icons/fi";
import { styled, } from "@mui/material/styles";
import BackDashboard from "../../assets/BackDashboard.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Menu,
  MenuItem,
  Sidebar,
  SubMenu,
  menuClasses,
} from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import MuiAppBar from "@mui/material/AppBar";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip arrow {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    // transform:"translate(25px)",
    

    "& .MuiTooltip-arrow": { color: "#FFF" },
  },
  
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "collapsed",
})(({ theme, collapsed }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(collapsed && {
    width: `calc(100% - ${50}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: "80px",
  }),
}));

const StyledSubMenuContent = styled(SubMenu, { shouldForwardProp: (prop) => prop !== 'collapsed' && prop !== 'firstLevel' && prop !== 'openWhenCollapsed',
 })(({ collapsed, firstLevel, openWhenCollapsed, theme }) =>({
  ...(collapsed && firstLevel && {
    position: "fixed",
    paddingLeft: 10,
    width: "200px",
    borderRadius: "red",
    height: 100,
    display: "block",     
    transition: {
      ...theme.transitions.create(["margin", "width"]),
      marginRight: 100,
    },
    
      visibility: openWhenCollapsed ? 'visible' : 'hidden',
      transform: "translateX(200)",
      // transform: "translate3d(200px)",

      marginRight: 20,

  })
    
      }));



// const CustomSubMenu = styled(SubMenu)({

  
// })
// const StyledSubMenuContent = styled('div', {
//   shouldForwardProp: (prop) => prop !== 'open' && prop !== 'openWhenCollapsed' && prop !== 'secondLevel' && prop !== 'collapsed' && prop !== 'defaultOpen',
// })<SubMenu>(({ theme, transitionDuration, secondLevel, collapsed, defaultOpen, openWhenCollapsed }) => ({
//   display: 'none',
//   overflow: 'hidden',
//   zIndex: theme.zIndex.appBar,
//   transition: `height ${transitionDuration}ms`,
//   backgroundColor: theme.palette.background.paper,

//   ...(secondLevel && collapsed && {
//     boxShadow: theme.shadows[3],
//   }),

//   ...(defaultOpen && {
//     height: 'auto',
//     display: 'block',
//   }),

//   ...(collapsed && secondLevel
//     ? {
//         position: 'fixed',
//         paddingLeft: '20px',
//         width: '200px',
//         borderRadius: theme.shape.borderRadius,
//         height: 'auto!important',
//         display: 'block!important',     
//         transition: 'none!important',     
//         visibility: openWhenCollapsed ? 'visible' : 'hidden',
//       }
//     : {
//         position: 'static!important',
//         transform: 'none!important',
//       }),

//   // Apply provided custom styling
//   ...rootStyles,
// }));

// const SubMenuContent = styled(SubMenu)(
//   ({ theme, collapsed }) => ({
//     transition: theme.transitions.create(['transform', 'inset']),
//     ...(collapsed && {
//       transform: 'translateX(100px)', 
//       inset: '10px',
//       }),
    
//   }),
// );

// const StyledSubMenu = styled('div')(({ theme, collapsed }) => ({
//   transition: theme.transitions.create(['transform', 'margin']),
//   // اعمال استایل‌های متفاوت بسته به اینکه سایدبار کلاپس شده است یا خیر
//   ...(collapsed
//     ? {
//         transform: 'translateX(-100%)', //فرض کنید می‌خواهید منو به اندازه 100% از چپ به طرف داخل "کشیده" شود
//         marginLeft: '0', // از '"inset"` به عنوان مثال برای تغییر margin-left استفاده می‌کنیم
//       }
//     : {
//         transform: 'translateX(0)',
//         marginLeft: theme.spacing(2), // MUI spacing API را برای ایجاد coherence در طرح استفاده می‌کنیم
//       }),
// }));


// const element = document.getElementById('yourElementId');
// element.setAttribute('data-popper-placement', 'top-start');

const HomeDashboard = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = Cookies.get('access_token');
    const refreshToken = Cookies.get('refresh_token');

    if (!accessToken || !refreshToken) {
      navigate('/eboo');
    }
  }, [navigate]);
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);

  const [openToolTip, setOpenToolTip] = useState(false);

  const handleTooltipClose = () => {
    setOpenToolTip(false);
  };

  const handleTooltipOpen = () => {
    setOpenToolTip(true);
  };

 

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          direction: "rtl",
          background: "linear-gradient(to right, #32cafe, #9f78ff);",
          width: collapsed ? "calc(100% - 80px)" : "calc(100% - 250px)",
          marginRight: collapsed ? "80px" : "250px",
          transition: " 0.5s",
          
        }}
        open={open}
      >
        <Toolbar
          sx={{
            "@media all": {
              minHeight: 100,
            },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton disableRipple onClick={() => setCollapsed(!collapsed)}>
            <MenuIcon sx={{ color: "#fff" }} />
          </IconButton>

          <Box>
            <IconButton disableRipple sx={{ color: "#FFF" }}>
              <Badge
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                showZero
                badgeContent={0}
                color="primary"
              >
                <FiBell style={{ fontSize: "1.8rem", cursor: "pointer" }} />
              </Badge>
            </IconButton>
            <ClickAwayListener onClickAway={handleTooltipClose}>
              <LightTooltip
                onClose={handleTooltipClose}
                open={openToolTip}
                // disableFocusListener
                disableHoverListener
                disableTouchListener
                title={
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#6b6f80",
                        fontWeight: 700,
                        p: "5px",
                      }}
                    >
                      👋🏼🙋🏿‍♂️
                    </Typography>
                    <Divider
                      variant="fullWidth"
                      sx={{
                        "&.MuiDivider-root": {
                          border: "2px solid rgba(0, 0, 0, 0.12)",
                        },
                        my: "2px",
                      }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        p: "10px 20px",
                        cursor: "pointer",
                        ":hover": { background: "rgba(173, 176, 203, 0.2)" },
                      }}
                    >
                      <FiUser
                        style={{ marginLeft: "10px", fontSize: "18px" }}
                      />
                      <Typography
                        sx={{
                          fontFamily: "Vazir",
                          fontSize: "14px",
                          color: "#2a2e30",
                        }}
                      >
                        ویرایش مشخصات
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        p: "10px 20px",
                        cursor: "pointer",
                        ":hover": { background: "rgba(173, 176, 203, 0.2)" },
                      }}
                    >
                      <FiMail
                        style={{ marginLeft: "10px", fontSize: "18px" }}
                      />
                      <Typography
                        sx={{
                          fontFamily: "Vazir",
                          fontSize: "14px",
                          color: "#2a2e30",
                        }}
                      >
                        {" "}
                        صندوق پیامهای من
                      </Typography>
                    </Box>
                    <Divider
                      variant="fullWidth"
                      sx={{
                        "&.MuiDivider-root": {
                          border: "2px solid rgba(0, 0, 0, 0.12)",
                        },
                        my: "2px",
                      }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        p: "10px 20px",
                        cursor: "pointer",
                        ":hover": { background: "rgba(173, 176, 203, 0.2)" },
                      }}
                    >
                      <FiPower
                        style={{ marginLeft: "10px", fontSize: "18px" }}
                      />
                      <Typography
                        sx={{
                          fontFamily: "Vazir",
                          fontSize: "14px",
                          color: "#2a2e30",
                        }}
                      >
                        {" "}
                        خروج
                      </Typography>
                    </Box>
                  </Box>
                }
              >
                <IconButton
                  onClick={handleTooltipOpen}
                  disableRipple
                  sx={{ color: "#FFF" }}
                >
                  <FiUser
                    style={{
                      border: "3px solid #FFF",
                      borderRadius: "50%",
                      fontSize: "1.8rem",
                      margin: "0 30px",
                      cursor: "pointer",
                    }}
                  />
                </IconButton>
              </LightTooltip>
            </ClickAwayListener>

            <Tooltip
              title={
                <Typography sx={{ fontFamily: "Vazir", fontSize: "12px" }}>
                  بازگشت به صفحه اصلی سایت
                </Typography>
              }
              arrow
            >
              <IconButton disableRipple sx={{ color: "#FFF" }}>
                <FiHome style={{ fontSize: "1.8rem", cursor: "pointer" }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      <div style={{ display: "flex" }}>
        <Sidebar
          rootStyles={{
            [`.${menuClasses.icon}`]: {
              boxShadow: "0 0 10px rgba(0,0,0,.12)",
              background: "#FFF",
              borderRadius: "12%",
              width: "40px",
              height: "40px",
              color: "#2b345f",
              marginLeft: "20px",

            },
            // [`.${sidebarClasses.container}`]: { ["." + menuClasses.subMenuContent]:{/*transform: "translate(0px)"*/
          // }}
                          
              
           
          }}
          image={BackDashboard}
          collapsedWidth="80px"
          style={{ minHeight: "100vh", transition: " 0.5s", }}
   
          collapsed={collapsed}

        >
          <Menu
            menuItemStyles={{
              root: {
                margin: "25px 0",
                color: "#2b345f",
                // ":hover": {
                //   "& .MuiTypography-root": {
                //     transition: "margin 0.4s ease-in-out",
                //     marginRight: 4,
                //   },
                // },
              },
              button: ({ level, active }) => {
                if (level === 0 ) {
                  return {
                    backgroundColor: active ? "#e6e6e68f" : null,
                    borderRight: active ? "5px solid #ed656d" : null,
                    color: active ? "#ed656d" : null,
                    [`.${menuClasses.icon}`]: {
                      color: active ? "#ed656d" : null,
                    },
                    
                    "&:hover": {
                      backgroundColor: active ? "#e6e6e68f" : "transparent",
                      color: "#ed656d",
                      [`.${menuClasses.icon}`]: {
                        color: "#ed656d",
                        borderRadius: "12%",
                        boxShadow: "0 0 15px  rgba(237, 101, 109, .4)",
                      },
                      "& .MuiTypography-root": {
                        transition: "margin 0.4s ease-in-out",
                        marginRight: 4,
                      },
                     
                    },
                  };
                }
                else if (level ===  1){
                      return{
                      color: active ? "#ed656d" : null,
                      // borderLeft: active ? "5px solid #ed656d" : null,
                      ["." + menuClasses.prefix]: {color: active ?"#ed656d" : null,},
                      "&:hover":{
                        transform: "translateX(5px)",
                        // borderLeft:  "5px solid #ed656d" ,
                        ["." + menuClasses.prefix]: {color:"#ed656d",},}}
                }
              },
              StyledSubMenuContent:{
                
                                // margin:collapsed ? "100px" :0 ,
                                ["." + menuClasses.subMenuContent]:{
                                  
                              },
                              // "& .ps-submenu-content":{boxShadow:collapsed ? "red" :"blue",  transform: "translateX(20)",},

                                
              },
              
            }}
          >
            <MenuItem
              active={location.pathname === "/eboo/dashboard" ? true : false}
              component={<Link to="/eboo/dashboard" />}
              style={{ padding: "0 10px" }}
              icon={<FiHome />}
            >
              {" "}
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  fontFamily: "Vazir",
                  textAlign: "right",
                }}
              >
                داشبورد
              </Typography>
            </MenuItem>
            <StyledSubMenuContent
          firstLevel={true} openWhenCollapsed={true} collapsed={false}
// menuItemStyles={{
  
//   button: ({ level, active }) => {
//     if (level === 0) {
//       return {
        
//         ["." + menuClasses.menuItemRoot]: {
//           color: active ? "#ed656d" : null,
//           borderRight: active ? "5px solid #ed656d" : null,
                    
//         },

//       };
//     }
//   },
                        
// }}
              label={
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "16px",
                    fontFamily: "Vazir",
                    textAlign: "right",
                  }}
                >
                  سفارشات من
                </Typography>
              }
              style={{ padding: "0 10px",
              // "& .ps-submenu-content":{boxShadow:collapsed ? "red" :"blue",  transform: "translateX(20)",},
         
            }}
              icon={<FiBriefcase />}
                              
              rootStyles={{
               
                // transform:collapsed ? "translate(0px,0px)":"auto",

                // [`.${sidebarClasses.collapsed}`]: { [`.${menuClasses.subMenuContent}`]:{backgroundColor:"red"}},
                ["." + menuClasses.subMenuContent]: {
                  backgroundColor: collapsed ? 'white' : '#e2e2e29c',
                  // transform: collapsed ? "translateY(15px)": null ,
                  width:collapsed ? "224px" :"auto" ,
                  // transform:collapsed? "translate3d(-85px, 100px, 10px)":"none",
                  // margin:collapsed ? "100px" :0 ,
                  // backgroundColor: "#e2e2e29c",
                  // position:collapsed? "relative":"null",
                  // top:"1000px",
                  ":hover":{[`.${menuClasses.button}`]:{backgroundColor:"transparent",}}
                },
                // [`.${menuClasses.subMenuContent}`]:{},
              //   ["&>." + menuClasses.subMenuRoot]:{ transform: collapsed ? "translateY(25px)": null ,
              // },
                
                // ["." + menuClasses.menuItemRoot]: { padding: 0, margin: 0, },
                
                ["." + menuClasses.prefix]: {color:"transparent",fontSize:35},
                ["." + menuClasses.menuItemRoot]: {
                  

                  ":hover": {
                    // backgroundColor: "none",
                    // transform: "translateX(5px)",
                    // borderRight:"6px solid  #ed656d",

                    


                  },
                  padding: 0, margin: 0,
                    
                },
                ["& > ." + menuClasses.button]: {  },
                [`.${menuClasses.SubMenuExpandIcon}`]:{transform: "rotate(180deg)", margin:"15px 0 0 10px" },
              //   [`.${menuClasses.button}`]:{":hover":{backgroundColor:"transparent",
              // },    },
             
              }}
              // menuItemStyles={{
              //   button: ({ level, active }) =>{ if (level === 0){return{
              //      borderLeft:active ? "5px solid #ed656d" : null, 
              //     color: active ? "#ed656d" : null,
                 
              //   }}}
              // }}
            
            >
              <MenuItem
                       
             prefix="•"
              active={location.pathname === "/eboo/dashboard/Orders/Type" ? true : false}
              component={<Link to="/eboo/dashboard/Orders/Type" />}
 >                 

                {" "}
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "14px",
                    fontFamily: "Vazir",
                    textAlign: "right",
                    p: "0 50px",
                  }}
                >
                  {" "}
                  سفارشات تایپ
                </Typography>{" "}
              </MenuItem>
              <MenuItem  
                           prefix="•"

                            active={location.pathname === "/eboo/dashboard/Orders/Translate" ? true : false}

              component={<Link to="/eboo/dashboard/Orders/Translate" />} >
                {" "}
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "14px",
                    fontFamily: "Vazir",
                    textAlign: "right",
                    p: "0 50px",
                  }}
                >
                  {" "}
                  سفارشات ترجمه
                </Typography>{" "}
              </MenuItem>
              <MenuItem              prefix="•"

                                          active={location.pathname === "/eboo/dashboard/Orders/Editing" ? true : false}

              component={<Link to="/eboo/dashboard/Orders/Editing" />} >
                {" "}
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "14px",
                    fontFamily: "Vazir",
                    textAlign: "right",
                    p: "0 50px",
                  }}
                >
                  {" "}
                  سفارشات ویراستاری
                </Typography>{" "}
              </MenuItem>
              <MenuItem 
                           prefix="•"

                                                        active={location.pathname === "/eboo/dashboard/Orders/Powerpoint" ? true : false}

              component={<Link to="/eboo/dashboard/Orders/Powerpoint" />}>
                {" "}
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "14px",
                    fontFamily: "Vazir",
                    textAlign: "right",
                    p: "0 50px",
                  }}
                >
                  {" "}
            سفارشات پاورپوینت
                </Typography>{" "}
              </MenuItem>
            </StyledSubMenuContent>

            <MenuItem
              active={
                location.pathname === "/eboo/dashboard/Tickets" ? true : false
              }
              component={<Link to="/eboo/dashboard/Tickets" />}
              style={{ padding: "0 10px" }}
              icon={<FiMail />}
            >
              {" "}
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  fontFamily: "Vazir",
                  textAlign: "right",
                }}
              >
                {" "}
                پیامها
              </Typography>{" "}
            </MenuItem>
            <MenuItem
              active={
                location.pathname === "/eboo/dashboard/EditProfile"
                  ? true
                  : false
              }
              component={<Link to="/eboo/dashboard/EditProfile" />}
              style={{ padding: "0 10px" }}
              icon={<FiEdit />}
            >
              {" "}
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  fontFamily: "Vazir",
                  textAlign: "right",
                }}
              >
                {" "}
                ویرایش اطلاعات
              </Typography>{" "}
            </MenuItem>
            <MenuItem
              active={location.pathname === "/eboo" ? true : false}
              component={<Link to="/eboo" />}
              style={{ padding: "0 10px" }}
              icon={<FiLogOut />}
            >
              {" "}
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  fontFamily: "Vazir",
                  textAlign: "right",
                }}
              >
                {" "}
                خروج
              </Typography>{" "}
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
};

export default HomeDashboard;
