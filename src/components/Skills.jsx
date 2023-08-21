import kaggle from "../assets/img/kaggle.png";
import dacon from "../assets/img/dacon.png";
import ai from "../assets/img/ai.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="part2">
      <section className="skill" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                <h2>활동내역?</h2>
                <p>- 동아리 활동 소개 -</p>
                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                  <div className="item">
                    <img src={kaggle} alt="Image" />
                  </div>
                  <div className="item">
                    <img src={dacon} alt="Image" />
                  </div>
                  <div className="item">
                    <img src={ai} alt="Image" />
                    <h5>AI</h5>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
