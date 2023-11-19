import Header from "./components/Header";
import MainLayout from "./layouts/MainLayout";
import MainHeader from "./components/MainHeader";
import SiteSpecifications from "./components/SiteSpecifications";
import Orders from "./components/Orders";

const App = () => {
  return (
    <>
      <MainLayout>
        <Header />
        <MainHeader />
        <SiteSpecifications/>
        <Orders/>
      </MainLayout>
    </>
  );
};

export default App;
