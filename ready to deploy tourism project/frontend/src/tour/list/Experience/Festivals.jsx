import React from "react";
import './Experience.css';
import Head from "../../HeaderAndFoter/header";
import { Foot, Foot2 } from "../../HeaderAndFoter/footer";

// festival images
import fe1 from "../../dropdown_images/Festival_images/topimage.png"

import fe2 from "../../dropdown_images/Festival_images/gomabe_kunitha-Chalukya-Utsava-550x550.jpg"
import fe3 from "../../dropdown_images/Festival_images/Hampi-utsav-1-550x550.jpg"
import fe4 from "../../dropdown_images/Festival_images/kanakagiri-utsava-550x550.jpg"
import fe5 from "../../dropdown_images/Festival_images/lakkundi-utsava-550x550.jpg"
import fe6 from "../../dropdown_images/Festival_images/Shreemann-Narayana-550x550.jpg"




export default function Festivals() {
  return (
    <div className="femain">
      <Head />
      <img className="ftop" src={fe1} alt="" />

      <div className="feheading">
        <h3>Festivals :</h3>
         :<p>Each festival in Karnataka has a story to narrate to history of former rulers and empires. There is so much value given to the culture and ceremonies. From Pattadakkalu Dance Festival to Shravanabelagola Maha Mastakabisheka to Kaveri Sankramana festival, Karnataka is spread across with cultures to admire.</p>
        <h1>Explore the North Karnataka</h1>
      </div>

      <div className="feimg">

        <div>
          <img src={fe2} alt="" />
          <h1>Chalukya Utsava</h1>
        </div>

        <div>
          <img src={fe3} alt="" />
          <h1>Hampi Utsava 2023</h1>
        </div>

        <div>
          <img src={fe4} alt="" />
          <h1>Kanakagiri Utsava</h1>
        </div>

        <div>
          <img src={fe5} alt="" />
          <h1>Lakkkundi Utsava</h1>
        </div>

        <div>
          <img src={fe6} alt="" />
          <h1 id="seph">Pattadakallu Dance Festival</h1>
        </div>


      </div>

      <Foot />
      <Foot2 />

    </div>
  )
}