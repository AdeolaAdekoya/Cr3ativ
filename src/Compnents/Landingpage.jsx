import React from "react";
import logo from "../assets/Frame 1.svg";
import landingimage from "../assets/Frame27.svg";
import walmart from "../assets/Walmart_logo.svg";
import coke from "../assets/Coca-Cola_logo 1.svg";
import indeed from "../assets/indeed-logo.svg";
import sephora from "../assets/sephora-logo.svg";
import toyota from "../assets/Toyota.svg";
import visa from "../assets/Visa_Inc._logo.svg";
import tinder from "../assets/tinder-1.svg";
import teen from "../assets/teen-vogue.svg";
import nyx from "../assets/nyx-cosmetics.svg";
import lacoste from "../assets/lacoste-logo.svg";
import HP from "../assets/HP_New_Logo_2D.svg";
import gucci from "../assets/gucci-logo-1.svg";
import google from "../assets/google-podcasts.svg";
import estee from "../assets/estee-lauder-3.svg";
import amazon from "../assets/amazon-prime-video-logo.svg";
import mockup1 from "../assets/cokeMockup.svg";
import mockup2 from "../assets/donaldsMockup.svg";
import tag1 from "../assets/tag1.svg";
import tag2 from "../assets/purpleframe.svg";

import "../css/Landingpage.css";

const Landingpage = () => {
  return (
    <div id="about-section">
      <header>
        <nav>
          <div>
            <img src={logo} alt="Cr3ativ logo" />
          </div>

          <ul>
            <li>Product</li>
            <li>Partners</li>
            <li>Learn</li>
          </ul>
          <button id="login">Log in</button>
          <button id="signup">Sign up for free</button>
        </nav>
      </header>

      <section>
        <div className="details">
          <div id="text-details">
            <h1>Find the Perfect Content Creator for Your Brand</h1>
            <p>
              Say goodbye to bland, unengaging content and hello to fresh,
              authentic content from real users
            </p>
            <button id="get-started">Get Started</button>
          </div>

          <div className="images-one">
            <img src={landingimage} alt="" />
          </div>
        </div>

        <div id="slider-begins">
          <div id="slider">
            <div className="slider-track">
              <div className="slide">
                <img src={walmart} alt="" height={100} width={100} />
              </div>
              <div className="slide">
                <img src={coke} alt="" height={100} width={100} />
              </div>
              <div className="slide">
                <img src={indeed} alt="" height={100} width={100} />
              </div>
              <div className="slide">
                <img src={sephora} alt="" height={100} width={100} />
              </div>
              <div className="slide">
                <img src={tinder} alt="" height={100} width={100} />
              </div>
              <div className="slide">
                <img src={gucci} alt="" height={100} width={100} />
              </div>
              <div className="slide">
                <img src={toyota} alt="" height={100} width={100} />
              </div>
              <div className="slide">
                <img src={HP} alt="" height={100} width={100} />
              </div>
              <div className="slide">
                <img src={visa} alt="" height={100} width={100} />
              </div>
              <div className="slide">
                <img src={google} alt="" height={100} width={100} />
              </div>
              <div className="slide">
                <img src={teen} alt="" height={100} width={100} />
              </div>
              <img src={nyx} alt="" height={100} width={100} />
              <div className="slide">
                <img src={amazon} alt="" height={100} width={100} />
              </div>
              <div className="slide">
                <img src={estee} alt="" height={100} width={100} />
              </div>
              <div className="slide">
                <img src={lacoste} alt="" height={100} width={100} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section id="backgound-two">
        <h1>Discover and connect with influencers from every niche</h1>

        <div className="boxes">
          <div id="yellow-box">
            <div id="first-tag">
                <img src={tag1} alt="" />
            </div>
            <div className="centered-image">
              <img src={mockup1} alt="" />
            </div>
            <div id="second-tag">
            <img src={tag2} alt="" />
            </div>
          </div>
          <div id="orange-box">
            <div className="centered-image">
              <img src={mockup2} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works">
        <h1>How it Works</h1>

        {/* attendion needed */}

        <div>

        </div>

        <p>Find Content Creators with 3 easy steps</p>
      </section>
    </div>
  );
};

export default Landingpage;
