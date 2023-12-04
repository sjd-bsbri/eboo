import Header from "./components/Header";
import MainLayout from "./layouts/MainLayout";
import MainHeader from "./components/MainHeader";
import SiteSpecifications from "./components/SiteSpecifications";
import Orders from "./components/Orders";
import BrainDescriptions from "./components/BrainDescriptions";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <MainLayout>
        <Header />
        <MainHeader />
        <SiteSpecifications />
        <Orders />
        <BrainDescriptions />
        <Footer />
      </MainLayout>
    </>
  );
};

export default App;
