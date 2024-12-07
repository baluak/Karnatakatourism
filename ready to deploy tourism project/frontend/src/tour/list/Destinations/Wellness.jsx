import React from "react";
import './Destinations.css';
import Head from "../../HeaderAndFoter/header";
import { Foot, Foot2 } from "../../HeaderAndFoter/footer";

// Wellness

import wetop from "../../dropdown_images/Wellness images/wtopimg.png"

import we1 from "../../dropdown_images/Wellness images/ayurveda-1.jpg"
import we2 from "../../dropdown_images/Wellness images/Naturopathy.jpg"
import we3 from "../../dropdown_images/Wellness images/yoga.jpg"

export function Wellness() {
  return (
    <div>
      <Head />
      <img src={wetop} alt="" className="wetop" />
      <h3 className="wela">Wellness</h3>

      <div className="weimg">


        <div>
          <img src={we1} alt="" />
          <h1>Ayurveda</h1>
        </div>

        <div>
          <img src={we2} alt="" />
          <h1>Naturopathy </h1>
        </div>

        <div>
          <img src={we3} alt="" />
          <h1>Yoga</h1>
        </div>

   

      </div>
      <Foot />
      <Foot2 />
    </div>
  )
}