import { NavLink } from "react-router-dom";
import logo from "../../../public/ReactDeveloper.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useContext } from "react";
import { NavigateContext } from "../../context/NavigateProvider";
const Footer = () => {
  const { scrollToAbout, homeRef, aboutRef, skillRef, contactRef } =
    useContext(NavigateContext);
  return (
    <>
      <footer className="bg-base-300">
        <section className="footer max-w-screen-2xl mx-auto text-gray-400 p-10">
          <nav className="h-full flex flex-col justify-center">
            <img className="w-80" src={logo} alt="" />
          </nav>
          <nav>
            <h6 className="footer-title">Quick Access</h6>
            <div className="flex flex-col gap-2">
              <NavLink onClick={() => scrollToAbout(homeRef)} to="/">
                Home
              </NavLink>
              <NavLink onClick={() => scrollToAbout(aboutRef)}>About</NavLink>
              <NavLink onClick={() => scrollToAbout(skillRef)}>Skills</NavLink>
              <NavLink onClick={() => scrollToAbout(contactRef)}>Contact</NavLink>
            </div>
          </nav>
          <nav>
            <h6 className="footer-title">Address</h6>
            <a className="flex items-center gap-2">
              {" "}
              <span className="text-lime-500">
                <FaLocationDot />
              </span>{" "}
              Nilphamari, Rangpur, Bangladesh
            </a>
            <a className="flex items-center gap-2">
              {" "}
              <span className="text-lime-500">
                <MdEmail />
              </span>{" "}
              Raselmridha792@gmail.com
            </a>
            <a className="flex items-center gap-2">
              {" "}
              <span className="text-lime-500">
                <FaPhoneAlt />
              </span>{" "}
              +88016 4507 2790
            </a>
          </nav>
        </section>
      </footer>
    </>
  );
};

export default Footer;
