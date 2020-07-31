import React from "react";
import "../../App.css";
import logo from "../../img/logo.jpg";

const About = () => (
  <section className="" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 mx-auto text-center">
          <h2 className="section-heading">About</h2>
          <br/>
          <div className="row">
            <div className="col-lg-6">
              <p className="mb-4 introtxt">Hi, my name is Arthur Kyupelyan. I am a computer/software engineer based in Los Angeles, CA. I enjoy working on embedded systems and web-based development.
                I also enjoy learning and experiencing new things all of the time.  One of my dreams is to build robots and other pieces of technology that will make a great impact on the world some day.</p>
              <a href="mailto:akyupelyan@gmail.com" className="btn"><i className="fa fa-envelope"></i></a>
              <a href="https://www.linkedin.com/in/arthur-kyupelyan-379b9b193/" className="btn"><i className="fa fa-linkedin"></i></a>
              <a href="https://github.com/akyupelyan" className="btn"><i className="fa fa-github"></i></a>
            </div>
            <div className="col-lg-6">
              <p className="mb-4 font-weight-bold introtxt">Education:</p>
              <p className="mb-4 introtxt">University of California, Irvine</p>
              <p className="mb-4 introtxt">B.S. in Computer Engineering</p>
              <p className="mb-4 introtxt">2016-2020</p>
              <img src={logo} alt="UC Irvine logo" width="200" height="200"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;