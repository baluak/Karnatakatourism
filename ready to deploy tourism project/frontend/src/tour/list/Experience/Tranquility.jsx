import React from "react";
import './Experience.css';
import Head from "../../HeaderAndFoter/header";
import { Foot, Foot2 } from "../../HeaderAndFoter/footer";

// Tranquility
import qtop from "../../dropdown_images/Tranquility_images/qtop.png"

import q1 from "../../dropdown_images/Tranquility_images/Abbey_falls-image-2.jpg"
import q2 from "../../dropdown_images/Tranquility_images/Bandaje-Falls.jpg"
import q3 from "../../dropdown_images/Tranquility_images/barkana-falls.jpg"
import q4 from "../../dropdown_images/Tranquility_images/Burude-Falls-550x1100-1.jpg"
import q5 from "../../dropdown_images/Tranquility_images/Chelavara_Water_Falls_portarit.jpg"
import q6 from "../../dropdown_images/Tranquility_images/Godachinmalki_1.jpg"
import q7 from "../../dropdown_images/Tranquility_images/GokakFalls-1.jpg"
import q8 from "../../dropdown_images/Tranquility_images/hebbe-falls_portrait.jpg"
import q9 from "../../dropdown_images/Tranquility_images/hogenakkal_portrait.jpg"
import q10 from "../../dropdown_images/Tranquility_images/Jhari-falls_portrait.jpg"
import q11 from "../../dropdown_images/Tranquility_images/Kalhatti-falls-portrait.jpg"
import q12 from "../../dropdown_images/Tranquility_images/Lalguli-portrait.jpg"
import q13 from "../../dropdown_images/Tranquility_images/landscape-jog-falls.jpg"
import q14 from "../../dropdown_images/Tranquility_images/Magod-Falls-Karnataka-Potrait.jpg"
import q15 from "../../dropdown_images/Tranquility_images/Manikhyadhara_portrait.jpg"
import q16 from "../../dropdown_images/Tranquility_images/sada-falls-2.jpg"
import q17 from "../../dropdown_images/Tranquility_images/sathodi-falls_portrait.jpg"
import q18 from "../../dropdown_images/Tranquility_images/Shivanasamudra-falls_portrait.jpg"
import q19 from "../../dropdown_images/Tranquility_images/Sirimane-Falls_portrait.jpg"
import q20 from "../../dropdown_images/Tranquility_images/unchalli-falls-Karnataka-tourism.jpg"

export function Tranquility() {
  return (
    <div>
      <Head />
      <img style={{ width: "100%",marginTop:"125px" }} className="fqimg" src={qtop} alt="" />
      <h3 style={{ marginLeft: "50px" }}>Tranquility</h3>

      <div className="tqmain">


        <div>
          <img src={q1} alt="" />
          <h1>Abbey Falls</h1>
        </div>

        <div>
          <img src={q2} alt="" />
          <h1>Bandaje Falls</h1>
        </div>

        <div>
          <img src={q3} alt="" />
          <h1>Barkana Falls</h1>
        </div>

        <div>
          <img src={q4} alt="" />
          <h1>Burude Falls</h1>
        </div>

        <div>
          <img src={q5} alt="" />
          <h1>Chelavara Water Falls</h1>
        </div>

        <div>
          <img src={q6} alt="" />
          <h1>Godachinmalki</h1>
        </div>

        <div>
          <img src={q7} alt="" />
          <h1>GokakFalls</h1>
        </div>

        <div>
          <img src={q8} alt="" />
          <h1>Hebbe Falls</h1>
        </div>

        <div>
          <img src={q9} alt="" />
          <h1>Hogenakkal Falls</h1>
        </div>

        <div>
          <img src={q10} alt="" />
          <h1>Jhari Falls</h1>
        </div>

        <div>
          <img src={q11} alt="" />
          <h1>Kalhatti Falls</h1>
        </div>

        <div>
          <img src={q12} alt="" />
          <h1>Lalguli</h1>
        </div>

        <div>
          <img src={q13} alt="" />
          <h1>Jog Falls</h1>
        </div>

        <div>
          <img src={q14} alt="" />
          <h1>Magod Falls</h1>
        </div>

        <div>
          <img src={q15} alt="" />
          <h1>Manikhyadhara</h1>
        </div>

        <div>
          <img src={q16} alt="" />
          <h1>Sada Falls</h1>
        </div>

        <div>
          <img src={q17} alt="" />
          <h1>Sathodi Falls</h1>
        </div>

        <div>
          <img src={q18} alt="" />
          <h1>Shivanasamudra Falls</h1>
        </div>

        <div>
          <img src={q19} alt="" />
          <h1>Sirimane Falls</h1>
        </div>

        <div>
          <img src={q20} alt="" />
          <h1>Unchalli Falls</h1>
        </div>

      </div>


      <Foot />
      <Foot2 />
    </div>
  )
}

