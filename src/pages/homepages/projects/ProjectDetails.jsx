import { FaGithub } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { Link, useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
  const data = useLoaderData();
  const {
    project_name,
    project_image,
    live_site,
    github_link,
    description,
    challenges,
    technology,
    limitation,
    improvment,
    estimated_time,
  } = data;
  return (
    <>
      <section className="my-32 min-h-screen max-w-screen-2xl mx-auto px-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-center md:text-4xl text-2xl font-bold">
            {project_name}
          </h1>
          <p className="text-center lg:w-1/2 mx-auto pt-5">
            Project intro goes here. In the intro it`s a good idea to answer a
            potential client`s need/problem so it`s more likely to land your
            next project or job.
          </p>
          <div className="flex items-center justify-center mt-5">
            <Link
              to="/contact"
              className="btn bg-lime-500 text-black hover:bg-lime-600"
            >
              <LuSend />
              Hire Me
            </Link>
          </div>
        </div>
        <div className="lg:mt-40 flex flex-col-reverse lg:flex-row gap-20 mt-10">
          <div className="lg:w-2/6 bg-zinc-700 rounded-lg p-5">
            <h1 className="text-3xl">view site on</h1>
            <div className="flex gap-5 pb-4">
              <a
                className="flex items-center gap-1 py-2 text-lime-500 font-bold"
                target="_blank"
                href={live_site}
              >
                <LuSend></LuSend> Live Link
              </a>
              <a
                className="flex items-center gap-1 py-2 text-lime-500 font-bold"
                target="_blank"
                href={github_link}
              >
                <FaGithub /> github
              </a>
            </div>
            <hr />
            <h1 className="text-3xl pt-5">Front-End</h1>
            <div className="flex gap-4 pb-4 flex-wrap">
              <p>React Js</p>
              <p>Tailwind</p>
              <p>DaisyUi</p>
              <p>React Router</p>
            </div>
            <hr />
            <h1 className="text-3xl pt-5">Backend</h1>
            <div className="flex gap-5 pb-4">
              <p>Node Js</p>
              <p>Express js</p>
              <p>MongoDB</p>
              <p>Jwt</p>
            </div>
            <hr />
          </div>
          <img className="lg:w-4/6 rounded-lg" src={project_image} alt="" />
        </div>
        <div className="my-10">
          <h1 className="md:text-4xl text-2xl pb-5">Project Summary</h1>
          <hr />
          <p className="pt-3">{description}</p>
        </div>
        <div className="my-10">
          <h1 className="md:text-4xl text-2xl pb-5">Technology Used</h1>
          <hr />
          <p className="pt-3">{technology}</p>
        </div>
        <div className="my-10">
          <h1 className="md:text-4xl text-2xl pb-5">Challenges</h1>
          <hr />
          <p className="pt-3">{challenges}</p>
        </div>
        <div className="my-10">
          <h1 className="md:text-4xl text-2xl pb-5">Improvment Needed</h1>
          <hr />
          <p className="pt-3">{improvment}</p>
        </div>
        <div className="my-10">
          <h1 className="md:text-4xl text-2xl pb-5">Limitation</h1>
          <hr />
          <p className="pt-3">{limitation}</p>
        </div>
        <div className="my-10">
          <h1 className="md:text-4xl text-2xl pb-5">
            Applying Improvements and Fixing Limitations
          </h1>
          <hr />
          <p className="pt-3">{estimated_time}</p>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
