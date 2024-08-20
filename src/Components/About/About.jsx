import React from "react";
import "./About.css";
import about_img from "../../assets/images/about1.jpg";
import play_icon from "../../assets/images/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about ">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          "ज्ञानेन प्रकाशते जगत्" <br /> "Knowledge Enlightens the World"
        </p>
        <p>
          Indus University has been established to make a noteworthy
          contribution to the social, economic, and cultural life of our
          country. The founders of Indus University seek to deliver the best
          quality education to their students.
        </p>
        <p>
          The three pillars on which this University firmly stands are
          educational wisdom, professional brilliance, and research &
          innovation, all of which aim to nurture a spirit of entrepreneurship
          and social responsibility.
        </p>
      </div>
    </div>
  );
};

export default About;
