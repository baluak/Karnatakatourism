import React, { useState, useEffect, useCallback } from "react";
import Head from "../HeaderAndFoter/header";
import { Foot, Foot2 } from "../HeaderAndFoter/footer";
import "./Home.css";
import { Link } from "react-router-dom";

// home images
import home1 from "../Media/photos/img1.png";
import home2 from "../Media/photos/img2.png";
import home3 from "../Media/photos/img3.png";
import home4 from "../Media/photos/img4.png";
import home5 from "../Media/photos/img5.png";
import home6 from "../Media/photos/img6.png";
import home7 from "../Media/photos/img7.png";

// Experiance
import ex1 from "../Media/Experiance photos/Art_Forms_Yakshagana.jpg";
import ex2 from "../Media/Experiance photos/Cusini_Ragi_Mudde.jpg";
import ex3 from "../Media/Experiance photos/Festibval_kabala.jpg";
import ex4 from "../Media/Experiance photos/Grandeur_Mysore-Palace.jpg";
import ex5 from "../Media/Experiance photos/Heritage_Chitradurga_Fort.jpg";
import ex6 from "../Media/Experiance photos/Jog_Falls_Shimoga_Tranquality.jpg";
import ex7 from "../Media/Experiance photos/Spiritulity.jpg";
import ex8 from "../Media/Experiance photos/The_wild.jpg";

// destination images
import adventure from "../Media/Destinations photos/Adventure.jpg";
import Beaches from "../Media/Destinations photos/Beaches.jpg";
import Districts from "../Media/Destinations photos/Districts.jpg";
import Eco_Tourism from "../Media/Destinations photos/Eco_Tourism.jpg";
import Hill_Stations from "../Media/Destinations photos/Hill_Stations.jpg";
import Museums from "../Media/Destinations photos/Museums.jpg";
import Theme_Parks from "../Media/Destinations photos/Theme_Parks.jpg";
import Wellness from "../Media/Destinations photos/Wellness.jpg";

// photo gallery
import p1 from "../Media/Photo Gallery/Barachukki-Falls-at-Shivanasamudram.jpg";
import p2 from "../Media/Photo Gallery/Bhadra-Banner.jpg";
import p3 from "../Media/Photo Gallery/Bhootanatha-Badami.jpg";
import p4 from "../Media/Photo Gallery/Ibrahim-Roza.jpg";
import p5 from "../Media/Photo Gallery/Kannada-dance.jpg";
import p6 from "../Media/Photo Gallery/mangalore-beach.jpg";
import p7 from "../Media/Photo Gallery/Mysore-Dasara.jpg";
import p8 from "../Media/Photo Gallery/St-Philomenas-Cathedral.jpg";
import p9 from "../Media/Photo Gallery/Ulsoor-lake-3.jpg";

// karnataka map
import kar from "../Media/photos/karnataka map.png";

const imag = [
  { src: home1, id: "im" },
  { src: home2, id: "im" },
  { src: home3, id: "im" },
  { src: home4, id: "im" },
  { src: home5, id: "im" },
  { src: home6, id: "im" },
  { src: home7, id: "im" },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goToNext = useCallback(() => {
    if (!transitioning) {
      setTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imag.length);
      setTimeout(() => setTransitioning(false), 500); // Delay for smooth transition
    }
  }, [transitioning]);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [goToNext]);

  const goToPrevious = () => {
    if (!transitioning) {
      setTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? imag.length - 1 : prevIndex - 1
      );
      setTimeout(() => setTransitioning(false), 500); // Delay for smooth transition
    }
  };

  useEffect(() => {
    const imgElement = document.querySelector(".item img");
    if (imgElement) {
      imgElement.classList.remove("zoom-normal");
      setTimeout(() => {
        imgElement.classList.add("zoom-normal");
      }, 100); // Delay slightly to ensure the class is added after render
    }
  }, [currentIndex]);

  return (
    <div className="upper">
      <Head style={{ position: "sticky" }} />
      <div className="carousel">
        <button className="arrow left" onClick={goToPrevious}>
          &lt;
        </button>
        <div className="item">
          <img
            src={imag[currentIndex].src}
            alt={imag[currentIndex].alt || `Slide ${currentIndex + 1}`}
            className={transitioning ? "transitioning" : ""}
          />
          <div className="text-overlay">{imag[currentIndex].text}</div>
        </div>
        <button className="arrow right" onClick={goToNext}>
          &gt;
        </button>
      </div>

      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="10"
        className="mark"
      >
        Coastal Zone Management Plan of Karnataka as per CRZ Notification 2019
        is approved / CRZ ಅಧಿಸೂಚನೆ 2019 ರ ಪ್ರಕಾರ ಕರ್ನಾಟಕದ ಕರಾವಳಿ ವಲಯ ನಿರ್ವಹಣಾ
        ಯೋಜನೆಯನ್ನು ಅನುಮೋದಿಸಲಾಗಿದೆ{" "}
      </marquee>
      <div className="script">
        <h1 className="su">Script Your Adventure</h1>
        <h2 className="dt">
          Discover the world of a thousand hidden memories!
        </h2>
      </div>

      <div className="Ek">
        <h1 className="one">EXPERIENCE KARNATAKA</h1>
        <h3 className="two">One State. Many Worlds.</h3>
      </div>
      <br />
      <br />
      <br />

      <div className="grid">
        <div className="grid-item grid6">
          <Link to="/ITS TANQUILITY">
            <img src={ex6} alt="Tranquility" />
            <div className="text-overlay">Tranquility</div>
          </Link>
        </div>
        <div className="grid-item grid1">
          <Link to="/ITS ARTFORMS">
            <img src={ex1} alt="Art Forms" />
            <div className="text-overlay">Art Forms</div>
          </Link>
        </div>
        <div className="grid-item grid2">
          <Link to="/ITS CUISINE">
            <img src={ex2} alt="Heritage" />
            <div className="text-overlay">Cuisines</div>
          </Link>
        </div>
        <div className="grid-item grid7">
          <Link to="/ITS SPIRITUALITY">
            <img src={ex7} alt="Festivals" />
            <div className="text-overlay">Spirituality</div>
          </Link>
        </div>
        <div className="grid-item grid5">
          <Link to="/ITS HERITAGE">
            <img src={ex5} alt="Grandeur" />
            <div className="text-overlay">Heritage</div>
          </Link>
        </div>
        <div className="grid-item grid3">
          <Link to="/ITS FESTIVAL">
            <img src={ex3} alt="Cuisines" />
            <div className="text-overlay">Festival</div>
          </Link>
        </div>
        <div className="grid-item grid4">
          <Link to="/ITS GRANDEUR">
            <img src={ex4} alt="Spirituality" />
            <div className="text-overlay">Grandeur</div>
          </Link>
        </div>
        <div className="grid-item grid8">
          <Link to="/ITS WILD">
            <img src={ex8} alt="The Wild" />
            <div className="text-overlay">The Wild</div>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className="Ek">
        <h1 className="one">DESTINATIONS</h1>
        <h3 className="two">Land of Colours, Flavours & Timelessness</h3>
      </div>

      <div className="destination">
        <div className="g">
          <Link to="/Adventure">
            <img src={adventure} alt="adventure" />
            <div className="text1">adventure</div>
          </Link>
        </div>
        <div className="g">
          <Link to="/Beaches">
            <img src={Beaches} alt="Beaches" />
            <div className="text1">Beaches</div>
          </Link>
        </div>
        <div className="g">
          <Link to="/Districts">
            <img src={Districts} alt="Districts" />
            <div className="text1">Districts</div>
          </Link>
        </div>
        <div className="g">
          <Link to="/Eco-Tourism">
            <img src={Eco_Tourism} alt="Eco_Tourism" />
            <div className="text1">Eco_Tourism</div>
          </Link>
        </div>
        <div className="g">
          <Link to="/Hill_Stations">
            <img src={Hill_Stations} alt="Hill_Stations" />
            <div className="text1">Hill_Stations</div>
          </Link>
        </div>
        <div className="g">
          <Link to="/Museums">
            <img src={Museums} alt="Museums" />
            <div className="text1">Museums</div>
          </Link>
        </div>
        <div className="g">
          <Link to="/Theme-Parks">
            <img src={Theme_Parks} alt="Theme_Parks" />
            <div className="text1">Theme_Parks</div>
          </Link>
        </div>
        <div className="g">
          <Link to="/Wellness">
            <img src={Wellness} alt="Wellness" />
            <div className="text1">Wellness</div>
          </Link>
        </div>
      </div>

      <div className="pho">
        <h1>PHOTO GALLERY</h1>
        <h2>Till you travel</h2>
      </div>

      <div className="photogallery">
        <div className="ph1">
          <img src={p1} alt="" />
        </div>
        <div className="ph2">
          <img src={p2} alt="" />
        </div>
        <div className="ph4">
          <img src={p4} alt="" />
        </div>
        <div className="ph3">
          <img src={p3} alt="" />
        </div>
        <div className="ph7">
          <img src={p7} alt="" />
        </div>
        <div className="ph6">
          <img src={p6} alt="" />
        </div>
        <div className="ph5">
          <img src={p5} alt="" />
        </div>
        <div className="ph8">
          <img src={p8} alt="" />
        </div>
        <div className="ph9">
          <img src={p9} alt="" />
        </div>
      </div>

      <img className="kar" src={kar} alt="" />

      <br />
      <br />
      <Foot />

      <Foot2 />
    </div>
  );
};

export default Home;
