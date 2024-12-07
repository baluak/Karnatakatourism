import React from "react";
import "./headfoot.css";
import { Link } from "react-router-dom";
import Similar from "../list/Similar-page";

export function Foot() {
  return (
    <div id="outer">
      <br />
      <Link to="/">
        <h1 id="view">VIEW ALL</h1>
      </Link>
      <br />
      <br />

      <ul id="firstlist" style={{ marginTop: "15px" }}>
        <li id="fo">
          <h1>FOLLOW US ON</h1>
        </li>
        <li id="co">
          <h5>connect and join our social media community</h5>
        </li>
      </ul>

      <ul id="fimg">
        <li id="fb">
          <a href="https://www.facebook.com/login">
            <img
              src="https://karnatakatourism.org/wp-content/uploads/2022/08/facebook.png"
              alt="facebook"
            />
          </a>
        </li>
        <li id="you">
          <a href="https://www.youtube.com/@karnatakatourism7698">
            <img
              src="https://karnatakatourism.org/wp-content/uploads/2022/08/Youtube.png"
              alt="youtube"
            />
          </a>
        </li>
        <li id="twi">
          <a href="https://x.com/">
            <img
              src="https://karnatakatourism.org/wp-content/uploads/2022/08/twitter.png"
              alt="twitter"
            />
          </a>
        </li>
        <li id="ins">
          <a href="https://www.instagram.com/karnatakaworld/">
            <img
              src="https://karnatakatourism.org/wp-content/uploads/2022/08/Instagram.png"
              alt="intsagram"
            />
          </a>
        </li>
      </ul>
      <br />
      <h2 style={{color:"blue"}}>Share Your Experiance On this Site: </h2>
    </div>
  );
}

export function Foot2() {
  return (
    <div id="foot2c">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <ul id="ful">
        <li id="ql">QUICK LINKS :</li>
        <li>
          <Link to="/Similar-page">Accommodation</Link>
        </li>
        <li><Link to="/Similar-page">Travel Tips</Link></li>
        <li>KSTDC</li>
        <li>Jungle Lodges & Resorts</li>
        <li>Karnataka Tourism Society</li>
        <li>Incredible India</li>
        <li>National Police Memorial</li>
      </ul>

      <ul id="sul">
        <li>National Police Memorial</li>
        <li>JLR Explore</li>
        <li>Karnataka Eco-Tourism</li>
        <li>Hotel Registration under Nidhi</li>
        <li>KTTF</li>
        <li>Karnataka Tourism Policy</li>
        <li>Adopt A Monument Scheme</li>
      </ul>

      <ul id="cont">
        <li id="coo">CONTACT US :</li>
        <li>Department of Tourism, 4th Floor/Level,</li>
        <li>No 3, Embassy Icon, Infantry Road,</li>
        <li>Bengaluru-560001</li>
        <li>Tel: +91-80-2235-2828</li>
        <li>Email: feedback@karnatakatourism.org</li>
      </ul>

      <div id="simg">
        <img
          src="https://karnatakatourism.org/wp-content/uploads/2020/05/KT-White-logo.png"
          alt=""
        />
        <ul>
          <li>Come and explore the hidden gems of Karnataka.</li>
          <li>The sixth largest state in India is famous for its</li>
          <li>wildlife, heritage, temples, monuments, beaches,</li>
          <li>adventure, food and much more.</li>
        </ul>
      </div>
    </div>
  );
}
