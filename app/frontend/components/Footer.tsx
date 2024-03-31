import { Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
export default function Footer() {
  return (
    <footer>
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social-icon">
        <li className="social-icon__item">
          <FacebookIcon />
        </li>
        <li className="social-icon__item">
          <Twitter />
        </li>
        <li className="social-icon__item">
          <LinkedIn />
        </li>
        <li className="social-icon__item">
          <Instagram />
        </li>
      </ul>
      <ul className="menu">
        <li className="menu__item">
          <a className="menu__link" href="#">
            Home
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#">
            About
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#">
            Services
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#">
            Team
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#">
            Contact
          </a>
        </li>
      </ul>
      <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
    </footer>
  );
}
