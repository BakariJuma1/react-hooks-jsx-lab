import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  return (
    <div>
      <HomeWork name={name} city={city} />
    </div>
  );
}

function HomeWork(props) {
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        {props.name} is a Web Developer from {props.city}
      </h1>
    </div>
  );
}

export default Home;
