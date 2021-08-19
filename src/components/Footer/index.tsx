import style from "./style.module.scss";

export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.contentFooter}>
        <div className={style.item}>
          <img src="/images/logo-footer.svg" alt="" />
          <ul>
            <li>Phone: +1-543-123-4567</li>
            <li>example@fylo.com</li>
          </ul>
        </div>
        <div className={style.item}>
          <nav>
            <a href="#">About Us</a>
            <a href="#">Jobs</a>
            <a href="#">Press</a>
            <a href="#">Blog</a>
          </nav>
        </div>
        <div className={style.item}>
          <nav>
            <a href="#">Contact Us</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
          </nav>
        </div>
        <div className={style.item}>
          <nav>
            <a href="#">Contact Us</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
