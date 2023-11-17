import { AddRounded } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const PulseButtonHeader = () => {
  const VisuallyHiddenInput = styled("input")({
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
  return (
    <Button
      className="pulse"
      component="label"
      variant="contained"
      sx={{ borderRadius: 2,position:"absolute" ,left:"1rem"}}
      startIcon={<AddRounded sx={{ color: "#FFF", }} />}
    >
      <Typography color="#FFF" sx={{mt:"5px"}}>انتخاب فایل</Typography>

      <VisuallyHiddenInput type="file" multiple accept="*" />
    </Button>
  );
};

export default PulseButtonHeader;
