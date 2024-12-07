import React from "react";
import './Destinations.css';
import Head from "../../HeaderAndFoter/header";
import { Foot, Foot2 } from "../../HeaderAndFoter/footer";

// Eco-Tourism
import ecotop from "../../dropdown_images/Eco Tourism images/etopimg.png"

import ec1 from "../../dropdown_images/Eco Tourism images/br-hills.jpg"
import ec2 from "../../dropdown_images/Eco Tourism images/chikkamangaluru-karnataka.jpg"
import ec3 from "../../dropdown_images/Eco Tourism images/jungle-lodge.jpg"
import ec4 from "../../dropdown_images/Eco Tourism images/kemman_gundi-karnataka.jpg"
import ec5 from "../../dropdown_images/Eco Tourism images/kote-betta-karnataka.jpg"
import ec6 from "../../dropdown_images/Eco Tourism images/nandi-hills-karnataka.jpg"
import ec7 from "../../dropdown_images/Eco Tourism images/Sakleshpur.jpg"
import ec8 from "../../dropdown_images/Eco Tourism images/savanadurga-karnataka.jpg"

export function Ecotour() {
  return (
    <div>
      <Head />

        <img className="ecti" src={ecotop} alt="" />
        <h3 className="ech3">Eco Tourism</h3>


<div className="handp">

      <h1 className="ech1">What is Eco Tourism</h1>
      <p className="ecp">Eco Tourism is all about conserving and preserving nature and the environment. It offers economic incentives mainly for the purpose of conservation and enhancement of bio-cultural diversity. Nature is an important part of our daily lives and we cannot deny the immense effect it has on the human race. Ecotourism has helped enrich the forests and ecosystems of Karnataka making it a delightful experience for travelers and adventurers. They have combined the goals of preservation of nature and upliftment of local communities and created a flawless system of ecotourism.</p>
      </div>


      <div className="ecocont">


        <div>
          <img src={ec1} alt="" />
          <h2>BR Hills</h2>
        </div>

        <div>
          <img src={ec2} alt="" />
          <h2>Chikkamalaluru</h2>
        </div>

        <div>
          <img src={ec3} alt="" />
          <h2>Jungle Lodges and <br /> Resorts in Karnataka</h2>
        </div>

        <div>
          <img src={ec4} alt="" />
          <h2>Kemmmannu Gundi</h2>
        </div>

        <div>
          <img src={ec5} alt="" />
          <h2>Kote Betta</h2>
        </div>

        <div>
          <img src={ec6} alt="" />
          <h2>Nandi Hills</h2>
        </div>

        <div>
          <img src={ec7} alt="" />
          <h2>Sakaleshpur</h2>
        </div>

        <div>
          <img src={ec8} alt="" />
          <h2>Savanadurga</h2>
        </div>

      </div>

      <Foot />
      <Foot2 />
    </div>
  )
}