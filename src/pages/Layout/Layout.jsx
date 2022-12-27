import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { HomePage } from "../HomePage/HomePage";

import css from "./Layout.module.scss";

export const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <div className="container">
          <Header></Header>
        </div>
      </header>
      <main>
        <div className="container">
          <HomePage />
        </div>
      </main>
      <footer className={css.footer}>
        <div className="container">
          <Footer />
        </div>
      </footer>
    </>
  );
};
