import React from "react";
import "../../App.css";

const Skills = () => {
    return (
      <section id="skills">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="skills-heading">Skills</h2>
              <br/>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <button className="btn skillbtn d-flex" type="submit">C/C++</button>
              <button className="btn skillbtn d-flex" type="submit">Python</button>
              <button className="btn skillbtn d-flex" type="submit">Java</button>
              <button className="btn skillbtn d-flex" type="submit">SystemVerilog</button>
            </div>
          
            <div className="col-lg-4">
              <button className="btn skillbtn d-flex" type="submit">HTML</button>
              <button className="btn skillbtn d-flex" type="submit">Javascript</button>
              <button className="btn skillbtn d-flex" type="submit">RaspberryPi</button>
              <button className="btn skillbtn d-flex" type="submit">CSS</button>
            </div>
            <div className="col-lg-4">
              <button className="btn skillbtn d-flex" type="submit">React</button>
              <button className="btn skillbtn d-flex" type="submit">OpenCV</button>
              <button className="btn skillbtn d-flex" type="submit">MATLAB</button>
              <button className="btn skillbtn d-flex" type="submit">Arduino</button>
            </div>
          </div> 
        </div>
      </section>
    );
  };
  
  export default Skills;