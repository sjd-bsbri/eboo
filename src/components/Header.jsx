import {
  Close,
  KeyboardArrowDownRounded,
  MenuOpenRounded,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

import { BsTools } from "react-icons/bs";
import { AiOutlineAppstore } from "react-icons/ai";
import {
  AppBar,
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
import LoginButtonHeader from "./LoginButtonHeader";

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
const LinkRouterTranslateService = styled(Link)({
  ":hover": {
    color: "#00ADB5",
  },
  textDecoration: "none",
  color: "#222831",
});
const LinkRouterPowerpointService = styled(Link)({
  ":hover": {
    color: "#00ADB5",
  },
  textDecoration: "none",
  color: "#222831",
});
const LinkRouterEditingService = styled(Link)({
  ":hover": {
    color: "#00ADB5",
  },
  textDecoration: "none",
  color: "#222831",
});
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
          },
          [theme.breakpoints.down("md")]: {
            ".links": {
              display: "none",
            },
          },

          [theme.breakpoints.down("sm")]: {
            ".typo": { fontSize: "0.8rem", p: 0 },
            ".fabIcon": {
              fontSize: "1.2rem",
              m: 0,
            },
            ".Fab": { m: 0 },
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

          <LoginButtonHeader />
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
