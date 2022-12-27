import React, { useState, useEffect } from "react";
import "../css/Slider.css";
import data from "./data";

const Slider = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <section className="testimonial-section">
      <div>
        <div className="testonialbody">
          {people.map((item, indexPeople) => {
            const { id, image, name, quote } = item;
            let position = "nextSlide";
            if (indexPeople === index) {
              position = "activeSlide";
            }
            if (
              indexPeople === index - 1 ||
              (index === 0 && indexPeople === people.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <div id="shadow-border">
                <article id="shadow-background-one" className={position} key={id}>
                <div id="shadow-background">                
                  <div id="image-cover">
                    <img src={image} className="person-img" />
                  </div>
                  <div>
                    <div id="quote-test">
                      <p className="text">{quote}</p>
                    </div>
                    <div id="quote-name">
                      <p className="title">{name}</p>
                      
                      <div id="nav-buttons">
                    {" "}
                    <button
                      className="prev"
                      onClick={() => setIndex(index - 1)}
                    >
                      <i className="fas fa-arrow-left" />
                    </button>
                    <p className="number">{id} / 6</p>
                    <button
                      className="next"
                      onClick={() => setIndex(index + 1)}
                    >
                      <i className="fas fa-arrow-right" />
                    </button>{" "}
                  </div>
                    </div>
                  </div>
                  </div>
                
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Slider;
