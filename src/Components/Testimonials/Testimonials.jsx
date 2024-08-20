import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/images/next-icon.png";
import back_icon from "../../assets/images/back-icon.png";
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";
import user4 from "../../assets/images/user4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials ">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slid">
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                  <h3>Parth Gajjar</h3>
                  <span>Gujarat, India</span>
                </div>
              </div>
              <p>
                The teachers were helpful and knowledgeable. This course makes
                the students industry-ready. The curriculum is enough to make
                the student industry-ready. Exams aren't very tough and pass
                percentages are around 40%. Overall, the college can be
                considered average.
              </p>
            </div>
          </li>
          <li>
            <div className="slid">
              <div className="user-info">
                <img src={user2} alt="" />
                <div>
                  <h3>Parth Gajjar</h3>
                  <span>Gujarat, India</span>
                </div>
              </div>
              <p>
                Hostel facilities are very good; they give you 4 meals:
                breakfast, lunch, evening snacks, and dinner. The interior of
                the hostel is also very good. The food in the canteen is very
                nice and affordable for all. In addition to the canteen, there
                are four food outlets where you can enjoy your break.
              </p>
            </div>
          </li>
          <li>
            <div className="slid">
              <div className="user-info">
                <img src={user3} alt="" />
                <div>
                  <h3>Parth Gajjar</h3>
                  <span>Gujarat, India</span>
                </div>
              </div>
              <p>
                I am currently studying architecture at Indus University. I
                chose this course because, since my childhood, I have been
                really fascinated by huge buildings and different materials.
                Thus, I wanted to explore more in this field.
              </p>
            </div>
          </li>
          <li>
            <div className="slid">
              <div className="user-info">
                <img src={user4} alt="" />
                <div>
                  <h3>Parth Gajjar</h3>
                  <span>Gujarat, India</span>
                </div>
              </div>
              <p>
                Almost 70 to 80 percent of students are getting good placements
                and internships, but there are some slight problems students
                face after graduation. It still depends on each individual
                student. Overall, universities are trying their best to get top
                students to give them good practical knowledge.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
