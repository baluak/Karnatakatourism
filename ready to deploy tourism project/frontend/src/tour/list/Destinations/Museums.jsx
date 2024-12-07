import React from "react";
import './Destinations.css';
import Head from "../../HeaderAndFoter/header";
import { Foot, Foot2 } from "../../HeaderAndFoter/footer";

// Museums
import mutopimg from "../../dropdown_images/Museums images/metopimg.png"

import mu1 from "../../dropdown_images/Museums images/2-1.jpg"
import mu2 from "../../dropdown_images/Museums images/3.jpg"
import mu3 from "../../dropdown_images/Museums images/4.jpg"
import mu4 from "../../dropdown_images/Museums images/FOlklore-museum.jpg"
import mu5 from "../../dropdown_images/Museums images/Hasta-Shilpa-kala-village-Thumbnail.jpg"
import mu6 from "../../dropdown_images/Museums images/Indian-Music-Museum-Thumbnail-400-x-300.jpg"
import mu7 from "../../dropdown_images/Museums images/jagan-mohan-palace1.jpg"
import mu8 from "../../dropdown_images/Museums images/janapada-loka-karntaka.jpg"
import mu9 from "../../dropdown_images/Museums images/Malgudi-Museum.jpg"
import mu10 from "../../dropdown_images/Museums images/Manjusha_Car_Museum-1.jpg"
import mu11 from "../../dropdown_images/Museums images/museum-of-anatomy-pathology.jpg"
import mu12 from "../../dropdown_images/Museums images/Mysuru-Sand-Sculpture-Museum.jpg"
import mu13 from "../../dropdown_images/Museums images/Pilikula-Village-thumbnail-400-x-300.jpg"
import mu14 from "../../dropdown_images/Museums images/rail-museum-1.jpg"
import mu15 from "../../dropdown_images/Museums images/sandalwood-museum.jpg"
import mu16 from "../../dropdown_images/Museums images/vitm-1.jpg"


export function Museums() {
  return (
    <div>
      <Head />

      <img src={mutopimg} alt="" className="mutop" />
      <h3 className="muh3">Museums</h3>



      <div className="muimg">

        <div>
          <img src={mu1} alt="" />
          <h2>HAL Heriitage Center <br /> and Arospace Museum</h2>
        </div>

        <div>
          <img src={mu2} alt="" />
          <h2>Government Museum Bangalore</h2>
        </div>

        <div>
          <img src={mu3} alt="" />
          <h2>INS Chapal Warship Museum</h2>
        </div>

        <div>
          <img src={mu4} alt="" />
          <h2>Folklore Museum Mysore</h2>
        </div>

        <div>
          <img src={mu5} alt="" />
          <h2>Hasta Shilpa Kala Village</h2>
        </div>

        <div>
          <img src={mu6} alt="" />
          <h2>Indian Music Experince Museum</h2>
        </div>

        <div>
          <img src={mu7} alt="" />
          <h2>Jaya Chamarajendra Art <br /> Gallery </h2>
        </div>

        <div>
          <img src={mu8} alt="" />
          <h2>Janapada Loka</h2>
        </div>

        <div>
          <img src={mu9} alt="" />
          <h2>Arasalu Railway <br />Station Iconic <br /> Malgudi Days Museum</h2>
        </div>

        <div>
          <img src={mu10} alt="" />
          <h2>Manjusha Museum</h2>
        </div>

        <div>
          <img src={mu11} alt="" />
          <h2>Manipal Museum of Anotomy <br /> and Pathology</h2>
        </div>

        <div>
          <img src={mu12} alt="" />
          <h2>Sand Sculpture <br /> Museum of Mysore</h2>
        </div>

        <div>
          <img src={mu13} alt="" />
          <h2>Pilikula Village Nisarga Dhama</h2>
        </div>

        <div>
          <img src={mu14} alt="" />
          <h2>Mysoru Rail Museum</h2>
        </div>

        <div>
          <img src={mu15} alt="" />
          <h2>Sandalwood Museum</h2>
        </div>

        <div>
          <img src={mu16} alt="" />
          <h2>Vishweshwaraya Indusrtiyal <br />and Technological Museum</h2>
        </div>
      </div>

      <Foot />
      <Foot2 />
    </div>
  )
}