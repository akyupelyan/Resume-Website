import React from "react";
import "../../App.css";

const Projects = () => {
  return (
    <section id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Projects</h2>
              <br/>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 vl project-name">
              <h3>Irrigation System Simulator:</h3>
            </div>
            <div className="col-lg-8 project-desc">
              <p>
                A circuit containing various sensors which found the tempeature/humidity of an area and calculated the amount of irrigation 
                a field needed every hour. Made using a RaspberryPi and Python.
              </p>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-lg-4 vl project-name">
              <h3>Chat Application:</h3>
            </div>
            <div className="col-lg-8 project-desc">
              <p>
                A computer app that allows users to make accounts and add/chat with friends made using C. This project involved socket i/o and GTK+ to make a GUI.
              </p>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-lg-4 vl project-name">
              <h3>Autonomous RC Car:</h3>
            </div>
            <div className="col-lg-8 project-desc">
              <p>
                A fully autonomous RC car made using Raspberry Pi, Arduino, and Python. The car is able to detect and drive within lanes.
              </p>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-lg-4 vl project-name">
              <h3>Pipelined Processor:</h3>
            </div>
            <div className="col-lg-8 project-desc">
              <p>
                A 5-stage synchronous pipelined processor made using systemVerilog.
              </p>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-lg-4 vl project-name">
              <h3>Photo Editing Software:</h3>
            </div>
            <div className="col-lg-8 project-desc">
              <p>
                An app that applies various filters, such as altering the color values, adding borders, and making an edge map, to an image made using C.
              </p>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-lg-4 vl project-name">
              <h3>Personal Website:</h3>
            </div>
            <div className="col-lg-8 project-desc">
              <p>
                This website made using HTML, CSS, and Javascript.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Projects;