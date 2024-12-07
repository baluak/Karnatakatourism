import React from "react";
import './Destinations.css';
import Head from "../../HeaderAndFoter/header";
import { Foot, Foot2 } from "../../HeaderAndFoter/footer";

// Hillstations images
import hitopimg from "../../dropdown_images/Hill Stations images/hstopimg.png"

import hs1 from "../../dropdown_images/Hill Stations images/agumbe-1.jpg"
import hs2 from "../../dropdown_images/Hill Stations images/br-hills.jpg"
import hs3 from "../../dropdown_images/Hill Stations images/br-tiger-reserve-wildlife-sanctuary.jpg"
import hs4 from "../../dropdown_images/Hill Stations images/chikkamangaluru-karnataka.jpg"
import hs5 from "../../dropdown_images/Hill Stations images/gopalswamy-betta.jpg"
import hs6 from "../../dropdown_images/Hill Stations images/Hill-Stations-2-550x1000.jpg"
import hs7 from "../../dropdown_images/Hill Stations images/kemman_gundi-karnataka.jpg"
import hs8 from "../../dropdown_images/Hill Stations images/kodachadri-hills.jpg"
import hs9 from "../../dropdown_images/Hill Stations images/kote-betta-karnataka.jpg"
import hs10 from "../../dropdown_images/Hill Stations images/kundadri_Jain_temple-1.jpg"
import hs11 from "../../dropdown_images/Hill Stations images/malemahadeshwara-1.jpg"
import hs12 from "../../dropdown_images/Hill Stations images/mullaiyanagiri-1.jpg"
import hs13 from "../../dropdown_images/Hill Stations images/nandi-hills-karnataka.jpg"
import hs14 from "../../dropdown_images/Hill Stations images/Sakleshpur.jpg"
import hs15 from "../../dropdown_images/Hill Stations images/tadaindmol-karnataka.jpg"

export function Hillstations() {
  return (
    <div>
      <Head />
      <img src={hitopimg} alt="" className="hitop" />
      <h3 className="label">Hill Stations</h3>

      <div className="hsmain">


        <div>
          <img src={hs1} alt="" />
          <h2>Agumbe</h2>
        </div>

        <div>
          <img src={hs2} alt="" />
          <h2>BR Hills</h2>
        </div>

        <div>
          <img src={hs3} alt="" />
          <h2>BR Tiger Reserve and <br />Wildlife Sanctuary</h2>
        </div>

        <div>
          <img src={hs4} alt="" />
          <h2>Chikkamagaluru</h2>
        </div>


        <div>
          <img src={hs5} alt="" />
          <h2>Himavad Gopala Swamy Betta</h2>
        </div>

        <div>
          <img src={hs6} alt="" />
          <h2>Hill Station</h2>
        </div>

        <div>
          <img src={hs7} alt="" />
          <h2>Kemmanugundi</h2>
        </div>

        <div>
          <img src={hs8} alt="" />
          <h2> Kodachadri Hill</h2>
        </div>

        <div>
          <img src={hs9} alt="" />
          <h2>Kote Betta</h2>
        </div>

        <div>
          <img src={hs10} alt="" />
          <h2>Kundadri Jain Temple</h2>
        </div>

        <div>
          <img src={hs11} alt="" />
          <h2>Male Mahadeswara Betta</h2>
        </div>

        <div>
          <img src={hs12} alt="" />
          <h2>Mullayanagiri peak</h2>
        </div>

        <div>
          <img src={hs13} alt="" />
          <h2>Nandi Hill</h2>
        </div>

        <div>
          <img src={hs14} alt="" />
          <h2>Shakaleshpura</h2>
        </div>

        <div>
          <img src={hs15} alt="" />
          <h2>Tadiandamal</h2>
        </div>

      </div>
      <Foot />
      <Foot2 />
    </div>
  )
}