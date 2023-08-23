import { Banner } from "./Banner";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

const Home = () => {
  return (
    <div className="fullpage">
      <div className="part1">
        <Banner />
      </div>
      <div className="part2">
        <Skills />
      </div>
      <div className="part3">
        <Projects />
      </div>
      <div className="part4">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
