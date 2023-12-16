import MailIcon from "./mail.svg";
import FacebookIcon from "./facebook.svg";
import InstagramIcon from "./instagram.svg";
import LinkedInIcon from "./linkedin.svg";

import "./TopNavigation.css";

const TopNavigation = ({ toggleDarkMode, isDarkMode }) => (
  <nav className="topNavigation">
    <button className="darkModeToggle" onClick={toggleDarkMode}>
      <div
        className={`darkModeToggleButton ${isDarkMode ? "on" : "off"}`}
      ></div>
      <span>{isDarkMode ? "Turn off dark mode" : "Turn on dark mode"}</span>
    </button>
    <ul>
      <li>
        <a
          href="mailto:arkamitosen2020@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={MailIcon} alt="Send me an email" />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/arkamito.sen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={FacebookIcon} alt="Follow me on Facebook" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/a.r.k.a.mito_sen/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={InstagramIcon} alt="Follow me on Instagram" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/arkamito-sen-864690204/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedInIcon} alt="Connect with me on LinkedIn" />
        </a>
      </li>
    </ul>
  </nav>
);

export default TopNavigation;
