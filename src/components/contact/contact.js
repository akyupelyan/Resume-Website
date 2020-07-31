import React from "react";
import "../../App.css";

const Contact = () => {
    return (
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mx-auto text-center">
              <h2 className="contact-heading" >Contact</h2>
              <br/>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mr-auto text-center">
              <i className="fa fa-envelope"></i>
              <p>
                <a href="mailto:akyupelyan@gmail.com" className="link-text">akyupelyan@gmail.com</a>
              </p>
            </div>
            <div className="col-lg-4 mr-auto text-center">
              <i className="fa fa-linkedin"></i>
              <p>
                <a href="https://www.linkedin.com/in/arthur-kyupelyan-379b9b193/" className="link-text">Linkedin</a>
              </p>
            </div>
            <div className="col-lg-4 mr-auto text-center">
              <i className="fa fa-github"/>
              <p>
                <a href="https://github.com/akyupelyan" className="link-text">Github</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };


export default Contact;