import React from "react";
import MultiplePizzas from "../images/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
         We r foodmolla!
         Our Speciality is to made high quality pizzas and serve it to people.
        </p>
      </div>
    </div>
  );
}

export default About;