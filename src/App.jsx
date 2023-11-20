import Header from "./components/Header";
import MainLayout from "./layouts/MainLayout";
import MainHeader from "./components/MainHeader";
import SiteSpecifications from "./components/SiteSpecifications";
import Orders from "./components/Orders";
import Conversion from "./components/Conversion";

const App = () => {
  return (
    <>
      <MainLayout>
        <Header />
        <MainHeader />
        <SiteSpecifications />
        <Orders />
        <Conversion />
      </MainLayout>
    </>
  );
};

export default App;
