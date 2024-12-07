import React from "react";
import './Destinations.css';
import Head from "../../HeaderAndFoter/header";
import { Foot, Foot2 } from "../../HeaderAndFoter/footer";

// adeventure pics
import adtop from "../../dropdown_images/Adventure images/adtopimg.png"

import ad1 from "../../dropdown_images/Adventure images/kodachadri-hills.jpg"
import ad2 from "../../dropdown_images/Adventure images/kumara-parvatha-2.jpg"
import ad3 from "../../dropdown_images/Adventure images/Kundadri-Hills-Thumb-550_500.jpg"
import ad4 from "../../dropdown_images/Adventure images/scuba-diving-netrani-1.jpg"
import ad5 from "../../dropdown_images/Adventure images/Thumb.jpg"
import ad6 from "../../dropdown_images/Adventure images/white_water-rafting.jpg"
import ad7 from "../../dropdown_images/Adventure images/yana-trecking-karnataka.jpg"



export function Adventure() {
  return (
    <div>
      <Head />

      <img className="mimg" src={adtop} alt="" />
      <h3>Adventure</h3>



      <div className="advimgs">

        <div>
          <img src={ad1} alt="" />
          <h1>Kadachadri</h1>
        </div>

        <div>
          <img src={ad2} alt="" />
          <h1>Kumaraparvatha Trek</h1>
        </div>

        <div>
          <img src={ad3} alt="" />
          <h1>Kundadri Hills</h1>
        </div>

        <div>
          <img src={ad4} alt="" />
          <h1>Scuba Diving In Netrani</h1>
        </div>

        <div>
          <img className="spimg" src={ad5} alt="" />
          <h1>Surfing In Karnataka</h1>
        </div>

        <div>
          <img src={ad6} alt="" />
          <h1>Dandeli White <br /> Water Rafting</h1>
        </div>

        <div>
          <img src={ad7} alt="" />
          <h1>Yana</h1>
        </div>

      </div>
      <br />
      <br />
      <br />

      <Foot />
      <Foot2 />
    </div>
  )
}


