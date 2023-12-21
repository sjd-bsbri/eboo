import MainLayout from "./layouts/MainLayout";
import MainHeader from "./components/MainHeader";
import SiteSpecifications from "./components/SiteSpecifications";
import Orders from "./components/Orders";
import BrainDescriptions from "./components/BrainDescriptions";

const App = () => {
  return (
    <>
      <MainLayout>
        <MainHeader />
        <SiteSpecifications />
        <Orders />
        <BrainDescriptions />
      </MainLayout>
    </>
  );
};

export default App;
