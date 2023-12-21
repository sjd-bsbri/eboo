import { Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page" style={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h1">وای نه ! 😳</Typography>
      <Typography>
        صفحه ای که دنبالش هستی رو نمیتونم پیدا کنم. مطمئنی درست اومدی؟؟😎
      </Typography>
      <Typography>
        <i> {error.statusText || error.message} </i>
      </Typography>
    </div>
  );
};

export default NotFound;
