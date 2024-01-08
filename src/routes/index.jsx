import { createBrowserRouter } from "react-router-dom";
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
import Dashboard from "../components/dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/eboo",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/eboo/dashboard",
    element: <Dashboard />,
    
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
