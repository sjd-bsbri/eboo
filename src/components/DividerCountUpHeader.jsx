import { Box, Divider, Typography } from "@mui/material";
import CountUp from 'react-countup';

const DividerCountUpHeader = () => {
  return (
    <Box
      className="box1"
      sx={{
        mb: -15,
        width: "50%",
        backgroundColor:"#FCFCFC",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Box className="box" sx={{ display: "flex" }}>
        <CountUp
          className="typo"
          start={0}
          end={7000}
          duration={1}
          style={{ fontSize: 14 }}
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
      <Divider 
        sx={{
          "&.MuiDivider-root": { borderColor: "#E9E9E9", borderWidth: 0.1 },
        }}
      />

      <Box className="box" sx={{ display: "flex" }}>
        <CountUp
          className="typo"
          start={0}
          end={12000}
          duration={1}
          style={{ fontSize: 14 }}
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
      <Divider
        sx={{
          "&.MuiDivider-root": { borderColor: "#E9E9E9", borderWidth: 0.1 },
        }}
      />

      <Box className="box" sx={{ display: "flex" }}>
        <CountUp
          className="typo"
          start={0}
          end={1}
          duration={1}
          style={{ fontSize: 14 }}
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

export default DividerCountUpHeader;
