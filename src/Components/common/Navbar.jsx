import { FaDownload } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../public/ReactDeveloper.png";
import { useContext } from "react";
import { NavigateContext } from "../../context/NavigateProvider";

const Navbar = () => {
  const { scrollToAbout, homeRef, aboutRef, skillRef, contactRef, portfolioRef } =
    useContext(NavigateContext);
  const location = useLocation();
  const homeDirectory = location.pathname === "/";
  console.log(homeDirectory);
  const links = (
    <>
      <div className="flex gap-5 text-lg flex-col lg:flex-row">
        <NavLink onClick={() => scrollToAbout(homeRef)} to="/">
          Home
        </NavLink>
        <NavLink onClick={() => scrollToAbout(aboutRef)}>About</NavLink>
        <NavLink onClick={() => scrollToAbout(skillRef)}>Skills</NavLink>
        <NavLink onClick={() => scrollToAbout(portfolioRef)}>Portfolio</NavLink>
        {!homeDirectory ? (
          <NavLink to="/contact">Contact</NavLink>
        ) : (
          <NavLink onClick={() => scrollToAbout(contactRef)}>Contact</NavLink>
        )}
      </div>
    </>
  );
  return (
    <div className="bg-zinc-800 bg-opacity-90 z-20 top-0 fixed w-full text-white py-2 shadow-lg">
      <div className="navbar max-w-screen-2xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link onClick={() => scrollToAbout(homeRef)} to="/">
            <img className="w-64" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a
            href="./cv.pdf"
            title="Download CV pdf"
            download={"rasel_mridha_cv.pdf"}
            className="btn btn-secondary"
          >
            Download CV <FaDownload />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
