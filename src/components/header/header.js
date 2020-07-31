import React from "react";
import "../../App.css";

const Header = () => (
  <header className="masthead" id="home">
      <div className="mastheadContent">
        <div className='row'>
          <div className="col-lg-6" id="name">
            <h1>
              ARTHUR
            </h1>
            <h1>
              KYUPELYAN
            </h1>
          </div>
          <div className="col-lg-6">
            <p>
              <a href="mailto:akyupelyan@gmail.com" className="contactLinks"><i className="fa fa-envelope"></i></a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/arthur-kyupelyan-379b9b193/" className="contactLinks"><i className="fa fa-linkedin"></i></a>
            </p>
            <p>
              <a href="https://github.com/akyupelyan" className="contactLinks"><i className="fa fa-github"></i></a>
            </p>
          </div>
        </div>
        <div className="col-lg-12 mx-auto">
          <a className="btn btn-xl " href="#about" smooth="true">Find Out More</a>
        </div>
      </div>
  </header>

);

export default Header;