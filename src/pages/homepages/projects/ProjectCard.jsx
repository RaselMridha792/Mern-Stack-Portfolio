import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ project }) => {
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
  } = project;

  return (
    <div className="relative bg-zinc-800 p-5 hover:shadow-lime-500 hover:shadow-xl rounded-xl duration-1000">
      {/* Image with dark overlay on hover */}
      <div className="relative">
        <img className="h-96 object-cover w-full" src={project_image} alt="" />
        
        {/* Dark overlay on the image with opacity */}
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 flex flex-col justify-center items-center">
          <p className="text-lime-500 text-3xl -rotate-45 hover:rotate-0 duration-500 hover:bg-lime-500 hover:text-black p-3 border rounded-full">
            <FaArrowRight />
          </p>
          <p className="text-2xl text-white">
          see details
          </p>
        </div>
      </div>

      <div className="mt-10 mb-3 gap-5 flex flex-wrap *:text-xs">
        <span className="px-5 py-2 rounded-3xl border hover:bg-lime-500 hover:text-black duration-300">
          React
        </span>
        <span className="px-5 py-2 rounded-3xl border hover:bg-lime-500 hover:text-black duration-300">
          Node Js
        </span>
        <span className="px-5 py-2 rounded-3xl border hover:bg-lime-500 hover:text-black duration-300">
          Express Js
        </span>
        <span className="px-5 py-2 rounded-3xl border hover:bg-lime-500 hover:text-black duration-300">
          MongoDB
        </span>
        <span className="px-5 py-2 rounded-3xl border hover:bg-lime-500 hover:text-black duration-300">
          firebase
        </span>
      </div>
      <div className="flex items-center gap-5">
        <h1 className="py-3 text-2xl text-white">{project_name}</h1>
      </div>
    </div>
  );
};

export default ProjectCard;
