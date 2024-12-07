import React from "react";
import Head from "../../HeaderAndFoter/header";
import { Foot, Foot2 } from "../../HeaderAndFoter/footer";
import './Experience.css'


// art-forms images
import topimg from "../../dropdown_images/Art_Formes_images/topimage.png"
import af1 from "../../dropdown_images/Art_Formes_images/DOLLU-KUNITHA1.jpg"
import af2 from "../../dropdown_images/Art_Formes_images/Gombe-Aata_image_Portrait.jpg"
import af3 from "../../dropdown_images/Art_Formes_images/Kamsale-Nritya-Image.jpg"
import af4 from "../../dropdown_images/Art_Formes_images/tiger-dance.jpg"
import af5 from "../../dropdown_images/Art_Formes_images/Yakshagana-1.jpg"




export default function Artforms() {
  return (
    <div id="parentbox">
      <Head />

      <img className="top" src={topimg} alt="" />

      <div className="dis">
        <h3 style={{ color: "black" }}>Art Forms</h3>
        <p>The art of story-telling comes from passion and creativity. It is embedded within and it is portrayed so naturally and beautifully. Be it drama, dance, music or story-telling, you can witness vivid diversity in terms of cultural dress, traditional dance forms, social and cultural history.</p>
<h1>Explore the Folk Dance</h1>

      </div>

      <br />
      <br />
      <div className="main">
        <div className="one"><img src={af1} alt="" /><h2>DOLLU KUNITHA</h2></div>
        <div className="one"><img src={af2} alt="" /><h2>GOMBE AATTA</h2></div>
        <div className="one"><img src={af3} alt="" /><h2>KAMSALE NATYA</h2></div>
        <div className="one"><img src={af4} alt="" /><h2>TIGER DANCE</h2></div>
        <div className="one"><img src={af5} alt="" /><h2>YAKSHAGANA</h2></div>
      </div>


      <Foot />
      <Foot2 />
    </div>
  )
}

