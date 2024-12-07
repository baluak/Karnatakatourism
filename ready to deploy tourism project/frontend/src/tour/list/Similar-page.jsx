import React from "react";
import Head from "../HeaderAndFoter/header";
import { Foot, Foot2 } from "../HeaderAndFoter/footer";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import "./similar.css"


// similar
import sitop from "../dropdown_images/similar_page-images/topimg.jpg"

import s1 from "../dropdown_images/similar_page-images/Sivanasamudra-water-falls.jpg"
import s2 from "../dropdown_images/similar_page-images/Skandagiri-Treck.jpg"
import s3 from "../dropdown_images/similar_page-images/seven wonders of karnataka.jpg"
import s4 from "../dropdown_images/similar_page-images/Things to do in Bylakuppe.jpg"
import s5 from "../dropdown_images/similar_page-images/Places to Visit in Honnavar.jpg"
import s6 from "../dropdown_images/similar_page-images/Places to visit in Karnataka in Winter.jpg"
import s7 from "../dropdown_images/similar_page-images/Places to visit in Karnataka this Christmas.jpg"
import s8 from "../dropdown_images/similar_page-images/Places to see in Gokarna.jpg"
import s9 from "../dropdown_images/similar_page-images/Things to do in Hampi.jpg"

export default function Similar() {
  return (
    <div>
      <Head />


      <div className="sim">
      <h1 className="fh1">Karnataka Tourism</h1>

        <img src={sitop} alt="" className="timg" />
        <h2>Police National Memorial</h2>
        <p>The National Police Memorial is a significant monument in India that pays tribute to the brave police personnel who have sacrificed their lives in the line of duty. It stands as a solemn reminder of their valor, dedication, and commitment </p>
        <h4>July 6, 2023  <span className="tag"><LocalOfferIcon /></span>  Blog</h4>



        <img src={s1} alt="" className="subimg" />
        <h2>Shivanasamudra Waterfalls</h2>
        <p>It is incredible to know that Asia’s first hydroelectric power stations which were set up in 1902 are in Karnataka at Malayalli taluk of Mandya district under the Mysuru Kingdom. The hydroelectric power plant is still active.</p>
        <h4>March 31, 2023  <span className="tag"><LocalOfferIcon /> </span> Blog, Exploring</h4>


        <img src={s2} alt="" className="subimg" />
        <h2>Skandagiri Trek</h2>
        <p>Also known as Kalavara Durga, Skandagiri hills famous for their gorgeous sunrise and sunset views hold historical significance as the ruins of the 18th century Tipu Sultan fort can be seen at the top. </p>
        <h4>March 17, 2023 <span className="tag"><LocalOfferIcon /> </span> Blog, Exploring</h4>



        <img src={s3} alt="" className="subimg" />
        <h2>Seven Wonders of Karnataka</h2>
        <p>The list of seven wonders of Karnataka is officially unveiled. An initiative by the media giant Asianet Suvarna News, Kannada Prabha and Karnataka Tourism is supported by the Government of Karnataka, Karnataka State Transport Development Corporation and Jungle Lodges and </p>
        <h4>March 9, 2023 <span className="tag"><LocalOfferIcon /> </span> Blog, Exploring</h4>


        <img src={s4} alt="" className="subimg" />
        <h2>Things to do in Bylakuppe</h2>
        <p>Here are the top 5 things to do in Bylakuppe: Namdroling Monastery, Tashi Lhungo Monastery, Sera Monastery, Dubare Elephant Camp, Chiklihole Reservoir </p>
        <h4>February 14, 2023 <span className="tag"><LocalOfferIcon /> </span> Blog, Exploring</h4>


        <img src={s5} alt="" className="subimg" />
        <h2>Places to Visit in Honnavar</h2>
        <p>Looking for a quaint holiday destination away from the hustle and bustle of a mainstream location, then Honnavar is the answer. A scenic small town in Uttara Kannada with the Arabian Sea on one side and the Western Ghats on </p>
        <h4>February 8, 2023 <span className="tag"><LocalOfferIcon /> </span> Blog, Exploring</h4>


        <img src={s6} alt="" className="subimg" />
        <h2>Places to visit in Karnataka in Winter</h2>
        <p>A laid-back, quaint, and serene town in the Uttar Kannada district of Karnataka, Gokarna used to be a backpacker’s paradise. But no longer now. This happening town with an array of activities from beach surfing to visiting an ancient temple, </p>
        <h4>December 22, 2022 <span className="tag"><LocalOfferIcon /> </span> Blog, Exploring</h4>


        <img src={s7} alt="" className="subimg" />
        <h2>Places to visit in Karnataka this Christmas</h2>
        <p>The season of joy and happiness is just around the corner. Each year, the entire world celebrates Christmas on 25th December to mark the birth of Jesus Christ. According to the Christian religion, Jesus Christ is believed to be the </p>
        <h4>December 21, 2022 <span className="tag"><LocalOfferIcon /> </span> Blog</h4>


        <img src={s8} alt="" className="subimg" />
        <h2>Places to see in Gokarna</h2>
        <p>A laid-back, quaint, and serene town in the Uttar Kannada district of Karnataka, Gokarna used to be a backpacker’s paradise. But no longer now. This happening town with an array of activities from beach surfing to visiting an ancient temple, </p>
        <h4>December 15, 2022 <span className="tag"><LocalOfferIcon /> </span> Blog, Exploring</h4>



        <img src={s9} alt="" className="subimg" />
        <h2>Things to do in Hampi</h2>
        <p>Better known for Virupaksha Temple, the iconic Chariot, and the ruins of the Vijayanagara Empire, the historical city Hampi has a lot more to offer to travellers. In the era of experiential and slow travel, Hampi is a place to </p>
        <h4>December 9, 2022 <span className="tag"><LocalOfferIcon /> </span> Blog, Exploring</h4>

      </div>


      <Foot />
      <Foot2 />
    </div>
  )
}