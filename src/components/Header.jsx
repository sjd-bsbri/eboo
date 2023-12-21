import {
  Close,
  KeyboardArrowDownRounded,
  MenuOpenRounded,
  PersonOutlineRounded,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

import { BsChatRightText, BsHouse, BsTools } from "react-icons/bs";
import { SlNotebook } from "react-icons/sl";
import { CiLogout } from "react-icons/ci";
import { AiOutlineAppstore } from "react-icons/ai";
import { CiBellOn } from "react-icons/ci";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Divider,
  Drawer,
  Fab,
  Menu,
  MenuItem,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { useEffect, useState } from "react";
import { theme } from "../layouts/theme/theme";
import ModalPriceForm from "./ModalPriceForm";
import CustomNumeralNumericFormat from "../helpers/PersianNumber";
import styled from "@emotion/styled";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-45%, -60%)",
  width: "450px",
  height: "550px",
  bgcolor: "#FFF",
  border: "none",
  outline: "none",
  borderRadius: "12px",
  p: "1rem 10px 0",
};
const LinkRouterService = styled(Link)({
  ":hover": {
    color: "#00ADB5",
  },
  textDecoration: "none",
  color: "#222831",
});
const LinkRouterTranslateService= styled(Link)({
  ":hover": {
    color: "#00ADB5",
  },
  textDecoration: "none",
  color: "#222831",
})
const LinkRouterPowerpointService= styled(Link)({
  ":hover": {
    color: "#00ADB5",
  },
  textDecoration: "none",
  color: "#222831",
})
const LinkRouterEditingService= styled(Link)({
  ":hover": {
    color: "#00ADB5",
  },
  textDecoration: "none",
  color: "#222831",
})
const LinkRouterLogo = styled(Link)({
  textDecoration: "none",
});
const LinkRouterHome = styled(Link)({
  textDecoration: "none",
  fontSize: "0.7rem",
  color: "#222831",
  paddingLeft: "64px",
  ":hover": { color: "#00adb5" },
});
const LinkRouterDrawer = styled(Link)({
  textDecoration: "none",
  fontSize: "0.7rem",
  color: "#222831",
  margin: "16px",
  ":hover": { color: "#00adb5" },
});
const LinkRouterServices = styled(Link)({
  textDecoration: "none",
  fontSize: "0.7rem",
  color: "#222831",
  padding: "0 64px",
  display: "flex",
  ":hover": { color: "#00adb5" },
});
const LinkRouterPrices = styled(Link)({
  textDecoration: "none",
  fontSize: "0.7rem",
  color: "#222831",
  paddingRight: "64px",
  ":hover": { color: "#00adb5" },
});

const LinkRouterHomeContactUs = styled(Link)({
  textDecoration: "none",
  fontSize: "0.7rem",
  color: "#222831",
  ":hover": { color: "#00adb5" },
});

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl2, setAnchorEl2] = useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const [visible, setVisible] = useState(true);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false);
    }
  }, [isMdUp]);

  const [openModal1, setOpenModal1] = useState(false);
  const handleOpenModal1 = () => setOpenModal1(true);
  const handleCloseModal1 = () => setOpenModal1(false);

  return (
    <>
      <AppBar
        position="static"
        sx={{
          px: 2,
          py: 1,
          backgroundColor: "#FCFCFC",

          [theme.breakpoints.up("md")]: {
            ".Fab": {
              display: "none",
            },
            ".person": {
              display: "none",
            },
          },
          [theme.breakpoints.down("md")]: {
            ".links": {
              display: "none",
            },
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
            ".typo": { fontSize: "0.8rem", p: 0 },
            ".fabIcon": {
              fontSize: "1.2rem",
              m: 0,
            },
            ".Fab": { m: 0 },
            ".bellIcon": { height: "1.4rem" },
            ".badge": { size: "small" },
          },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Fab
              className="Fab"
              onClick={handleDrawer}
              size="small"
              sx={{
                ml: 1,
                "&.MuiFab-root": {
                  backgroundColor: "#FCFCFC",
                  boxShadow: "none",
                },
              }}
            >
              <MenuOpenRounded
                className="fabIcon"
                sx={{ display: "flex", m: "0 auto" }}
              />
            </Fab>
            <LinkRouterLogo to={"/eboo"}>
              <Typography
                className="typo"
                color="text.primary"
                sx={{ fontSize: "1.2rem", pl: 2 }}
              >
                کافی نت آنلاین
              </Typography>
            </LinkRouterLogo>

            <LinkRouterHome to={"/eboo"} className="links">
              <Typography variant="caption">خانه</Typography>
            </LinkRouterHome>
            <LinkRouterServices
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className="links"
            >
              <AiOutlineAppstore
                style={{ verticalAlign: "middle", fontSize: "small" }}
              />
              <Typography variant="caption">خدمات</Typography>
              <KeyboardArrowDownRounded sx={{ fontSize: 20 }} />
            </LinkRouterServices>
            <Menu
              sx={{
                "& .MuiMenu-paper": {
                  borderRadius: "0 0 20px 20px",
                  px: 3.5,
                  py: 2,
                },
              }}
              elevation={3}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <Box sx={{ display: "flex", pl: 2 }}>
                <BsTools />
                <Typography sx={{ ml: 0.5 }}> خدمات</Typography>
              </Box>

              <Divider variant="fullWidth" />

              <MenuItem
                disableRipple
                onClick={handleClose}
                sx={{ pt: 2, ":hover": { background: "none" } }}
              >
                <Typography
                  variant="caption"
                  sx={{ ":hover": { color: "primary.main" } }}
                >
                  <LinkRouterService to={"/eboo/خدمات-تایپ"}>
                    {" "}
                    خدمات تایپ
                  </LinkRouterService>
                </Typography>
              </MenuItem>

              <MenuItem
                disableRipple
                onClick={handleClose}
                sx={{ ":hover": { background: "none" } }}
              >
                <Typography
                  variant="caption"
                  sx={{ ":hover": { color: "primary.main" } }}
                >
                  <LinkRouterTranslateService to={"/eboo/خدمات-ترجمه"}>
                    خدمات ترجمه
                  </LinkRouterTranslateService>
                </Typography>
              </MenuItem>
              <MenuItem
                disableRipple
                onClick={handleClose}
                sx={{ ":hover": { background: "none" } }}
              >
                <Typography
                  variant="caption"
                  sx={{ ":hover": { color: "primary.main" } }}
                >
                  <LinkRouterPowerpointService to={"/eboo/خدمات-پاورپوینت"}>
                    خدمات پاورپوینت{" "}
                  </LinkRouterPowerpointService>
                </Typography>
              </MenuItem>
              <MenuItem
                disableRipple
                onClick={handleClose}
                sx={{ ":hover": { background: "none" } }}
              >
                <Typography
                  variant="caption"
                  sx={{ ":hover": { color: "primary.main" } }}
                >
                  <LinkRouterEditingService to={"/eboo/خدمات-ویراستاری"}>
                    خدمات ویراستاری{" "}
                  </LinkRouterEditingService>
                </Typography>
              </MenuItem>
            </Menu>

            <LinkRouterPrices onClick={handleOpenModal1} className="links">
              <Typography variant="caption">تعرفه قیمت ها</Typography>
            </LinkRouterPrices>
            <Modal
              sx={{
                "& .MuiModal-backdrop,": {
                  backgroundColor: "rgba(153,153,153,0.2)",
                  backdropFilter: "blur(12px)",
                },
              }}
              open={openModal1}
              onClose={handleCloseModal1}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="modalPrice" sx={style}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    pt: "5px",
                    p: "5px 20px 20px",
                  }}
                >
                  <Typography sx={{ fontSize: "20px", textAlign: "right" }}>
                    {" "}
                    تعرفه قیمت ها
                  </Typography>
                  <Button
                    onClick={handleCloseModal1}
                    disableRipple
                    sx={{
                      ":hover": {
                        backgroundColor: "transparent",
                      },
                      p: "20px",
                      m: "-20px",
                      color: "#4e4e4e",
                    }}
                  >
                    <Close sx={{ ":hover": { color: "#000" } }} />
                  </Button>
                </Box>

                <Box sx={{ p: "2rem 1rem" }}>
                  <TableContainer
                    sx={{
                      direction: "rtl",
                      boxShadow: "none",
                      mb: "1rem",
                      border: "1px solid #dee2e6 ",
                      borderRadius: 0,
                    }}
                    component={Paper}
                  >
                    <Table sx={{ minWidth: 300 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell
                            sx={{
                              textAlign: "center",
                              fontSize: "20px",
                              p: "15px",
                              color: "#212529",
                            }}
                          >
                            قيمت به ازای هر صفحه
                          </TableCell>
                          <TableCell
                            sx={{
                              borderRight: "1px solid #dee2e6",
                              textAlign: "center",
                              fontSize: "20px",
                              p: "15px",
                              color: "#212529",
                            }}
                          >
                            صفحات
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell
                            sx={{
                              direction: "ltr",
                              textAlign: "center",
                              fontSize: "14px",
                              p: "15px",
                              color: "#212529",
                            }}
                          >
                            <CustomNumeralNumericFormat value={190} /> تومان
                          </TableCell>
                          <TableCell
                            sx={{
                              borderRight: "1px solid #dee2e6",
                              textAlign: "center",
                              fontSize: "14px",
                              p: "15px",
                              color: "#212529",
                            }}
                          >
                            از <CustomNumeralNumericFormat value={1} /> تا{" "}
                            <CustomNumeralNumericFormat value={20} /> صفحه{" "}
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell
                            sx={{
                              direction: "ltr",

                              textAlign: "center",
                              fontSize: "14px",
                              p: "15px",
                              color: "#212529",

                              backgroundColor: "rgb(246 246 246)",
                            }}
                          >
                            <CustomNumeralNumericFormat value={179} /> تومان
                          </TableCell>
                          <TableCell
                            sx={{
                              borderRight: "1px solid #dee2e6",
                              textAlign: "center",
                              fontSize: "14px",
                              p: "15px",
                              color: "#212529",
                              backgroundColor: "rgb(246 246 246)",
                            }}
                          >
                            از <CustomNumeralNumericFormat value={21} /> تا{" "}
                            <CustomNumeralNumericFormat value={50} /> صفحه{" "}
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell
                            sx={{
                              direction: "ltr",

                              textAlign: "center",
                              fontSize: "14px",
                              p: "15px",
                              color: "#212529",
                            }}
                          >
                            <CustomNumeralNumericFormat value={167} /> تومان{" "}
                          </TableCell>
                          <TableCell
                            sx={{
                              borderRight: "1px solid #dee2e6",
                              textAlign: "center",
                              fontSize: "14px",
                              p: "15px",
                              color: "#212529",
                            }}
                          >
                            از <CustomNumeralNumericFormat value={51} /> تا{" "}
                            <CustomNumeralNumericFormat value={100} /> صفحه{" "}
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell
                            sx={{
                              direction: "ltr",
                              textAlign: "center",
                              fontSize: "14px",
                              p: "15px",
                              color: "#212529",
                              borderBottom: 0,

                              backgroundColor: "rgb(246 246 246)",
                            }}
                          >
                            <CustomNumeralNumericFormat value={150} /> تومان{" "}
                          </TableCell>
                          <TableCell
                            sx={{
                              borderRight: "1px solid #dee2e6",
                              textAlign: "center",
                              fontSize: "14px",
                              p: "15px",
                              color: "#212529",
                              borderBottom: 0,

                              backgroundColor: "rgb(246 246 246)",
                            }}
                          >
                            از <CustomNumeralNumericFormat value={101} /> صفحه
                            به بالا{" "}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>

                  <ModalPriceForm />
                </Box>
              </Box>
            </Modal>

            <LinkRouterHomeContactUs to={"/eboo/تماس-باما"} className="links">
              <Typography variant="caption">تماس با ما</Typography>
            </LinkRouterHomeContactUs>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {visible ? (
              <Button
                className="Button1"
                onClick={() => setVisible(false)}
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
            ) : (
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
            )}
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
        </Toolbar>
        <Drawer
          variant="temporary"
          ModalProps={{
            keepMounted: true,
          }}
          open={drawerOpen}
          onClose={handleDrawer}
          aria-labelledby="drawer-title"
          aria-describedby="drawer-description"
          sx={{
            "& .MuiDrawer-paper": {
              width: "60%",
            },
          }}
        >
          <LinkRouterDrawer to={"/eboo"}>خانه</LinkRouterDrawer>
          <Divider variant="fullWidth" flexItem />

          <LinkRouterDrawer to={"/eboo"}>خدمات</LinkRouterDrawer>
          <Divider variant="fullWidth" flexItem />
          <LinkRouterDrawer to={"/eboo/تماس-باما"}>تماس با ما</LinkRouterDrawer>
          <Divider variant="fullWidth" flexItem />

          <LinkRouterDrawer to={"/eboo"}>تعرفه قیمت ها</LinkRouterDrawer>
        </Drawer>
      </AppBar>
    </>
  );
};

export default Header;
