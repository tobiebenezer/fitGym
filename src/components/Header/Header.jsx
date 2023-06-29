import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from "../../assets/bars.png";
import { useState } from 'react';
import {Link}from 'react-scroll'


function Header() {
  const isMobile = window.innerWidth <= 768 ? true : false;
  const [isMenuOpen, setIsMenuOpened] = useState(false);
  return (
    <div className="header" id='header'>
      <img src={Logo} alt="logo" className="logo" />
      {isMenuOpen === false && isMobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setIsMenuOpened(!isMenuOpen)}
        >
          <img
            src={Bars}
            alt="menu"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li >
            <Link
              onClick={() => setIsMenuOpened(!isMenuOpen)}
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsMenuOpened(!isMenuOpen)}
              to="programs"
              spy={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsMenuOpened(!isMenuOpen)}
              to="why-us"
              spy={true}
              smooth={true}
            >
              Why Us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsMenuOpened(!isMenuOpen)}
              to="plans"
              spy={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsMenuOpened(!isMenuOpen)}
              to="testimonials"
              spy={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header