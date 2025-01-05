import ProjectCard from "./ProjectCard";
import useLoadProject from "./useLoadProject";

const MyPortfolio = () => {
  const { projects } = useLoadProject();
  return (
    <>
      <section className="my-20">
        <div className="py-10 md:flex items-center">
          <div className="">
            <h1 className="md:text-5xl border-l-4 border-lime-500 pl-5 text-3xl py-2 mb-3 text-white font-bold">
              my portfolio
            </h1>
            <p className="lg:w-1/2">
              My step-by-step guide ensures a smooth project journey, from the
              initial consultation to the final delivery. I take care of every
              detail, allowing you to focus on what you do best.
            </p>
          </div>
          <button className="btn bg-lime-500 hover:bg-lime-600 text-black">Contact Me</button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project}></ProjectCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default MyPortfolio;
