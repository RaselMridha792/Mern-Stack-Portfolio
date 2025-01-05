
import Banner from "../../Components/banner/Banner";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import MySkills from "./MySkills";
import MyPortfolio from "./projects/MyPortfolio";
const Homepage = () => {
  return (
    <>
      <Banner></Banner>
      <section className="max-w-screen-2xl mx-auto px-5">
        <AboutMe></AboutMe>
        <MySkills></MySkills>
        <MyPortfolio></MyPortfolio>
        <ContactMe></ContactMe>
      </section>
    </>
  );
};

export default Homepage;
