import React, { useEffect, useRef, useState } from "react";
import "./Testimonials.css";

import patient1 from "./patient1.jpg";
import patient2 from "./patient2.jpg";
import patient3 from "./patient3.jpg";
import patient4 from "./patient4.jpg";

const Testimonials = () => {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  const patients = [
    {
      img: patient1,
      name: "PAUL LEE",
      text:
        "I had an excellent experience at Eterna Clinic, Raipur. Dr. Ritu Gupta is extremely caring and professional. The treatment was smooth and painless."
    },
    {
      img: patient2,
      name: "ANN CLARK",
      text:
        "Highly recommend Eterna Clinic! Dr. Ritu Gupta explained everything clearly and made me feel very comfortable throughout the treatment."
    },
    {
      img: patient3,
      name: "RAHUL SHARMA",
      text:
        "Best dental clinic in Raipur, Chhattisgarh. The staff is friendly and the clinic is very hygienic. Completely satisfied with my results."
    },
    {
      img: patient4,
      name: "NEHA VERMA",
      text:
        "Wonderful experience at Eterna Clinic. Dr. Ritu Gupta is very skilled and patient-friendly. I am extremely happy with my smile now."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="testimonial-section" ref={sectionRef}>
      <p className="testimonial-subtitle">
        The best reference is a good word
      </p>

      <h2 className="testimonial-title">
        CLIENT <span>TESTIMONIALS</span>
      </h2>

      <div className="testimonial-container four">
        {patients.map((item, index) => (
          <div
            key={index}
            className={`testimonial-card ${
              show ? "animate" : ""
            } ${index % 2 === 0 ? "light" : "dark"}`}
            style={{ animationDelay: `${index * 0.25}s` }}
          >
            {/* LEFT */}
            <div className="testimonial-left">
              <div className="testimonial-profile">
                <img src={item.img} alt={item.name} />
                <span className="check">✓</span>
              </div>

              <h4 className="testimonial-name">{item.name}</h4>
              <span className="testimonial-sign">Patient</span>
            </div>

            {/* RIGHT */}
            <div className="testimonial-right">
              <p className="testimonial-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
