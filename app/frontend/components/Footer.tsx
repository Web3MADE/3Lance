import { Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import styles from "../styles/Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.waves}>
        <div className={styles.wave} id="wave1"></div>
        <div className={styles.wave} id="wave2"></div>
        <div className={styles.wave} id="wave3"></div>
        <div className={styles.wave} id="wave4"></div>
      </div>
      <ul className={styles["social-icon"]}>
        <li className={styles["social-icon__item"]}>
          <FacebookIcon />
        </li>
        <li className={styles["social-icon__item"]}>
          <Twitter />
        </li>
        <li className={styles["social-icon__item"]}>
          <LinkedIn />
        </li>
        <li className={styles["social-icon__item"]}>
          <Instagram />
        </li>
      </ul>
      <ul className={styles.menu}>
        <li className={styles["menu__item"]}>
          <a className={styles["menu__link"]} href="#">
            Home
          </a>
        </li>
        <li className={styles["menu__item"]}>
          <a className={styles["menu__link"]} href="#">
            About
          </a>
        </li>
        <li className={styles["menu__item"]}>
          <a className={styles["menu__link"]} href="#">
            Services
          </a>
        </li>
        <li className={styles["menu__item"]}>
          <a className={styles["menu__link"]} href="#">
            Team
          </a>
        </li>
        <li className={styles["menu__item"]}>
          <a className={styles["menu__link"]} href="#">
            Contact
          </a>
        </li>
      </ul>
      <p>&copy;2024 3Lance | All Rights Reserved</p>
    </footer>
  );
}
