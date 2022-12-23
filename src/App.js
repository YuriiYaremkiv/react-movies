import { Header } from "./layout/Header";
import { Main } from "./layout/Main";
import { Footer } from "./layout/Footer";
import { Movies } from "./components/Movies";

export const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Movies />
      <Footer />
    </>
  );
};

export default App;
