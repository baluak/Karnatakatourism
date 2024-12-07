import React from "react";
import './Experience.css';
import Head from "../../HeaderAndFoter/header";
import { Foot, Foot2 } from "../../HeaderAndFoter/footer";


// spirituality images
import sptopimg from "../../dropdown_images/spirituality_images/sptop.png"

import sp1 from "../../dropdown_images/spirituality_images/holy-trinity-church.jpg"
import sp2 from "../../dropdown_images/spirituality_images/infant-jesus-shrine.jpg"
import sp3 from "../../dropdown_images/spirituality_images/milagres-church.jpg"
import sp4 from "../../dropdown_images/spirituality_images/mount-rosary-church-1.jpg"
import sp5 from "../../dropdown_images/spirituality_images/sacred-heart-church-3.jpg"
import sp6 from "../../dropdown_images/spirituality_images/shettihalli-church.jpg"
import sp7 from "../../dropdown_images/spirituality_images/st-aloysius-chapel.jpg"
import sp8 from "../../dropdown_images/spirituality_images/st-marys-basilica.jpg"
import sp9 from "../../dropdown_images/spirituality_images/st-marys-church.jpg"
import sp10 from "../../dropdown_images/spirituality_images/st-patricks-church.jpg"
import sp11 from "../../dropdown_images/spirituality_images/st-philomenas-cathedral.jpg"

export function Spirituality() {
  return (
    <div>
      <Head />
      <img className="sptop" src={sptopimg} alt="" />
      <h3 style={{marginLeft:"50px",marginTop:"-2px"}}>Spirituality</h3>
<h1 id="th1">Explore the Churches</h1>


<div className="spi">

<div>
  <img src={sp1} alt="" />
  <h1>Holy Trinity Church</h1>
</div>

<div>
  <img src={sp2} alt="" />
  <h1>Infant Jesus Shrine</h1>
</div>

<div>
  <img src={sp3} alt="" />
  <h1>Milagrace Church</h1>
</div>

<div>
  <img src={sp4} alt="" />
  <h1>Mount Rosary Church</h1>
</div>

<div>
  <img src={sp5} alt="" />
  <h1>Sacred Heart Church</h1>
</div>

<div>
  <img src={sp6} alt="" />
  <h1>Shettihalli Church</h1>
</div>

<div>
  <img src={sp7} alt="" />
  <h1>Aloysius Chappel</h1>
</div>

<div>
  <img src={sp8} alt="" />
  <h1>St Marry Besilica</h1>
</div>

<div>
  <img src={sp9} alt="" />
  <h1>St Marry Church</h1>
</div>

<div>
  <img src={sp10} alt="" />
  <h1>St Patrick Churh</h1>
</div>

<div>
  <img src={sp11} alt="" />
  <h1>St Philomina Church</h1>
</div>

</div>


      <Foot />
      <Foot2 />
    </div>
  )
}