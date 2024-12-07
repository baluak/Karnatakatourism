import React from "react";
import './Upcoming Events and Roadshows.css';
import Head from "../../HeaderAndFoter/header";
import { Foot, Foot2 } from "../../HeaderAndFoter/footer";
import de from "../../dropdown_images/upcoming event & road shows pics/FireShot Capture 002 - International Roadshows - Karnataka Tourism - karnatakatourism.org.png"

export function Internationalroadshows() {
  return (
    <div>
      <Head />
      <img src={de} alt=""  className="de1"/>
      <hr />
      <Foot />
      <Foot2 />
    </div>
  )
}