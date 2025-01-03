import Banner from "../../Components/banner/banner";
import AboutMe from "./AboutMe";
import MySkills from "./MySkills";

const Homepage = () => {
  return (
      <>
      <Banner />
      <section className="max-w-screen-2xl mx-auto px-5">
        <AboutMe></AboutMe>
        <MySkills></MySkills>
      </section>
      </>
  );
};

export default Homepage;
