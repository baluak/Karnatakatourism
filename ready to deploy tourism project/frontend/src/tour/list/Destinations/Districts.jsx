import React from "react";
import './Destinations.css';
import Head from "../../HeaderAndFoter/header";
import { Foot, Foot2 } from "../../HeaderAndFoter/footer";

// Disrtrict
import ditop from "../../dropdown_images/Districts images/ditopimg.png"

import dis1 from "../../dropdown_images/Districts images/bagalkotp.jpg"
import dis2 from "../../dropdown_images/Districts images/Ballari-Fort.jpg"
import dis3 from "../../dropdown_images/Districts images/belgaump.jpg"
import dis4 from "../../dropdown_images/Districts images/bellaryp.jpg"
import dis5 from "../../dropdown_images/Districts images/Bhadra.jpg"
import dis6 from "../../dropdown_images/Districts images/bidarp.jpg"
import dis7 from "../../dropdown_images/Districts images/BLR-Rural.jpg"
import dis8 from "../../dropdown_images/Districts images/Chamarajanagara_Bandipura.jpg"
import dis9 from "../../dropdown_images/Districts images/Chikballapur.jpg"
import dis10 from "../../dropdown_images/Districts images/chitradurgap.jpg"
import dis11 from "../../dropdown_images/Districts images/davangerep.jpg"
import dis12 from "../../dropdown_images/Districts images/dharwadp.jpg"
import dis13 from "../../dropdown_images/Districts images/Gateway-Bidar-Fort-p.jpg"
import dis14 from "../../dropdown_images/Districts images/hassanp.jpg"
import dis15 from "../../dropdown_images/Districts images/haverip.jpg"
import dis16 from "../../dropdown_images/Districts images/IMG_3029.jpg"
import dis17 from "../../dropdown_images/Districts images/kalaburgip.jpg"
import dis18 from "../../dropdown_images/Districts images/kodagup.jpg"
import dis19 from "../../dropdown_images/Districts images/kolarp.jpg"
import dis20 from "../../dropdown_images/Districts images/KOppal-1.jpg"
import dis21 from "../../dropdown_images/Districts images/mandyap.jpg"
import dis22 from "../../dropdown_images/Districts images/mysorep.jpg"
import dis23 from "../../dropdown_images/Districts images/Raichur_Fort_portrait.jpg"
import dis24 from "../../dropdown_images/Districts images/Ramnagara.jpg"
import dis25 from "../../dropdown_images/Districts images/Talaguppa-portrait_1.jpg"
import dis26 from "../../dropdown_images/Districts images/Tumkur.jpg"
import dis27 from "../../dropdown_images/Districts images/uttarkannadap.jpg"
import dis28 from "../../dropdown_images/Districts images/Venur_1.jpg"
import dis29 from "../../dropdown_images/Districts images/vijaypp.jpg"
import dis30 from "../../dropdown_images/Districts images/yadagirip.jpg"




export function Districts() {
  return (
    <div>
      <Head />
      <img className="distop" src={ditop} alt="" />
      <h3 style={{marginLeft:"50px"}} > Districts</h3>

      <div className="disimages">


        <div>
          <img src={dis1} alt="" />
          <h1>Bagalkote</h1>
        </div>

        <div>
          <img src={dis2} alt="" />
          <h1>Ballari</h1>
        </div>

        <div>
          <img src={dis3} alt="" />
          <h1>Belgavi</h1>
        </div>

        <div>
          <img src={dis4} alt="" />
          <h1>Vijaya Nagara</h1>
        </div>

        <div>
          <img src={dis5} alt="" />
          <h1>Chikkamagaluru</h1>
        </div>

        <div>
          <img src={dis6} alt="" />
          <h1>Bidar</h1>
        </div>

        <div>
          <img src={dis7} alt="" />
          <h1>Bengaluru Rural</h1>
        </div>

        <div>
          <img src={dis8} alt="" />
          <h1>Chamaraja Nagara</h1>
        </div>

        <div>
          <img src={dis9} alt="" />
          <h1>Chikkaballapura</h1>
        </div>

        <div>
          <img src={dis10} alt="" />
          <h1>Chitradurga</h1>
        </div>

        <div>
          <img src={dis11} alt="" />
          <h1>Davanagere</h1>
        </div>

        <div>
          <img src={dis12} alt="" />
          <h1>Dharwad</h1>
        </div>

        <div>
          <img src={dis13} alt="" />
          <h1>Gadag</h1>
        </div>

        <div>
          <img src={dis14} alt="" />
          <h1>Hassan</h1>
        </div>

        <div>
          <img src={dis15} alt="" />
          <h1>Haveri</h1>
        </div>

        <div>
          <img src={dis16} alt="" />
          <h1>Bengaluru Urban</h1>
        </div>

        <div>
          <img src={dis17} alt="" />
          <h1>Kalaburgi</h1>
        </div>

        <div>
          <img src={dis18} alt="" />
          <h1>Kodagu</h1>
        </div>

        <div>
          <img src={dis19} alt="" />
          <h1>Kolar</h1>
        </div>

        <div>
          <img src={dis20} alt="" />
          <h1>Koppal</h1>
        </div>

        <div>
          <img src={dis21} alt="" />
          <h1>Mandya</h1>
        </div>

        <div>
          <img src={dis22} alt="" />
          <h1>Mysuru</h1>
        </div>

        <div>
          <img src={dis23} alt="" />
          <h1>Raichuru</h1>
        </div>

        <div>
          <img src={dis24} alt="" />
          <h1>Ramanagara</h1>
        </div>

        <div>
          <img src={dis25} alt="" />
          <h1>Shivamoga</h1>
        </div>

        <div>
          <img src={dis26} alt="" />
          <h1>Thumakuru</h1>
        </div>

        <div>
          <img src={dis27} alt="" />
          <h1>Uttara Kannada</h1>
        </div>

        <div>
          <img src={dis28} alt="" />
          <h1>Udupi</h1>
        </div>

        <div>
          <img src={dis29} alt="" />
          <h1>Vijayapura</h1>
        </div>

        <div>
          <img src={dis30} alt="" />
          <h1>Yaadgiri</h1>
        </div>

        

      </div>

      <Foot />
      <Foot2 />
    </div>
  )
}