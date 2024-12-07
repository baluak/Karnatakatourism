import React from "react";
import './Experience.css';
import Head from "../../HeaderAndFoter/header";
import { Foot, Foot2 } from "../../HeaderAndFoter/footer";

// Thewild images
import twtopimg from "../../dropdown_images/The-Wild-Images/twtop.png"

import tw1 from "../../dropdown_images/The-Wild-Images/attiveri-bird-sanctuary.jpg"
import tw2 from "../../dropdown_images/The-Wild-Images/bonal-bird-sanctuary.jpg"
import tw3 from "../../dropdown_images/The-Wild-Images/ghataprabha-bird-sanctuary.jpg"
import tw4 from "../../dropdown_images/The-Wild-Images/gudavi-bird-sanctuary.jpg"
import tw5 from "../../dropdown_images/The-Wild-Images/hornbills-dandeli.jpg"
import tw6 from "../../dropdown_images/The-Wild-Images/kokkarebellur.jpg"
import tw7 from "../../dropdown_images/The-Wild-Images/Peacoak-550x500-1.jpg"
import tw8 from "../../dropdown_images/The-Wild-Images/ranganathittu-bird-sanctuary.jpg"

export function Thewild() {
  return (
    <div>
      <Head />
      <img className="toptw" src={twtopimg} alt="" />
      <h3 style={{color:"black", marginLeft:"50px"}}>The Wild</h3>

<h1 style={{color:"black", marginLeft:"40%"}}>Explore the Bird Sanctuaries</h1>

      <div className="twicont">

        <div>
          <img src={tw1} alt="" />
          <h1>Attiveri Bird Sanctuary</h1>
        </div>

        <div>
          <img src={tw2} alt="" />
          <h1>Bonal Bird Sanctuary</h1>
        </div>

        <div>
          <img src={tw3} alt="" />
          <h1>Ghataprabha Bird Sanctuary</h1>
        </div>

        <div>
          <img src={tw4} alt="" />
          <h1>Gudavi Bird Sanctuary</h1>
        </div>

        <div>
          <img src={tw5} alt="" />
          <h1>Hornbills Dandeli</h1>
        </div>

        <div>
          <img src={tw6} alt="" />
          <h1>Kokkarebellur</h1>
        </div>

        <div>
          <img src={tw7} alt="" />
          <h1>Adhichunchanagiri Peacock Sanctuary</h1>
        </div>

        <div>
          <img src={tw8} alt="" />
          <h1>Ranganathittu Bird Sanctuary</h1>
        </div>

      </div>

      <Foot />
      <Foot2 />
    </div>
  )
}