import {
  KeyboardArrowDownRounded,
  MenuOpenRounded,
  PersonOutlineRounded,
} from "@mui/icons-material";
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
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import { theme } from "../layouts/theme/theme";

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
  const isMdUp = useMediaQuery(theme.breakpoints.up("940"));
  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false);
    }
  }, [isMdUp]);

  return (
    <>
      <AppBar
        position="static"
        sx={{
          px:2,py:1,
          backgroundColor: "#FCFCFC",
          
          [theme.breakpoints.up("940")]: {
            ".Fab": {
              display: "none",
            },
            ".person": {
              display: "none",
            },
          },
          [theme.breakpoints.down("940")]: {
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
            ".typo": { fontSize: "0.8rem",p:0 },
            ".fabIcon": {
              fontSize: "1.2rem",
              m:0
            },
            ".Fab":{m:0},
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
            <Link href="#" underline="none">
              <Typography
                className="typo"
                color="text.primary"
                sx={{ fontSize: "1.2rem", pl: 2 }}
              >
                کافی نت آنلاین
              </Typography>
            </Link>

            <Link
              underline="none"
              className="links"
              href="#"
              variant="caption"
              color="text.primary"
              sx={{
                pl: 8,
                "&.MuiLink-root": {
                  fontSize: "0.7rem",

                  "&:hover": {
                    color: "primary.main",
                  },
                },
              }}
            >
<Typography variant="caption">خانه</Typography>              
            </Link>
            <Link
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              underline="none"
              className="links"
              href="#"
              variant="caption"
              color="text.primary"
              sx={{
                px: 8,
                display:"flex",

                "&.MuiLink-root": {
                  fontSize: "0.7rem",

                  "&:hover": {
                    color: "primary.main",
                  },
                },
              }}
            >
              <AiOutlineAppstore
                style={{ verticalAlign: "middle", fontSize: "small" }}
              />
<Typography variant="caption">خدمات</Typography>              
              <KeyboardArrowDownRounded
                sx={{ fontSize: 20 }}
              />
            </Link>
            <Menu
              sx={{
                "& .MuiMenu-paper": { borderRadius: "0 0 20px 20px", px:3.5 ,py:2 },
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
                  خدمات تایپ
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
                  خدمات ترجمه
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
                  خدمات پاورپوینت
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
                  خدمات ویراستاری
                </Typography>
              </MenuItem>
            </Menu>

            <Link
              underline="none"
              className="links"
              href="#"
              variant="caption"
              color="text.primary"
              sx={{
                "&.MuiLink-root": {
                  fontSize: "0.7rem",
                  "&:hover": {
                    color: "primary.main",
                  },
                },
                pr: 8,
              }}
            >
<Typography variant="caption">تعرفه قیمت ها</Typography>              
            </Link>

            <Link
              underline="none"
              className="links"
              href="#"
              variant="caption"
              color="text.primary"
              sx={{
                alignItems: "center",
                "&.MuiLink-root": {
                  fontSize: "0.7rem",
                  "&:hover": {
                    color: "primary.main",
                  },
                },
              }}
            >
<Typography variant="caption">تماس با ما</Typography>              
            </Link>
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
          <Link
            underline="none"
            href="#"
            variant="caption"
            color="text.primary"
            sx={{
              m: 2,

              "&.MuiLink-root": {
                fontSize: "0.7rem",
                "&:hover": {
                  color: "primary.main",
                },
              },
            }}
          >
            خانه
          </Link>
          <Divider variant="fullWidth" flexItem />

          <Link
            underline="none"
            href="#"
            variant="caption"
            color="text.primary"
            sx={{
              m: 2,

              "&.MuiLink-root": {
                fontSize: "0.7rem",
                "&:hover": {
                  color: "primary.main",
                },
              },
            }}
          >
            خدمات
          </Link>
          <Divider variant="fullWidth" flexItem />
          <Link
            underline="none"
            href="#"
            variant="caption"
            color="text.primary"
            sx={{
              m: 2,

              "&.MuiLink-root": {
                fontSize: "0.7rem",
                "&:hover": {
                  color: "primary.main",
                },
              },
            }}
          >
            تماس با ما
          </Link>
          <Divider variant="fullWidth" flexItem />

          <Link
            underline="none"
            href="#"
            variant="caption"
            color="text.primary"
            sx={{
              m: 2,

              "&.MuiLink-root": {
                fontSize: "0.7rem",
                "&:hover": {
                  color: "primary.main",
                },
              },
            }}
          >
            تعرفه قیمت ها
          </Link>
        </Drawer>
      </AppBar>
    </>
  );
};

export default Header;
