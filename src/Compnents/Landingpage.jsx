import React from "react";

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
import line from "../assets/line.svg";
import swiggly from "../assets/swiggly.svg";
import star1 from "../assets/46.svg";
import star2 from "../assets/55.svg";
import Lottie from "lottie-react";
import animationData from "../assets/static/like.json";
import "../css/Landingpage.css";

// img
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

// moving cards
// row 1

import row11 from "../assets/row11.svg";
import row12 from "../assets/row12.svg";
import row13 from "../assets/row13.svg";
import row14 from "../assets/row14.svg";
import row15 from "../assets/row15.svg";
import row16 from "../assets/row16.svg";

// row 2
import row21 from "../assets/row21.svg";
import row22 from "../assets/row22.svg";
import row23 from "../assets/row23.svg";
import row24 from "../assets/row24.svg";
import row25 from "../assets/row25.svg";
import row26 from "../assets/row26.svg";

// row 3
import row31 from "../assets/row31.svg";
import row32 from "../assets/row32.svg";
import row33 from "../assets/row33.svg";
import row34 from "../assets/row34.svg";
import row35 from "../assets/row35.svg";
import row36 from "../assets/row36.svg";

// slider

import slider from "./Slider";
import Navbar from "./Navbar";
const Landingpage = () => {
  return (
    <div id="about-section">
        <Navbar/>
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
                <img src={HP} alt="" height={70} width={70} />
              </div>
              <div className="slide">
                <img src={visa} alt="" height={100} width={100} />
              </div>
              <div className="slide">
                <img src={google} alt="" height={70} width={70} />
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
          {/* orange box */}
          <div id="orange-box">
            <div id="lottie-data" style={{ width: 120, height: 120 }}>
              {" "}
              <Lottie loop={true} animationData={animationData} />
            </div>
            <div className="centered-image">
              <img src={mockup2} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works">
        <div id="header-decoration">
          <h1>How it Works</h1>
          <div id="line-one">
            <img src={line} alt="" />
          </div>
        </div>
        <p>Find Content Creators with 3 easy steps</p>

        {/* image sections begins */}

        <div id="image-sections">
          {/* image */}
          <div className="container-image">
            <div className="gallery">
              <div className="image-holder">
                <img src={img1} alt="" />
              </div>
              <div className="caption">
                <h2>Connect with Top Talent</h2>
                <button className="cta2">
                  <a href="#"> Join Our Network</a>
                </button>
              </div>
            </div>
            <div className="gallery">
              <div className="image-holder">
                <img src={img2} alt="" />
              </div>
              <div className="caption">
                <h2>Bid On Their Services</h2>
                <button className="cta2">
                  <a href="#">Join Our Network</a>
                </button>
              </div>
            </div>
            <div className="gallery">
              <div className="image-holder">
                <img src={img3} alt="" />
              </div>
              <div className="caption">
                <h2>Elevate Your Digital Strategy</h2>
                <button className="cta2">
                  <a href="#">Boost Your Presence</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* creators section */}

      <section id="creative-creators">
        <div id="font-details">
          <h1>The Cr3ativ Creators</h1>
          <div id="swigglydetail">
            <img src={swiggly} alt="" />
          </div>
        </div>

        <p>Diverse range of creators from across the globe</p>

        <div id="slider-beginss">
          <div id="sliders">
            <div className="slider-tracks">
              <div className="slides">
                <img src={row11} alt="" height={100} width={474} />
              </div>
              <div className="slides">
                <img src={row12} alt="" height={100} width={474} />
              </div>
              <div className="slides">
                <img src={row13} alt="" height={100} width={474} />
              </div>
              <div className="slides">
                <img src={row14} alt="" height={100} width={474} />
              </div>
              <div className="slides">
                <img src={row15} alt="" height={100} width={474} />
              </div>
              <div className="slides">
                <img src={row16} alt="" height={100} width={474} />
              </div>
            </div>
          </div>
          <div id="row-two-sliders">
            <div className="row-two-slider-tracks">
              <div className="row-two-slides">
                <img src={row21} alt="" height={150} width={474} />
              </div>
              <div className="row-two-slides">
                <img src={row22} alt="" height={150} width={474} />
              </div>
              <div className="row-two-slides">
                <img src={row23} alt="" height={150} width={474} />
              </div>
              <div className="row-two-slides">
                <img src={row24} alt="" height={150} width={474} />
              </div>
              <div className="row-two-slides">
                <img src={row25} alt="" height={150} width={474} />
              </div>
              <div className="row-two-slides">
                <img src={row26} alt="" height={150} width={474} />
              </div>
            </div>
          </div>
          <div id="row-three-sliders">
            <div className="row-three-slider-tracks">
              <div className="row-three-slides">
                <img src={row31} alt="" height={150} width={474} />
              </div>
              <div className="row-three-slides">
                <img src={row32} alt="" height={150} width={474} />
              </div>
              <div className="row-three-slides">
                <img src={row33} alt="" height={150} width={474} />
              </div>
              <div className="row-three-slides">
                <img src={row34} alt="" height={150} width={474} />
              </div>
              <div className="row-three-slides">
                <img src={row35} alt="" height={150} width={474} />
              </div>
              <div className="row-three-slides">
                <img src={row36} alt="" height={150} width={474} />
              </div>
            </div>
          </div>
        </div>


   <slider/>
    


      </section>
      {/* second to the last */}

      <section id="cta-footer">
        <div id="wrapperone">
          <div className="mainwrapper">
            <div className="maincontainer">
              <div className="maincontent">
                <div className="starone">
                  <img src={star1} alt="" />
                </div>
                <div className="startwo">
                  <img src={star2} alt="" />
                </div>
                <h2>Elevate your social media strategy</h2>
                <p>Join now and transform your brand</p>
                <button>Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Landingpage;
