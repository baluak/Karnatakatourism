import React from "react";
import './Experience.css';
import Head from "../../HeaderAndFoter/header";
import { Foot, Foot2 } from "../../HeaderAndFoter/footer";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


import grtop from "../../dropdown_images/Grandeur_images/grtopimg.png"

import gr1 from "../../dropdown_images/Grandeur_images/ballery-fort-1.jpg"
import gr2 from "../../dropdown_images/Grandeur_images/bidar-fort (1).jpg"
import gr3 from "../../dropdown_images/Grandeur_images/bidar-fort.jpg"
import gr4 from "../../dropdown_images/Grandeur_images/chitradurga-fort.jpg"
import gr5 from "../../dropdown_images/Grandeur_images/chitradurgap-550x1100.jpg"
import gr6 from "../../dropdown_images/Grandeur_images/gajendragad-fort-1.jpg"
import gr7 from "../../dropdown_images/Grandeur_images/jamalabad_fort.jpg"
import gr8 from "../../dropdown_images/Grandeur_images/kalaburagi_fort.jpg"
import gr9 from "../../dropdown_images/Grandeur_images/kavaledurga_fort.jpg"
import gr10 from "../../dropdown_images/Grandeur_images/malakhed_fort.jpg"
import gr11 from "../../dropdown_images/Grandeur_images/Manjarabad-Fort-Pravesh-Prabhu-Grandeur-1.jpg"
import gr12 from "../../dropdown_images/Grandeur_images/mirjan-fort.jpg"
import gr13 from "../../dropdown_images/Grandeur_images/nagara-fort-3.jpg"
import gr14 from "../../dropdown_images/Grandeur_images/yadagiri-fort.jpg"


export function Grandeur() {
  return (
    <div>
      <Head />

      <div id="gt1">
        <img id="gt" src={grtop} alt="" />
        <div id="pfirst"><ArrowDownwardIcon fontSize="larger" /></div>
      </div>
      <br />
      <br />
      <br />
      <h3 style={{marginLeft:"50px", bottom:"50px"}}>Grandeur</h3>


      
      <div className="grpage">

        <div>
          <img src={gr1} alt="" />
          <h1>Bellary Fort</h1>
        </div>

        <div>
          <img src={gr2} alt="" />
          <h1>Bidar Fort</h1>
        </div>


        <div>
          <img src={gr4} alt="" />
          <h1>Chithradurga</h1>
        </div>

        <div>
          <img src={gr5} alt="" />
          <h1>Chithradurga Fort</h1>
        </div>

        <div>
          <img src={gr3} alt="" />
          <h1>Bidar Fort 2</h1>
        </div>


        <div>
          <img src={gr6} alt="" />
          <h1>Gajendragad Fort</h1>
        </div>

        <div>
          <img src={gr7} alt="" />
          <h1>Jamalbad Kalburgi Fort</h1>
        </div>

        <div>
          <img src={gr8} alt="" />
          <h1>Kalaburagi Fort</h1>
        </div>

        <div>
          <img src={gr9} alt="" />
          <h1>Kavaledurga Fort</h1>
        </div>

        <div>
          <img src={gr10} alt="" />
          <h1>Malaked Manjarabad Fort</h1>
        </div>

        <div>
          <img src={gr11} alt="" />
          <h1>Manjarabad Fort</h1>
        </div>

        <div>
          <img src={gr12} alt="" />
          <h1>Mirjan Fort</h1>
        </div>

        <div>
          <img src={gr13} alt="" />
          <h1>Nagara Fort</h1>
        </div>

        <div>
          <img src={gr14} alt="" />
          <h1>Yaadgiri Fort</h1>
        </div>

      </div>


      <Foot />
      <Foot2 />
    </div>
  )
}