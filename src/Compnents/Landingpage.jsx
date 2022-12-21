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
import line from "../assets/line.svg";
import Lottie from "lottie-react";
import animationData from "../assets/static/like.json";
import "../css/Landingpage.css";

// img
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";


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
                <img src={HP} alt="" height={70} width={70} />
              </div>
              <div className="slide">
                <img src={visa} alt="" height={100} width={100} />
              </div>
              <div className="slide">
                <img src={google} alt="" height={80} width={80} />
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
              <Lottie loop={true} animationData={animationData}   />
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
          
          <div className="image-section-img">
            <div className="image-content"><img src={img1} alt="" /></div>
            <div className="text-content">
              <h2>Connect with Top Talent</h2>
              <button className="cta2">Join Our Network</button>
            </div>
          </div>

          {/* end 1 */}

          <div className="image-section-img">
          <div className="image-content"><img src={img2} alt="" />
          <div className="text-content">
              <h2>Bid On Their Services</h2>
              <button className="cta2"><a href=""> Join Our Network</a></button>
            </div>
          </div>
          </div>

           {/* end 1 */}

           <div className="image-section-img">
           <div className="image-content"><img src={img3} alt="" /></div>
           
            <div className="text-content">
              <h2>Elevate Your Digital Strategy</h2>
              <button className="cta2">Boost Your Presence</button>
            </div>
          </div>






        </div>
      </section>
    </div>
  );
};

export default Landingpage;
