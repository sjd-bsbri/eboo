import { FiberManualRecord } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
// import CountUp from "react-countup";
import CustomNumeralNumericFormat from "../helpers/PersianNumber";

const IconCountUpHeader = () => {
  return (
    <Box
      className="box1"
      sx={{
        mb: -15,
        width: "50%",

        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Box className="box" sx={{ display: "flex" }}>
        {/* <CountUp
          className="typo"
          start={0}
          end={7000}
          duration={1}
          style={{ fontSize: 14 }}
        /> */}
        <CustomNumeralNumericFormat
        className="typo"
          value={4321}
          style={{ fontSize: 14, fontFamily: "YekanBakh",color:"#222831" }}
        />

        <Typography
          className="typo"
          variant="caption"
          color="text.primary"
          sx={{ ml: 0.5 }}
        >
          کاربر عضو شده
        </Typography>
      </Box>
      <FiberManualRecord
        className="dot"
        sx={{ fontSize: 10, color: "#666AF6", mb: 1 }}
      />

      <Box className="box" sx={{ display: "flex" }}>
        {/* <CountUp
          className="typo"
          start={0}
          end={12000}
          duration={1}
          style={{ fontSize: 14 }}
        /> */}
        <CustomNumeralNumericFormat
        className="typo"
          value={4321}
          style={{ fontSize: 14, fontFamily: "YekanBakh",color:"#222831" }}
        />

        <Typography
          className="typo"
          variant="caption"
          color="text.primary"
          sx={{ ml: 0.5 }}
        >
          تبدیل موفق{" "}
        </Typography>
      </Box>
      <FiberManualRecord
        className="dot"
        sx={{ fontSize: 10, color: "#666AF6", mb: 1 }}
      />

      <Box className="box" sx={{ display: "flex" }}>
        {/* <CountUp
          className="typo"
          start={0}
          end={1}
          duration={1}
          style={{ fontSize: 14 }}
        /> */}

<CustomNumeralNumericFormat
        className="typo"
          value={4321}
          style={{ fontSize: 14, fontFamily: "YekanBakh",color:"#222831" }}
        />

        <Typography
          className="typo"
          variant="caption"
          color="text.primary"
          sx={{ ml: 0.5 }}
        >
          سال فعالیت{" "}
        </Typography>
      </Box>
    </Box>
  );
};

export default IconCountUpHeader;
