import css from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={css.footerCopyright}>
      <div className="container">
        © {new Date().getFullYear()} Copyright Text
        <a className="grey-text text-lighten-4 right" href="#!">
          More Links
        </a>
      </div>
    </div>
  );
};
