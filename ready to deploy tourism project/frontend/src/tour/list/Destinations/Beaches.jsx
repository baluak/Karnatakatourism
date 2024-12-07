import React from "react";
import './Destinations.css';
import Head from "../../HeaderAndFoter/header";
import { Foot, Foot2 } from "../../HeaderAndFoter/footer";

// Beaches
import bttimg from "../../dropdown_images/Beaches images/btopimg.png"

import bt1 from "../../dropdown_images/Beaches images/1-550x1100.jpg"
import bt2 from "../../dropdown_images/Beaches images/Black-Sand-Beach-550x1100.jpg"
import bt3 from "../../dropdown_images/Beaches images/Devbagh-beach-Karwar-1-550x1100.jpg"
import bt4 from "../../dropdown_images/Beaches images/Kapu-Beach-2-min-1-550x1100.jpeg"
import bt5 from "../../dropdown_images/Beaches images/Kurumgad-Island-550_1100.jpg"
import bt6 from "../../dropdown_images/Beaches images/malpe-1-550x1100.jpg"
import bt7 from "../../dropdown_images/Beaches images/mattu-beach-karnatakatourism-550x1100.jpg"
import bt8 from "../../dropdown_images/Beaches images/Om-Beach-portrait-550x1100.jpg"
import bt9 from "../../dropdown_images/Beaches images/Ottinene-Beach-1-550x1100.jpg"
import bt10 from "../../dropdown_images/Beaches images/Panambur-Beach_1-550x1100.jpg"
import bt11 from "../../dropdown_images/Beaches images/Someshwara-Beach-1-550x1100.jpg"
import bt12 from "../../dropdown_images/Beaches images/Tannirubhavi_beach_02-550x1100.jpg"
import bt13 from "../../dropdown_images/Beaches images/ullal-beach-karnataka-550x1100.jpg"


export function Beaches() {
  return (
    <div>
      <Head />
      <img className="btimg" src={bttimg} alt="" />
      <h3>Beaches</h3>

      <div className="beach">

        <div>
          <img src={bt1} alt="" />
          <h1>Maravanthe Beach</h1>
        </div>

        <div>
          <img src={bt2} alt="" />
          <h1>Black Sand Beach</h1>
        </div>

        <div>
          <img src={bt3} alt="" />
          <h1>Dev Bagh Beach</h1>
        </div>

        <div>
          <img src={bt4} alt="" />
          <h1>Kupa Beach</h1>
        </div>

        <div>
          <img src={bt5} alt="" />
          <h1>Kurumgad Island</h1>
        </div>

        <div>
          <img src={bt6} alt="" />
          <h1>Maple Beach</h1>
        </div>

        <div>
          <img src={bt7} alt="" />
          <h1>Mattu Beach</h1>
        </div>

        <div>
          <img src={bt8} alt="" />
          <h1>Om Beach Gokarna</h1>
        </div>

        <div>
          <img src={bt9} alt="" />
          <h1>Ottinene Beach</h1>
        </div>

        <div>
          <img src={bt10} alt="" />
          <h1>Panambur Beach</h1>
        </div>

        <div>
          <img src={bt11} alt="" />
          <h1>Someshwara Beach</h1>
        </div>

        <div>
          <img src={bt12} alt="" />
          <h1>Tannirbhavi Beach</h1>
        </div>

        <div>
          <img src={bt13} alt="" />
          <h1>Ullaa Beach</h1>
        </div>

      </div>

      <Foot />
      <Foot2 />
    </div>
  )
}