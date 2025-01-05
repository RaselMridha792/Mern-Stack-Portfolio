const UpdatePost = () => {
  const handlePostProject = (e) => {
    e.preventDefault();
    const form = e.target;
    const project_name = form.name.value;
    const project_image = form.photo.value;
    const live_site = form.liveSite.value;
    const github_link = form.githubLink.value;
    const description = form.description.value;
    const challenges = form.challenges.value;
    const technology = form.technology.value;
    const limitation = form.limitation.value;
    const improvment = form.improvment.value;
    const estimated_time = form.estimated_time.value;

    const projectData = {
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
    };
    console.log(projectData);
  };
  return (
    <>
      <section className="max-w-screen-2xl mx-auto px-5 my-20">
        <div className="min-h-screen md:mt-32 mt-20">
          <h1 className="text-4xl text-center py-5">Update Project</h1>
          <hr />
          <div className="">
            <form onSubmit={handlePostProject} className="my-10">
              <div className="flex gap-5 flex-col md:flex-row mb-5">
                <label className="form-title w-full">
                  <h1>Project name</h1>
                  <input
                    type="text"
                    name="name"
                    placeholder="Project Name"
                    className="input input-bordered input-success w-full "
                  />
                </label>
                <label className="form-title w-full">
                  <h1>Project Image</h1>
                  <input
                    type="url"
                    name="photo"
                    placeholder="Project Image Url"
                    className="input input-bordered input-success w-full "
                  />
                </label>
              </div>
              <div className="flex gap-5 flex-col md:flex-row mb-5">
                <label className="form-title w-full">
                  <h1>Live site link</h1>
                  <input
                    type="url"
                    name="liveSite"
                    placeholder="live link"
                    className="input input-bordered input-success w-full "
                  />
                </label>
                <label className="form-title w-full">
                  <h1>Github site link</h1>
                  <input
                    type="url"
                    name="githubLink"
                    placeholder="github link"
                    className="input input-bordered input-success w-full "
                  />
                </label>
              </div>
              <div className="flex gap-5 flex-col md:flex-row mb-5">
                <label className="form-title w-full">
                  <h1>Briff Description</h1>
                  <textarea
                    placeholder="Description"
                    name="description"
                    className="textarea textarea-bordered textarea-lg w-full"
                  ></textarea>
                </label>
                <label className="form-title w-full">
                  <h1>challenges</h1>
                  <textarea
                    placeholder="challenges"
                    name="challenges"
                    className="textarea textarea-bordered textarea-lg w-full "
                  ></textarea>
                </label>
              </div>
              <div className="flex gap-5 flex-col md:flex-row mb-5">
                <label className="form-title w-full">
                  <h1>Technology Used For</h1>
                  <textarea
                    placeholder="Technology"
                    name="technology"
                    className="textarea textarea-bordered textarea-lg w-full"
                  ></textarea>
                </label>
                <label className="form-title w-full">
                  <h1>limitation</h1>
                  <textarea
                    placeholder="limitation"
                    name="limitation"
                    className="textarea textarea-bordered textarea-lg w-full "
                  ></textarea>
                </label>
              </div>
              <div className="flex gap-5 flex-col md:flex-row mb-5">
                <label className="form-title w-full">
                  <h1>Improvement needed</h1>
                  <textarea
                    placeholder="improvment"
                    name="improvment"
                    className="textarea textarea-bordered textarea-lg w-full"
                  ></textarea>
                </label>
                <label className="form-title w-full">
                  <h1>Estimated Time To complete</h1>
                  <textarea
                    placeholder="estimated time"
                    name="estimated_time"
                    className="textarea textarea-bordered textarea-lg w-full "
                  ></textarea>
                </label>
              </div>
              <input type="submit" value="Update" className="btn bg-lime-500 hover:bg-lime-600 text-black" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdatePost;
