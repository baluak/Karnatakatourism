import React, { useState } from "react";
import "./headfoot.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Link } from "react-router-dom";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import logoutimage from "../../pages/logout-button.jpg";

export default function Head() {
  const [language, setLanguage] = useState("English");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div id="outer_container">
      <div id="karnataka_symbol">
        <img
          src="https://karnatakatourism.org/wp-content/uploads/2020/05/mob-logo.svg"
          alt="Karnataka Logo"
        />
      </div>

      <div id="earth">
        <img
          style={{ height: "116px", marginLeft: "0px" }}
          src="https://karnatakatourism.org/wp-content/uploads/2020/05/G20img.jpg"
          alt="G20"
        />
      </div>

      <div id="feedback_and_logos">
        <ul id="leftside" style={{ listStyle: "none" }}>
          <li id="phone">
            <a href="tel:+917353091325" style={{ color: "red" }}>
              <LocalPhoneIcon />
            </a>
          </li>
          <li id="at">
            <a href="mailto:bravolyf@gmail.com" style={{ color: "red" }}>
              <AlternateEmailIcon />
            </a>
          </li>
          <li id="mail_sym">
            <a href="mailto:bravolyf@gmail.com" style={{ color: "red" }}>
              <EmailIcon />
            </a>
          </li>
          <li id="email" style={{ color: "white", marginTop: "0px" }}>
            <a href="mailto:bravolyf@gmail.com">
              <p>
                {language === "Kannada" ? (
                  <span className="toplabel">ಪ್ರತಿಕ್ರಿಯೆ@ಕರ್ನಾಟಕಟೂರ್.ಕಾಮ್</span>
                ) : (
                  "feedback@karnatakatour.com"
                )}
              </p>
            </a>
          </li>
          <li id="letter" style={{ color: "white", marginTop: "0px" }}>
            <a href="https://karnatakatourism.org/newsletters/">
              <p>
                {language === "Kannada" ? (
                  <span className="toplabel">ವಾರ್ತಾಪತ್ರಕ್ಕೆ ಸೈನ್ ಅಪ್ ಮಾಡಿ</span>
                ) : (
                  "Sign up to newsletter"
                )}
              </p>
            </a>
          </li>
        </ul>

        <ul id="rightside" style={{ listStyle: "none" }}>
          <li id="twitter" style={{ marginTop: "6px" }}>
            <a href="https://x.com/i/flow/login">
              <TwitterIcon
                style={{ color: "white", width: "30px", height: "28px" }}
              />
            </a>
          </li>
          <li id="facebook" style={{ marginTop: "5px" }}>
            <a href="https://www.facebook.com/login">
              <FacebookOutlinedIcon
                style={{ color: "white", width: "35px", height: "30px" }}
              />
            </a>
          </li>
          <li id="insta" style={{ marginTop: "9px" }}>
            <a href="https://www.instagram.com/karnatakaworld/">
              <img
                style={{ width: "21px" }}
                src="https://t3.ftcdn.net/jpg/03/00/02/08/240_F_300020899_N275TqND1g3LDqinhrvLhDpCy4RjYG8m.jpg"
                alt="Instagram"
              />
            </a>
          </li>

          <li id="youtube">
            <a href="https://www.youtube.com/@karnatakatourism7698">
              <img
                style={{ width: "30px", height: "20px", paddingTop: "8px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdMHos5dckpdLmWsJwUfpk4CDpu6hzVe9aBA&s"
                alt="YouTube"
              />
            </a>
          </li>

          <li id="linkdin" style={{ marginTop: "6px" }}>
            <a href="https://in.linkedin.com/">
              <img
                style={{ width: "22px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDTxvS_ph9yYIgaGRG777WCRpjsTyFLxxnWA&s"
                alt="LinkedIn"
              />
            </a>
          </li>

          <li id="language">
            <select
              name="language"
              onChange={handleLanguageChange}
              style={{
                marginTop: "5px",
                height: "30px",
                borderRadius: "20px",
                fontWeight: "bold",
              }}
            >
              <option value="English">English</option>
              <option value="Kannada">ಕನ್ನಡ</option>
            </select>
          </li>

          <li>
            <Link to="/logout">
              <img
                style={{
                  margin: ".3em -1em 0 0", // Correct CSS shorthand for margin
                  padding: 0,
                  width: "2.5em",
                  borderRadius: "5em",
                }}
                src={logoutimage}
                alt="logoutimg"
              />
            </Link>
          </li>

          {/*  */}
        </ul>
      </div>

      <ul id="list">
        <li id="one">
          <Link to="/" id="home">
            {language === "Kannada" ? (
              <span className="klag">ಮುಖಪುಟ</span>
            ) : (
              <span className="enm">Home</span>
            )}
          </Link>
        </li>

        <li id="two" style={{ cursor: "pointer" }}>
          {language === "Kannada" ? (
            <span className="klag">ಅನುಭವ</span>
          ) : (
            <span className="enm">Experience</span>
          )}
          <ul id="dropdown_two">
            <li>
              <Link to="/ITS ARTFORMS" id="first_drop_down">
                {" "}
                Art Forms{" "}
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/ITS CUISINE" id="first_drop_down">
                {" "}
                Cuisine{" "}
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/ITS FESTIVAL" id="first_drop_down">
                {" "}
                Festivals{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/ITS GRANDEUR" id="first_drop_down">
                {" "}
                Grandeur{" "}
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/ITS HERITAGE" id="first_drop_down">
                {" "}
                Heritage{" "}
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/ITS SPIRITUALITY" id="first_drop_down">
                {" "}
                Spirituality{" "}
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/ITS WILD" id="first_drop_down">
                The Wild{" "}
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/ITS TANQUILITY" id="first_drop_down">
                {" "}
                Tranquility{" "}
              </Link>
            </li>
          </ul>
        </li>

        <li id="three" style={{ cursor: "pointer" }}>
          {language === "Kannada" ? (
            <span className="klag">ಗಮ್ಯಸ್ಥಾನಗಳು</span>
          ) : (
            <span className="enm">Destinations</span>
          )}
          <ul id="dropdown_three">
            <li>
              {" "}
              <Link to="/Adventure" id="two_drop_down">
                Adventure
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/Beaches" id="two_drop_down">
                Beaches
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/Districts" id="two_drop_down">
                Districts
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/Eco-Tourism" id="two_drop_down">
                Eco Tourism
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/Hill_Stations" id="two_drop_down">
                Hill_Stations
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/Museums" id="two_drop_down">
                Museums
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/Theme-Parks" id="two_drop_down">
                Theme Parks
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/Wellness" id="two_drop_down">
                Wellness
              </Link>
            </li>
          </ul>
        </li>

        <Link to="/Similar-page">
          <li id="four" style={{ cursor: "pointer" }}>
            {language === "Kannada" ? (
              <span className="klag" id="klag2">
                ಪರ್ಯಟನದಲ್ಲಿ ಹೂಡಿಕೆ ಅವಕಾಶಗಳು
              </span>
            ) : (
              <span className="enm">Investment Opportunities in Tourism</span>
            )}
          </li>
        </Link>

        <li id="five" style={{ margin: "0px", cursor: "pointer" }}>
          {language === "Kannada" ? (
            <span className="klag">ಹೊಸದು ಏನು</span>
          ) : (
            <span className="enm">What’s New</span>
          )}

          <ul id="dropdown_five">
            <li>
              <Link to="/Competitions" className="dropdown-link">
                Competition
              </Link>
            </li>
            <li>
              <Link to="/Plan-your_trip" className="dropdown-link">
                Plan Your Trip
              </Link>
            </li>
            <li>
              <Link to="/Things To Do" className="dropdown-link">
                Things To Do
              </Link>
            </li>
            <li>
              <Link to="/Latest Press Releases" className="dropdown-link">
                Latest Press Releases
              </Link>
            </li>
            <li>
              <Link to="/Tourism Promotions" className="dropdown-link">
                Tourism Promotions
              </Link>
            </li>
            <li>
              <Link to="/Trade Fairs / Roadshows" className="dropdown-link">
                Trade Fairs / Roadshows
              </Link>
            </li>

            <li id="dropdown_brochure">
              Download Brochures
              <span id="arrow">
                <ArrowForwardIosOutlinedIcon />
              </span>
              <ul id="submenu">
                <li>
                  <Link
                    to="/Download English Brochures"
                    className="submenu-link"
                  >
                    <span className="edo">Download English Brochures</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Download French Brochures"
                    className="submenu-link"
                  >
                    <span className="edo">Download French Brochure</span>
                  </Link>
                </li>
                <li id="dropdown_gallary">
                  <span className="galleryname">Gallery</span>
                  <span id="garrow">
                    <ArrowForwardIosOutlinedIcon />
                  </span>
                  <ul id="ssubmenu">
                    <li>
                      <Link to="/Photos" className="submenu-link">
                        Photos
                      </Link>
                    </li>
                    <li>
                      <Link to="/Videos" className="submenu-link">
                        Videos
                      </Link>
                    </li>
                    <li>
                      <Link to="/E-Brouchures" className="submenu-link">
                        E-Brochures
                      </Link>
                    </li>
                    <li>
                      <Link to="/Virtual Tour" className="submenu-link">
                        Virtual Tour
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Southern Karnataka Circuit"
                        className="submenu-link"
                      >
                        <span className="southname">
                          Southern Karnataka Circuit
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <Link to="/Blogs">
          <li id="six" style={{ cursor: "pointer" }}>
            {language === "Kannada" ? (
              <span className="klag">ಬ್ಲಾಗ್‌ಗಳು</span>
            ) : (
              <span className="enm">Blogs</span>
            )}
          </li>
        </Link>

        <li id="seven" style={{ cursor: "pointer" }}>
          {language === "Kannada" ? (
            <span className="klag">ಮುಂದಿನ ಈವೆಂಟ್‌ & ರಸ್ತೆ ಪ್ರದರ್ಶನಗಳು</span>
          ) : (
            <span className="enm">Upcoming Events and Roadshows</span>
          )}
          <ul id="dropdown_seven">
            <li>
              {" "}
              <Link to="/Domestic-Events" id="d_seven">
                Domestic Events
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/Domestic-Roadshows" id="d_seven">
                Domestic Roadshows
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/International-Events" id="d_seven">
                Inatenational Events
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/International-Roadshows" id="d_seven">
                International Roadshows
              </Link>
            </li>
          </ul>
        </li>

        <li id="eight" style={{ cursor: "pointer" }}>
          <span className="dots">
            <DehazeIcon />
          </span>
        </li>
      </ul>

      <div id="mobhead">
        <span id="MOBE">
          <button>
            <div style={{ cursor: "pointer" }}>
              <span className="dots2">
                <DehazeIcon style={{ fontSize: "25px" }} />
              </span>
            </div>
          </button>
        </span>

        <img
          style={{ fontSize: "7px", backgroundColor: "none" }}
          className="mkar"
          src="https://karnatakatourism.org/wp-content/uploads/2020/05/mob-logo.svg"
          alt="Karnataka Logo"
        />

        <li id="language">
          <select
            name="language"
            onChange={handleLanguageChange}
            style={{
              marginTop: "5px",
              height: "30px",
              borderRadius: "20px",
              fontWeight: "bold",
            }}
          >
            <option value="English">English</option>
            <option value="Kannada">ಕನ್ನಡ</option>
          </select>
        </li>
      </div>
    </div>
  );
}
