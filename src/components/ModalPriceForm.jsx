import { Box, Button, Divider, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BsCalculator, BsXCircle } from "react-icons/bs";
import styled from "@emotion/styled";
import Grid from "@mui/material/Unstable_Grid2";
import CustomNumeralNumericFormat from "../helpers/PersianNumber";

const Input1 = styled("input")({
  borderRadius: "7px 0 0 7px",
  textAlign: "center",
  border: "1px solid #ced4da",
  ":focus": { border: "1px solid #006fff" },
  outline: 0,
  fontSize: "18px",
  letterSpacing: "2px",
  fontWeight: 500,
  color: "#495057",
});

const ModalPriceForm = () => {
  const [content1, setContent1] = useState();

  const [showHi, setShowHi] = useState();
  const [showModalErr, setShowModalErr] = useState(false);

  useEffect(() => {
    if (content1) {
      document.querySelector(".modalPrice").style.height = "600px";
    }
  }, [content1]);

  const handleClickInput = (e) => {
    e.preventDefault();

    if (isNaN(showHi) || showHi < 0) {
      showModal();
    } else {
      checkValue();
    }
  };
  let content;
  const checkValue = () => {
    const value = parseInt(showHi);

    if (value >= 1 && value <= 20) {
      content = (
        <Typography sx={{ fontSize: "15px", color: "#414141" }}>
          مبلغ قابل پرداخت برای تبدیل{" "}
          <CustomNumeralNumericFormat value={showHi} /> صفحه :{" "}
          <CustomNumeralNumericFormat
            thousandSeparator=","
            suffix={"تومان"}
            value={showHi * 190}
            style={{
              fontSize: "15px",
              fontFamily: "YekanBakh",
              color: "#0e469c",
            }}
          />
        </Typography>
      );
    } else if (value >= 21 && value <= 50) {
      content = (
        <Typography sx={{ fontSize: "15px", color: "#414141" }}>
          مبلغ قابل پرداخت برای تبدیل{" "}
          <CustomNumeralNumericFormat value={showHi} /> صفحه :{" "}
          <CustomNumeralNumericFormat
            thousandSeparator=","
            suffix={"تومان"}
            value={showHi * 179}
            style={{
              fontSize: "15px",
              fontFamily: "YekanBakh",
              color: "#0e469c",
            }}
          />
        </Typography>
      );
    } else if (value >= 51 && value <= 100) {
      content = (
        <Typography sx={{ fontSize: "15px", color: "#414141" }}>
          مبلغ قابل پرداخت برای تبدیل{" "}
          <CustomNumeralNumericFormat value={showHi} /> صفحه :{" "}
          <CustomNumeralNumericFormat
            thousandSeparator=","
            suffix={"تومان"}
            value={showHi * 167}
            style={{
              fontSize: "15px",
              fontFamily: "YekanBakh",
              color: "#0e469c",
            }}
          />
        </Typography>
      );
    } else if (value >= 101) {
      content = (
        <Typography sx={{ fontSize: "15px", color: "#414141" }}>
          مبلغ قابل پرداخت برای تبدیل{" "}
          <CustomNumeralNumericFormat value={showHi} /> صفحه :{" "}
          <CustomNumeralNumericFormat
            thousandSeparator=","
            suffix={"تومان"}
            value={showHi * 150}
            style={{
              fontSize: "15px",
              fontFamily: "YekanBakh",
              color: "#0e469c",
            }}
          />
        </Typography>
      );
    }
    setContent1(content);
  };

  const showModal = () => {
    setShowModalErr(true);
  };

  return (
    <Grid
      container
      sx={{
        background: "#f2f2f2",
        borderRadius: "5px",
        p: "20px 15px",
        mt: "30px",
        backgroundSize: "contian",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundImage: "none",
      }}
    >
      <Grid sx={{ p: 0 }} xs={12} sm={12} md={12} lg={12}>
        <Box sx={{ display: "flex", mb: "10px" }}>
          <BsCalculator
            style={{
              fontSize: "20px",
              marginLeft: "5px",
              color: "#212529",
            }}
          />
          <Typography sx={{ fontSize: "15px", color: "#212529" }}>
            تعداد صفحات فایل خود را جهت محاسبه وارد نمایید :
          </Typography>
        </Box>
        <Box>
          <form onSubmit={handleClickInput}>
            <Box sx={{ display: "flex", direction: "rtl" }}>
              <Box sx={{ display: "flex" }}>
                <Button
                  type="submit"
                  disableRipple
                  sx={{
                    borderRadius: "0 7px 7px 0",
                    color: "#FFF",
                    backgroundColor: "#007bff",
                    borderColor: "#007bff",
                    p: "7.5px 15px",
                    fontSize: "20px",
                    ":hover": { backgroundColor: "#004aff" },
                  }}
                >
                  محاسبه قیمت
                </Button>
              </Box>
              <Input1
                value={showHi}
                onChange={(e) => setShowHi(e.target.value)}
              />
            </Box>
          </form>
        </Box>
        {showModalErr && (
          <Modal
            sx={{
              "& .MuiModal-backdrop,": {
                backgroundColor: "rgba(153,153,153,0.2)",
                backdropFilter: "blur(12px)",
              },
            }}
            open={showModalErr}
            onClose={() => setShowModalErr(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-45%, -60%)",
                width: "350px",
                height: "350px",
                bgcolor: "#FFF",
                border: "none",
                outline: "none",
                borderRadius: "12px",
              }}
            >
              <Box
                sx={{
                  background: "#e85e6c",
                  borderRadius: "12px 12px 0 0",
                  p: "20px",
                  margin: "auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <BsXCircle
                  onClick={() => setShowModalErr(false)}
                  style={{
                    fontSize: "3rem",
                    color: "#FFF",
                    padding: "5px",
                    cursor: "pointer",
                  }}
                />
              </Box>

              <Box sx={{ p: "1.5rem" }}>
                <Typography
                  sx={{ fontSize: "34px", color: "#e85e6c", mb: "10px" }}
                >
                  خطا ...!
                </Typography>
                <Typography sx={{ fontSize: "18px", color: "#212529" }}>
                  تعداد صفحات را بطور صحیح وارد کنید
                </Typography>
              </Box>
              <Divider />
              <Box
                sx={{
                  p: "20px",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Button
                  onClick={() => setShowModalErr(false)}
                  disableRipple
                  sx={{
                    p: "7.5px 15px",
                    borderRadius: "7px",
                    border: "1px solid #dc3545",
                    color: "#dc3545",
                    ":hover": { backgroundColor: "#dc3545", color: "#FFF" },
                  }}
                >
                  <Typography sx={{ fontSize: "20px" }}>بستن</Typography>
                </Button>
              </Box>
            </Box>
          </Modal>
        )}
        {content1 && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              mt: "8px",
              p: "10px 0",
              background: "#FFF",
              borderRadius: "4px",
              border: "1px solid #ecf2f8",
            }}
          >
            {content1}
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default ModalPriceForm;
