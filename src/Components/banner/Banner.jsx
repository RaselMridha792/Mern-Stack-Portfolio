import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import banner from "../../assets/banner1.png";
import { useContext } from "react";
import { NavigateContext } from "../../context/NavigateProvider";
const Banner = () => {
  const {homeRef} = useContext(NavigateContext)
  return (
    <>
        <div ref={homeRef} className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row px-5 min-h-screen my-32 lg:my-5 items-center justify-between gap-10">
            <div className="lg:w-3/4">
              <div className="md:text-5xl text-3xl space-y-3">
                <h1 className="text-gray-600 text-5xl">Hello, I`m</h1>
                <p className="text-lime-400 font-bold">Rasel Mridha</p>
                <p>MERN Stack Enthusiast</p>
              </div>
              <p className="py-5 text-gray-500">
                Creating seamless and engaging web solutions with expertise in
                React, MongoDB, and Tailwind.
              </p>
              <div className="flex gap-5 py-5">
                <a
                  href="https://github.com/RaselMridha792"
                  target="blank"
                  className="hover:shadow-2xl hover:scale-110 hover:shadow-lime-400 duration-300 rounded-full"
                >
                  <p className="text-3xl border p-3 rounded-full border-gray-500 text-gray-500">
                    <FaGithub />
                  </p>
                </a>
                <a
                  href="https://www.facebook.com/rasel.mirdha.397"
                  target="blank"
                  className="hover:shadow-2xl hover:scale-110 hover:shadow-lime-400 duration-300 rounded-full"
                >
                  <p className="text-3xl border p-3 rounded-full border-gray-500 text-gray-500">
                    <FaFacebook />
                  </p>
                </a>
                <a
                  href="https://www.linkedin.com/in/raselmridha/"
                  target="blank"
                  className="hover:shadow-2xl hover:scale-110 hover:shadow-lime-400 duration-300 rounded-full"
                >
                  <p className="text-3xl border p-3 rounded-full border-gray-500 text-gray-500">
                    <FaLinkedin />
                  </p>
                </a>
              </div>
              <div>
                <button className="btn bg-lime-400 text-black hover:bg-lime-600">
                  Hire Me
                </button>
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
            <div className="flex lg:justify-end justify-center w-full">
              <img
                className="rounded-full lg:w-2/4 w-1/3 opacity-90"
                src={banner}
                alt=""
              />
            </div>
          </div>
        </div>
    </>
  );
};

export default Banner;
