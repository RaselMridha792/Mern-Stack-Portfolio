import { FaLongArrowAltRight } from "react-icons/fa";
import SkillCard from "./component/SkillCard";
import reactIcon from "../../assets/skills/react.png";
import nodeIcon from "../../assets/skills/nodejs.png";
import expressIcon from "../../assets/skills/expressjs.png";
import mongoIcon from "../../assets/skills/mongodb.png";
import tailwindIcon from "../../assets/skills/tailwind.png";
import firebaseIcon from "../../assets/skills/firebase.png";
import jwtIcon from "../../assets/skills/jwt.png";
import htmlIcon from "../../assets/skills/html.png";
import cssIcon from "../../assets/skills/css.png";
import jsIcon from "../../assets/skills/js.png";
import reduxIcon from "../../assets/skills/redux.png";
import nextIcon from "../../assets/skills/nextjs.png";
import daisyIcon from "../../assets/skills/daisyUi.png";
import pythonIcon from "../../assets/skills/python.png";
import javaIcon from "../../assets/skills/java.png";
import photoShop from "../../assets/skills/photoshop.png";
import { useContext, useState } from "react";
import { NavigateContext } from "../../context/NavigateProvider";

const MySkills = () => {
  const [view, setView] = useState(false);
  const { skillRef } = useContext(NavigateContext);
  return (
    <>
      <section className="my-20">
        <div
          ref={skillRef}
          className="flex flex-col lg:flex-row my-20 gap-5  items-center px-5"
        >
          <div className="lg:w-1/2">
            <p className="capitalize text-gray-500 pb-2">my skills</p>
            <h1 className="md:text-4xl text-2xl font-bold">
              Let’s Explore Popular <br />{" "}
              <span className="text-lime-500">Skills & Experience</span>
            </h1>
            <div className="space-y-2 pt-5 text-gray-400">
              <p>
                Experienced in building full-stack applications using the MERN
                stack (MongoDB, Express.js, React.js, Node.js).{" "}
              </p>
              Frontend: Proficient in HTML, CSS, Tailwind CSS, DaisyUI, and
              React.js, focusing on responsive, dynamic UIs and state management
              with Redux (basic).
              <p>
                Backend: Skilled in developing RESTful APIs using Node.js and
                Express.js, with strong knowledge of MongoDB for NoSQL database
                management.
              </p>
              <p>
                Authentication & APIs: Familiar with JWT for secure user
                authentication and Axios for efficient API calls. Dedicated to
                creating scalable, responsive, and secure web applications using
                modern technologies.
              </p>
            </div>
            <button
            onClick={() => setView(!view)}
            className="btn  bg-lime-400 text-black hover:bg-lime-600 mt-5"
          >
            {view ? "View Less Skills" : "View More Skills"}
            <FaLongArrowAltRight />
          </button>
          </div>
          <div className="grid lg:w-1/2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <SkillCard
              icons={reactIcon}
              title={"React Js"}
              parcentage={"90%"}
            />
            <SkillCard icons={nodeIcon} title={"Node Js"} parcentage={"85%"} />
            <SkillCard
              icons={expressIcon}
              title={"Express Js"}
              parcentage={"80%"}
            />
            <SkillCard icons={mongoIcon} title={"MongoDB"} parcentage={"85%"} />
            <SkillCard icons={jsIcon} title={"JavaScript"} parcentage={"85%"} />
            <SkillCard
              icons={firebaseIcon}
              title={"firebase"}
              parcentage={"95%"}
            />
            <SkillCard
              icons={tailwindIcon}
              title={"TailWind css"}
              parcentage={"95%"}
            />
            <SkillCard icons={daisyIcon} title={"daisyUi"} parcentage={"95%"} />
            {view && (
              <>
                <SkillCard icons={jwtIcon} title={"JWT"} parcentage={"90%"} />
                <SkillCard icons={htmlIcon} title={"HTML"} parcentage={"85%"} />
                <SkillCard icons={cssIcon} title={"CSS3"} parcentage={"85%"} />
                <SkillCard
                  icons={reduxIcon}
                  title={"redux"}
                  parcentage={"exploring"}
                />
                <SkillCard
                  icons={nextIcon}
                  title={"Next Js"}
                  parcentage={"basic"}
                />
                <SkillCard
                  icons={pythonIcon}
                  title={"Python"}
                  parcentage={"70%"}
                />
                <SkillCard icons={javaIcon} title={"Java"} parcentage={"40%"} />
                <SkillCard
                  icons={photoShop}
                  title={"photoShop"}
                  parcentage={"75%"}
                />
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default MySkills;
