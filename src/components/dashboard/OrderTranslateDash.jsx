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
const OrderTranslateDash = () => {
  return (
    <Box sx={{ "&.MuiBox-root": { background: "#f4f5fa", width: 1 } }}>
      <Box sx={{ transform: "translateY(150px)", mx: 4 }}>
        <Typography
          fontSize="16px"
          color="#464855"
          fontFamily="Vazir"
          sx={{ mb: "21px", fontWeight: 700 }}
        >
          سفارشات ترجمه من
        </Typography>

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
              <TableRow>
                <TableCell
                  sx={{
                    textAlign: "center",
                    fontSize: "14px",
                    p: "15px",
                    color: "#6b6f80",
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
                    color: "#6b6f80",
                    fontFamily: "Vazir",
                    fontWeight: 700,
                  }}
                >
                  زبان
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: "1px solid #dee2e6",

                    textAlign: "center",
                    fontSize: "14px",
                    p: "15px",
                    color: "#6b6f80",
                    fontFamily: "Vazir",
                    fontWeight: 700,
                  }}
                >
                  زمینه متن
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: "1px solid #dee2e6",

                    textAlign: "center",
                    fontSize: "14px",
                    p: "15px",
                    color: "#6b6f80",
                    fontFamily: "Vazir",
                    fontWeight: 700,
                  }}
                >
                  زمان تحویل{" "}
                </TableCell>

                <TableCell
                  sx={{
                    borderRight: "1px solid #dee2e6",

                    textAlign: "center",
                    fontSize: "14px",
                    p: "15px",
                    color: "#6b6f80",
                    fontFamily: "Vazir",
                    fontWeight: 700,
                  }}
                >
                  تاریخ ثبت{" "}
                </TableCell>

                <TableCell
                  sx={{
                    borderRight: "1px solid #dee2e6",

                    textAlign: "center",
                    fontSize: "14px",
                    p: "15px",
                    color: "#6b6f80",
                    fontFamily: "Vazir",
                    fontWeight: 700,
                  }}
                >
                  وضعیت{" "}
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
                  موردی وجود ندارد.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default OrderTranslateDash;
