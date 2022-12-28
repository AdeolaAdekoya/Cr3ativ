import React, { useState, useEffect } from "react";
import "../css/Slider.css";
import data from "./data";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

// IoIosArrowForward

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
              <div className="padding-section">
                <div id="shadow-border">
                  <article
                    id="shadow-background-one"
                    className={position}
                    key={id}
                  >
                    <div id="shadow-background">
                      <div id="image-covers">
                        <img src={image} className="person-img" />
                      </div>
                      <div>
                        <div id="quote-test">
                          <div id="quote-right">
                            <i class="fa fa-quote-left" aria-hidden="true"></i>
                          </div>

                          <p className="text">
                            {quote}{" "}
                            <i class="fa fa-quote-right" aria-hidden="true"></i>
                          </p>
                        </div>
                        <div id="quote-name">
                          <h2 className="title">{name}</h2>

                          <div id="nav-buttons">
                            {" "}
                            <button
                              className="prev"
                              onClick={() => setIndex(index - 1)}
                            >
                              <IoIosArrowBack color="#151517" size={24} />
                            </button>
                            <h2 className="number">{id} / 6</h2>
                            <button
                              className="next"
                              onClick={() => setIndex(index + 1)}
                            >
                              <IoIosArrowForward color="#151517" size={24} />
                            </button>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Slider;
