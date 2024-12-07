import React from "react";
import './Destinations.css';
import Head from "../../HeaderAndFoter/header";
import { Foot, Foot2 } from "../../HeaderAndFoter/footer";

// theme park
import tptop from "../../dropdown_images/Theme Parks images/thtop.png"

import tp1 from "../../dropdown_images/Theme Parks images/Bengaluru-Lalbhag-1.jpg"
import tp2 from "../../dropdown_images/Theme Parks images/brindavan_portrait.jpg"
import tp3 from "../../dropdown_images/Theme Parks images/cabbon-park.jpg"
import tp4 from "../../dropdown_images/Theme Parks images/Dodda-alad-mara-big-banyan-tree.jpg"
import tp5 from "../../dropdown_images/Theme Parks images/Freedom_Park-1.jpg"
import tp6 from "../../dropdown_images/Theme Parks images/GRS-Fantasy-park-fun.jpg"
import tp7 from "../../dropdown_images/Theme Parks images/innovative-film-city.jpg"
import tp8 from "../../dropdown_images/Theme Parks images/lav-kush-garden-almatti-karnataka.jpg"
import tp9 from "../../dropdown_images/Theme Parks images/Lumbini-Gardens.jpg"
import tp10 from "../../dropdown_images/Theme Parks images/snow-park-bangalore.jpg"
import tp11 from "../../dropdown_images/Theme Parks images/utsavrock-garder-market.jpg"
import tp12 from "../../dropdown_images/Theme Parks images/WOnderla-Portrait.jpg"


export function Themepark() {
  return (
    <div>
      <Head />

      <img src={tptop} alt="" className="tptop" />
      <h3>Theme Parks / Recreational Tourism</h3>

      <div className="thimg">


        <div>
          <img src={tp1} alt="" />
          <h1>Lalbag Botanical Garden</h1>
        </div>

        <div>
          <img src={tp2} alt="" />
          <h1>Brindavan Garden</h1>
        </div>

        <div>
          <img src={tp3} alt="" />
          <h1>Cubban Park</h1>
        </div>

        <div>
          <img src={tp4} alt="" />
          <h1>Ramohalli Big Banian Tree</h1>
        </div>

        <div>
          <img src={tp5} alt="" />
          <h1>Freedom Park Bengaluru</h1>
        </div>

        <div>
          <img src={tp6} alt="" />
          <h1>GRS Fantasy Park</h1>
        </div>

        <div>
          <img src={tp7} alt="" />
          <h1>Innovative Film City</h1>
        </div>

        <div>
          <img src={tp8} alt="" />
          <h1>Lav Kush Garden Almatty</h1>
        </div>

        <div>
          <img src={tp9} alt="" />
          <h1>Lumbini Garden</h1>
        </div>

        <div>
          <img src={tp10} alt="" />
          <h1>Snow Park</h1>
        </div>

        <div>
          <img src={tp11} alt="" />
          <h1>Utsav Rock <br /> Garden Gottagodi</h1>
        </div>

        <div>
          <img src={tp12} alt="" />
          <h1>Wonderla</h1>
        </div>

      </div>

      <Foot />
      <Foot2 />
    </div>
  )
}