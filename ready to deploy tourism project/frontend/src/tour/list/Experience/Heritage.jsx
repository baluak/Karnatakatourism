import React from "react";
import './Experience.css';
import Head from "../../HeaderAndFoter/header";
import { Foot, Foot2 } from "../../HeaderAndFoter/footer";

// Heritage images
import htopimg from "../../dropdown_images/Heritage_images/htopimge.png"

import h1 from "../../dropdown_images/Heritage_images/Aihole-durga-temple-1100x550.jpg"
import h2 from "../../dropdown_images/Heritage_images/badami-karnataka.jpg"
import h3 from "../../dropdown_images/Heritage_images/Bahamani-Tombs-Bidar-ashtoor-800x550.jpg"
import h4 from "../../dropdown_images/Heritage_images/Chandravalli-cave-1-800x550.jpg"
import h5 from "../../dropdown_images/Heritage_images/Chennakeshava-swami-temple_1920x1080-1100x550.jpg"
import h6 from "../../dropdown_images/Heritage_images/durga-temple-aihole.jpg"
import h7 from "../../dropdown_images/Heritage_images/Gateway-Bidar-Fort-p-800x550.jpg"
import h8 from "../../dropdown_images/Heritage_images/Hoysaleswara-Temple-Halebeedu_2-1100x550.jpg"
import h9 from "../../dropdown_images/Heritage_images/Iswara_temple_in_Jalasangvi-1-800x550.jpg"
import h10 from "../../dropdown_images/Heritage_images/Krishna-Bazaar-Pushkarni-Hampi-800x550.jpg"
import h11 from "../../dropdown_images/Heritage_images/Stone-Chariot-Hampi-Heritage-800x550.jpg"

export function Heritage() {
  return (
    <div>
      <Head />
      <img className="hertop" src={htopimg} alt="" />
      <h3 style={{marginLeft:"50px",width:"200px"}}>Heritage</h3>

      <div className="herimg">


        <div>
          <img src={h2} alt="" />
          <h1>Badami</h1>
        </div>

        <div>
          <img src={h3} alt="" />
          <h1>Ashtoor</h1>
        </div>

        <div>
          <img src={h4} alt="" />
          <h1>Chandravalli</h1>
        </div>

        <div>
          <img src={h1} alt="" />
          <h1>Aihole</h1>
        </div>

        <div>
          <img src={h5} alt="" />
          <h1 id="bel">Beluru Channakeshava Temple</h1>
        </div>

        <div>
          <img src={h6} alt="" />
          <h1>Durga Temple Aihole</h1>
        </div>

        <div>
          <img src={h7} alt="" />
          <h1>Basava Kalyana</h1>
        </div>

        <div>
          <img src={h8} alt="" />
          <h1>Halebeedu</h1>
        </div>

        <div>
          <img src={h9} alt="" />
          <h1>Jalasangvi</h1>
        </div>

        <div>
          <img src={h10} alt="" />
          <h1>Hampi</h1>
        </div>

        <div>
          <img src={h11} alt="" />
          <h1>Stone Chariot Hampi</h1>
        </div>

      </div>

      <Foot />
      <Foot2 />
    </div>
  )
}