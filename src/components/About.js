import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <>
      <div>About</div>
      <AboutUs image={image} />
    </>
  );
}
function AboutUs(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>this is good</p>
      <img src={props.image} alt="I made this"></img>
    </div>
  );
}
export default About;
