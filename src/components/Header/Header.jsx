import { Navigation } from "../Navigation/Navigation";
import css from "./Header.module.scss";

export const Header = ({ children }) => {
  return (
    <nav className={css.nav}>
      <a href="!#" className={css.nav__logo}>
        React Movies
      </a>
      <Navigation
        className={css.nav__list}
        title="Films"
        list={["Популярні", "Зараз в ефірі", "Очікуванні", "Рейтингові"]}
      />
      <Navigation
        title="Serials"
        list={["Популярні", "Зараз в ефірі", "Очікуванні", "Рейтингові"]}
      />
      {children}
    </nav>
  );
};
