import Header from "./components/Header";
import MainLayout from "./layouts/MainLayout";
import MainHeader from "./components/MainHeader";

const App = () => {
  return (
    <>
      <MainLayout>
        <Header />
        <MainHeader />
      </MainLayout>
    </>
  );
};

export default App;
