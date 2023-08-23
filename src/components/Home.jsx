import { Banner } from "./Banner";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

export const Home = () => {
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
