import { useContext } from "react";
import { FaCoffee, FaMusic, FaPenAlt, FaPlaneDeparture } from "react-icons/fa";
import { NavigateContext } from "../../context/NavigateProvider";

const AboutMe = () => {
  const {aboutRef} = useContext(NavigateContext)

  return (
    <>
      <div ref={aboutRef} className="bg-zinc-900 rounded-lg">
        <h1 className="text-3xl md:text-5xl text-lime-400 text-center pt-10 pb-5 uppercase font-bold">
          About me
        </h1>
        <hr className="border-lime-400 w-2/3 mx-auto" />
        <div className="flex py-20 flex-col lg:flex-row lg:gap-40 gap-10 justify-evenly items-center px-5">
          <div className="flex-grow-1">
            <div className="relative px-5">
              <div className="z-10 relative">
                <img
                  className="w-[240px]"
                  src="https://i.ibb.co.com/VJTST1M/Raselmridha-3.jpg"
                  alt=""
                />
              </div>
              <div className="h-72 -top-10 left-10 absolute w-64 border-8 border-lime-400"></div>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-4xl pb-5">Front-End Web Developer</h1>
            <p>
              Hi! I’m Rasel Mridha, a passionate MERN stack developer with
              expertise in React, Node.js, MongoDB, Tailwind CSS, and more. I
              specialize in building modern, user-focused web applications that
              deliver seamless experiences. Currently pursuing my studies at
              Satkhira Government Polytechnic Institute, I’m fueled by
              creativity and inspired by innovation. Beyond coding, I enjoy
              drawing, traveling, gaming, sipping coffee, and continuously
              learning to enhance my skills. Let’s collaborate to bring your
              ideas to life!
            </p>
            <br />
            <p>
              <span className="text-lime-400 font-bold">Name</span>: Rasel
              Mridha <br />
              <span className="text-lime-400 font-bold">Nationality</span>:
              Bangladesh <br />
              <span className="text-lime-400 font-bold">Address</span>: Rangpur,
              Bangladesh <br />
              <span className="text-lime-400 font-bold">Phone</span>:
              +8801645072790 <br />
              <span className="text-lime-400 font-bold">E-Mail</span>:
              RaselMridha792@gmail.com <br />
              <span className="text-lime-400 font-bold">Education</span>:
              Diploma In Computer Science & Technology <br />
            </p>
            <div className="md:py-10 py-5">
              <h1 className="text-3xl md:text-4xl text-center md:text-left text-lime-400 py-5 uppercase font-bold">
                My Interest In
              </h1>
              <div className="flex gap-10 pb-5 items-center justify-left">
                <div className="flex flex-col items-center">
                  <div className="hover:shadow-2xl hover:scale-110 hover:shadow-lime-400 hover:bg-lime-400 duration-300 rounded-full">
                    <p className="text-3xl border p-3 rounded-full border-lime-400 text-lime-400 hover:text-gray-500">
                      <FaPenAlt />
                    </p>
                  </div>
                  <span>drawing</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="hover:shadow-2xl hover:scale-110 hover:shadow-lime-400 hover:bg-lime-400 duration-300 rounded-full">
                    <p className="text-3xl border p-3 rounded-full border-lime-400 text-lime-400 hover:text-gray-500">
                      <FaPlaneDeparture />
                    </p>
                  </div>
                  <span>travel</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="hover:shadow-2xl hover:scale-110 hover:shadow-lime-400 hover:bg-lime-400 duration-300 rounded-full">
                    <p className="text-3xl border p-3 rounded-full border-lime-400 text-lime-400 hover:text-gray-500">
                      <FaMusic />
                    </p>
                  </div>
                  <span>Music</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="hover:shadow-2xl hover:scale-110 hover:shadow-lime-400 hover:bg-lime-400 duration-300 rounded-full">
                    <p className="text-3xl border p-3 rounded-full border-lime-400 text-lime-400 hover:text-gray-500">
                      <FaCoffee />
                    </p>
                  </div>
                  <span>Coffee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
