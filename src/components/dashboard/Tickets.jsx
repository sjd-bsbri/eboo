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
  Button,
  Modal,
  TextField,
} from "@mui/material";
import styled from "@emotion/styled";
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import { Close } from "@mui/icons-material";
import { useState } from "react";
import { FiPlusCircle,FiPaperclip  } from "react-icons/fi";

const Tickets = () => {
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

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ "&.MuiBox-root": { background: "#f4f5fa", width: 1 } }}>
      <Box sx={{ transform: "translateY(110px)", mx: 4 }}>
        <Typography
          fontSize="16px"
          color="#464855"
          fontFamily="Vazir"
          sx={{ m: "10px", fontWeight: 700 }}
        >
          پیامها
        </Typography>

        <Button
          onClick={handleOpen}
          variant="contained"
          sx={{
            backgroundColor: "#5ed84f",
            ":hover": {
              backgroundColor: "#5ed84f",
              boxShadow:
                "0 1px 2px 0 rgba(94,216,79,.451),0 1px 3px 1px rgba(94,216,79,.302)",
            },
            color: "#fff",
            borderColor: "#5ed84f",
            fontFamily: "Vazir",
            boxShadow: "none",
            fontSize: "14px",
            borderRadius: "20px",
            p: "11px 21px",
            m: "18px 0",
            fontWeight: 800,
          }}
          startIcon={<FiPlusCircle style={{ marginLeft: "10px" }} />}
        >
          ارسال پیام جدید
        </Button>

        <Modal
          sx={{
            "& .MuiModal-backdrop": {
              backgroundColor: "rgba(3, 30, 49, 0.9)",
            },
          }}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          closeAfterTransition

          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: {
                appear: 500,
                enter: 500,
                exit: 500,
              },
            },
          }}
        >
          <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "450px",
              height: "450px",
              bgcolor: "#FFF",
              border: "1px solid transparent",
              outline: "none",
              borderRadius: "6px",
              p: ".5rem 10px 0",
              backgroundClip: "padding-box",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                // pt: "5px",
                p: "5px 10px 20px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  textAlign: "right",
                  color: "#656f80",
                  fontFamily: "Vazir",
                }}
              >
                {" "}
                ارسال پیام جدید
              </Typography>
              <Button
                onClick={handleClose}
                disableRipple
                sx={{
                  ":hover": {
                    backgroundColor: "transparent",
                  },
                  p: "14px",
                  m: "-25px",
                  color: "#4e4e4e",
                }}
              >
                <Close sx={{ ":hover": { color: "#000" }, fontSize: "18px" }} />
              </Button>
            </Box>

            <form autoComplete="off" style={{ padding: "5px 8px 14px" }}>
              <TextField
              
                select
                defaultValue="واحد مربوطه"
                SelectProps={{
                  native: true,
                }}
                sx={{
                  minWidth: 1,
                  background: "#FFF",
                  color: "#000",
                  fontSize: "14px",
                  
                  "& .MuiInputBase-root": {
                    fontSize: "14px",
                    borderRadius: "8px",
                    fontFamily: "Vazir",
                    
                  },
                  "& .MuiNativeSelect-icon": {
                    position:"absolute",
                    right:"400px",
                    
                  },
                  "& .MuiInputBase-input":{
                    p:"11px 21px"
                  }
                }}
              >
                <option
                  disabled
                  style={{
                    fontSize: "14px",
                    color: "grey",
                    fontFamily: "Vazir",
                  }}
                >
                  {" "}
                  {"واحد مربوطه"}
                </option>
                <option
                  style={{
                    fontSize: "14px",
                    color: "#4e5154",
                    fontFamily: "Vazir",
                  }}
                >
                  {"پشتیبانی"}
                </option>
                <option
                  style={{
                    fontSize: "14px",
                    color: "#4e5154",
                    fontFamily: "Vazir",
                  }}
                >
                  {"واحد مالی"}
                </option>
              </TextField>


               <TextField
        placeholder="موضوع"
        variant="outlined"
        margin="normal"
        fullWidth
        sx={{
        
          
        "& .MuiInputBase-root": {
          fontSize: "14px",
          borderRadius: "8px",
          fontFamily: "Vazir",
          
        },
        "& .MuiInputBase-input":{
          p:"11px 21px"
        }
      }}
      />


<TextField
        placeholder="شرح"
        variant="outlined"
        multiline
        rows={5}
        margin="normal"
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root":{
            p:0
        },
          "& .MuiInputBase-root": {
            fontSize: "14px",
            borderRadius: "8px",
            fontFamily: "Vazir",
          },
          "& .MuiInputBase-input":{
            p:"11px 21px"
          }
        }}
      />


<Box sx={{ pt: "10px" }}>
                  <Box
                    sx={{
                      background: "#f0f0f2",
                      p: "12px 0",
                      border: "1px solid #ced4da",
                      borderRadius: "5px",
                    }}
                  >
                    <Box
                      component="label"
                      disableRipple
                      sx={{
                        width: "fit-content",
                        overflow: "hidden",
                        color: "#fff",
                        height: "30px",
                        borderRadius: "5px",
                        m: "0 auto",
                        p: "3px 15px",
                        fontSize: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        background: "#EF4056",
                        ":hover": {  color: "#6b6f80" },
                      }}
                    >
                      <FiPaperclip   style={{ marginBottom: "5px",marginLeft:"5px" }} />
                      <Typography
                        sx={{ fontFamily: "YekanBakh", fontSize: "12px" }}
                      >
                        انتخاب فایل ها
                      </Typography>
                      <VisuallyHiddenInput1 type="file" multiple accept="*" />
                    </Box>
                  </Box>
                </Box>

                <Box  sx={{ display:"flex",alignItems:"center",justifyContent:"flex-end",p:"14px 0" }}>
                  <Button
                                  onClick={handleClose}

                    variant="contained"
                    sx={{
                      color: "#FFF",
                      borderRadius: "4px",
                      fontFamily:"Vazir",
                      fontSize:"14px",
                      fontWeight:900,
                      borderColor:"#6b6f80",
                      backgroundColor:"#6b6f80",
                      boxShadow:"none",
                      ":hover":{ borderColor:"#545764",
                      backgroundColor:"#5a5d6b",
                      boxShadow:"none",

                    },
                      p:"9px 20px",
                      m:"0 0 0 4px"
                    }}
                  >
بستن

                  </Button>

                  <Button
                    variant="contained"
                    sx={{
                      color: "#FFF",
                      borderRadius: "4px",
                      fontFamily:"Vazir",
                      fontSize:"14px",
                      fontWeight:900,
                      borderColor:"#6967ce",
                      backgroundColor:"#6967ce",
                      boxShadow:"none",
                      ":hover":{ borderColor:"#7473d2",
                      backgroundColor:"#7473d2",
                     boxShadow:"0 1px 2px 0 rgba(105,103,206,.451),0 1px 3px 1px rgba(105,103,206,.302)"
                    },
                      p:"9px 20px",
                      m:"0 4px 0 0"
                    }}
                  >
ثبت

                  </Button>
                </Box>

                
                 
                
            </form>

          </Box>

          </Fade>
          
        </Modal>

        <TableContainer
          component={Paper}
          sx={{
            direction: "rtl",
            boxShadow: "none",
            mb: "1rem",
            borderRadius: 2,
            width: "100%",
          }}
        >
          <Table sx={{ minWidth: 200 }}>
            <TableHead sx={{ borderBottom: "3px solid #dee2e6" }}>
              <TableRow sx={{ background: "#6967ce" }}>
                <TableCell
                  sx={{
                    textAlign: "center",
                    fontSize: "14px",
                    p: "15px",
                    color: "#fff",
                    fontFamily: "Vazir",
                    fontWeight: 700,
                  }}
                >
                  #
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: "1px solid #dee2e6",

                    textAlign: "center",
                    fontSize: "14px",
                    p: "15px",
                    color: "#fff",
                    fontFamily: "Vazir",
                    fontWeight: 700,
                  }}
                >
                  موضوع
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: "1px solid #dee2e6",

                    textAlign: "center",
                    fontSize: "14px",
                    p: "15px",
                    color: "#fff",
                    fontFamily: "Vazir",
                    fontWeight: 700,
                  }}
                >
                  بخش
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: "1px solid #dee2e6",

                    textAlign: "center",
                    fontSize: "14px",
                    p: "15px",
                    color: "#fff",
                    fontFamily: "Vazir",
                    fontWeight: 700,
                  }}
                >
                  وضیعت
                </TableCell>

                <TableCell
                  sx={{
                    borderRight: "1px solid #dee2e6",

                    textAlign: "center",
                    fontSize: "14px",
                    p: "15px",
                    color: "#fff",
                    fontFamily: "Vazir",
                    fontWeight: 700,
                  }}
                >
                  آخرین تغییرات
                </TableCell>

                <TableCell
                  sx={{
                    borderRight: "1px solid #dee2e6",

                    textAlign: "center",
                    fontSize: "14px",
                    p: "15px",
                    color: "#fff",
                    fontFamily: "Vazir",
                    fontWeight: 700,
                  }}
                >
                  عملیات
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  colSpan={6}
                  align="center"
                  sx={{
                    fontSize: "14px",
                    p: "10px",
                    color: "#6b6f80",
                    fontFamily: "Vazir",
                  }}
                >
                  داده ای در جدول وجود ندارد
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Tickets;
