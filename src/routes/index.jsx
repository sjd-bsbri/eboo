import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../components/NotFound";
import MainLayout from "../layouts/MainLayout";
import {
  TypeServices,
  TranslateServices,
  PowerpointServices,
  EditingServices,
  ContactUsServices,
} from "../pages";
import Tickets from "../components/dashboard/Tickets";
import HomeDashboard from "../components/dashboard/HomeDashboard";
import EditProfile from "../components/dashboard/EditProfile";
import Dashboard from "../components/dashboard/Dashboard";
import { Box } from "@mui/material";
import OrderTypeDash from "../components/dashboard/OrderTypeDash";
import OrderTranslateDash from "../components/dashboard/OrderTranslateDash";
import OrderEditingDash from "../components/dashboard/OrderEditingDash";
import OrderPowerpointDash from "../components/dashboard/OrderPowerpointDash";

export const router = createBrowserRouter([
  {
    path: "/eboo",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    element: (
      <Box sx={{ display: "flex" }}>
        <HomeDashboard />

        <Outlet />
      </Box>
    ),

    children: [
      {
        path: "/eboo/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/eboo/dashboard/Tickets",

        element: <Tickets />,
      },
      {
        path: "/eboo/dashboard/EditProfile",
        element: <EditProfile />,
      },
      {
        path: "/eboo/dashboard/Orders/Type",
        element: <OrderTypeDash />,
      },
      {
        path: "/eboo/dashboard/Orders/Translate",
        element: <OrderTranslateDash />,
      },
      {
        path: "/eboo/dashboard/Orders/Editing",
        element: <OrderEditingDash />,
      },
      {
        path: "/eboo/dashboard/Orders/Powerpoint",
        element: <OrderPowerpointDash />,
      },
    ],
  },

  {
    path: "/eboo/خدمات-تایپ",
    element: (
      <MainLayout>
        {" "}
        <TypeServices />{" "}
      </MainLayout>
    ),
  },
  {
    path: "/eboo/خدمات-ترجمه",
    element: (
      <MainLayout>
        {" "}
        <TranslateServices />{" "}
      </MainLayout>
    ),
  },
  {
    path: "/eboo/خدمات-پاورپوینت",
    element: (
      <MainLayout>
        {" "}
        <PowerpointServices />{" "}
      </MainLayout>
    ),
  },
  {
    path: "/eboo/خدمات-ویراستاری",
    element: (
      <MainLayout>
        {" "}
        <EditingServices />{" "}
      </MainLayout>
    ),
  },
  {
    path: "/eboo/تماس-باما",
    element: (
      <MainLayout>
        {" "}
        <ContactUsServices />{" "}
      </MainLayout>
    ),
  },
]);
