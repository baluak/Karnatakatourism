import "./Compitition.css";
import Head from "../../HeaderAndFoter/header";
import { Foot, Foot2 } from "../../HeaderAndFoter/footer";

import topimg from "../../dropdown_images/Wats_new_images/compitition page image.png";
import { useState } from "react";

import {
  Brief,
  Logo,
  Tagline,
  Mascot,
  Souvenir,
  Blog,
} from "./suply multiple components for Competitions";

export function Compitition() {
  let [component, setComponent] = useState(<Brief />);
  let [activeButton, setActiveButton] = useState("Brief"); // State to track the active button

  let handleclick = (love, buttonName) => {
    setComponent(love);
    setActiveButton(buttonName); // Set the active button
  };

  return (
    <div>
      <Head />
      <img id="top" src={topimg} alt="" />
      <h3 className="brand">City Branding for Mysuru Competition ’23</h3>
      <marquee className="marq" behavior="" direction="">
        <h1>
          Extension of Dates for Branding Mysore Competition 23 Registration
          (11-09-2023) and Submission (15-09-2023)
        </h1>
      </marquee>
      <div className="maindiv">
        <div className="horizontal_list">
          <button
            onClick={() => handleclick(<Brief />, "Brief")}
            style={{
              backgroundColor: activeButton === "Brief" ? "white" : "",
              color: activeButton === "Brief" ? "black" : "",
            }}
          >
            Brief :
          </button>
          <button
            onClick={() => handleclick(<Logo />, "Logo")}
            style={{
              backgroundColor: activeButton === "Logo" ? "white" : "",
              color: activeButton === "Logo" ? "black" : "",
            }}
          >
            Logo :
          </button>
          <button
            onClick={() => handleclick(<Tagline />, "Tagline")}
            style={{
              backgroundColor: activeButton === "Tagline" ? "white" : "",
              color: activeButton === "Tagline" ? "black" : "",
            }}
          >
            Tagline :
          </button>
          <button
            onClick={() => handleclick(<Mascot />, "Mascot")}
            style={{
              backgroundColor: activeButton === "Mascot" ? "white" : "",
              color: activeButton === "Mascot" ? "black" : "",
            }}
          >
            Mascot :
          </button>
          <button
            onClick={() => handleclick(<Souvenir />, "Souvenir")}
            style={{
              backgroundColor: activeButton === "Souvenir" ? "white" : "",
              color: activeButton === "Souvenir" ? "black" : "",
            }}
          >
            Souvenir :
          </button>
          <button
            onClick={() => handleclick(<Blog />, "Blog")}
            style={{
              backgroundColor: activeButton === "Blog" ? "white" : "",
              color: activeButton === "Blog" ? "black" : "",
            }}
          >
            Blog :
          </button>
        </div>

        {/* Render the selected component dynamically here */}
        <div className="content">{component}</div>
      </div>

      <Foot />
      <Foot2 />
    </div>
  );
}
