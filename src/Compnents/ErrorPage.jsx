import React from "react";
import "../css/ErrorPage.css";
import Navbar from "./Navbar";
import error from "../assets/error.svg";

const ErrorPage = () => {
  return (
    <div>
      <section className="error-page">
        <Navbar />
        <div id="error-bgn">

     

        <div className="error-section">
          <div className="img-left"> <div className="error-img">
            <img src={error} alt="" />
          </div></div>
         
        <div>
        <h1>Page not found</h1>
          <p>
            Sorry about that! It looks like you've stumbled upon a broken link
            or error page.
          </p>
          
          <button><a href="/">Back Home</a></button>
       
        </div>
        
 </div>
 </div>
      </section>
    </div>
  );
};

export default ErrorPage;
