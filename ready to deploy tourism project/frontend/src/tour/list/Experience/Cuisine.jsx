import React from "react";
import Head from "../../HeaderAndFoter/header";
import { Foot, Foot2 } from "../../HeaderAndFoter/footer";

// Cuisine images
import c1 from "../../dropdown_images/Cusine images/topimage.png"
import c2 from "../../dropdown_images/Cusine images/52_2020_Mangalore-Buns-550x550.jpg"
import c3 from "../../dropdown_images/Cusine images/Goli_baje_Mangaloe_bajji-550x550.jpg"
import c4 from "../../dropdown_images/Cusine images/mangalore-fish-curry-550x550.jpg"
import c5 from "../../dropdown_images/Cusine images/Neer-dosa-feature-550x550.jpg"
import c6 from "../../dropdown_images/Cusine images/patrode-550x550.jpg"

export default function Cuisine() {
  return (
    <div>
      <Head />


      <div id="ctop">
        <img src={c1} alt="" />
      </div>

      <div className="tag">
        <h3>Cuisines</h3>
        <p>Be it Dharwad Peda of North Karnataka or Bamboo Shoot Curry of South Karnataka to Mangalore’s famous Neer Dose, the state has a multitude of relishing cuisine options to take your taste buds through a tour of scrumptious, mouth-watering and finger licking dishes. Treat your tongue with sweet and spicy flavors of Karnataka</p>
      </div>

      <h1 className="subm">Explore Coastal Karnataka</h1>

      <br />
      <br />

      <div className="cmain">

        <div>
          <img src={c2} alt="" />
          <h1>Bnana Bun</h1>
        </div>

        <div>
          <img src={c3} alt="" />
          <h1>Goli Baje</h1>
        </div>


        <div>
          <img src={c4} alt="" />
          <h1>Mangaloru Fish Curry</h1>
        </div>

        <div>
          <img src={c5} alt="" />
          <h1>Neer Dosa</h1>
        </div>

        <div>
          <img src={c6} alt="" />
          <h1>Patrode</h1>
        </div>


      </div>
      <Foot />
      <Foot2 />
    </div>
  )
}