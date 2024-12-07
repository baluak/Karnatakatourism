import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./tour/HomePage/Home";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

// Experiance
import Artforms from "./tour/list/Experience/Art-Forms";
import Cuisine from "./tour/list/Experience/Cuisine";
import Festivals from "./tour/list/Experience/Festivals";
import { Grandeur } from "./tour/list/Experience/Grandeur";
import { Heritage } from "./tour/list/Experience/Heritage";
import { Spirituality } from "./tour/list/Experience/Spirituality";
import { Thewild } from "./tour/list/Experience/The-Wild";
import { Tranquility } from "./tour/list/Experience/Tranquility";

// Destinations
import { Adventure } from "./tour/list/Destinations/Adventure";
import { Beaches } from "./tour/list/Destinations/Beaches";
import { Districts } from "./tour/list/Destinations/Districts";
import { Ecotour } from "./tour/list/Destinations/Eco-Tourism";
import { Hillstations } from "./tour/list/Destinations/Hill_Stations";
import { Museums } from "./tour/list/Destinations/Museums";
import { Themepark } from "./tour/list/Destinations/Theme-Parks";
import { Wellness } from "./tour/list/Destinations/Wellness";

// Similar
import Similar from "./tour/list/Similar-page";

// What`s New
import { Compitition } from "./tour/list/Whats New/Competitions";

// Sub dropdowns
import { Photos } from "./tour/list/Whats New/Gallery/Photos";
import { Videos } from "./tour/list/Whats New/Gallery/Videos";
import { Ebrochures } from "./tour/list/Whats New/Gallery/E-Brouchures";
import { Virtualtour } from "./tour/list/Whats New/Gallery/Virtual-Tour";
import { Southernkarnataka } from "./tour/list/Whats New/Gallery/Southern-Karnataka-Circuit";

// Upcoming events and road shows
import { Domesticevents } from "./tour/list/Upcoming Events and Roadshows/Domestic-Events";
import { Domesticroadshows } from "./tour/list/Upcoming Events and Roadshows/Domestic-Roadshows";
import { Internationalevents } from "./tour/list/Upcoming Events and Roadshows/International-Events";
import { Internationalroadshows } from "./tour/list/Upcoming Events and Roadshows/International-Roadshows";

export function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

export function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/ITS ARTFORMS"
          element={
            <ProtectedRoute>
              <Artforms />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ITS CUISINE"
          element={
            <ProtectedRoute>
              <Cuisine />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ITS FESTIVAL"
          element={
            <ProtectedRoute>
              <Festivals />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ITS GRANDEUR"
          element={
            <ProtectedRoute>
              <Grandeur />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ITS HERITAGE"
          element={
            <ProtectedRoute>
              <Heritage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ITS SPIRITUALITY"
          element={
            <ProtectedRoute>
              <Spirituality />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ITS WILD"
          element={
            <ProtectedRoute>
              <Thewild />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ITS TANQUILITY"
          element={
            <ProtectedRoute>
              <Tranquility />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Adventure"
          element={
            <ProtectedRoute>
              <Adventure />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Beaches"
          element={
            <ProtectedRoute>
              <Beaches />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Districts"
          element={
            <ProtectedRoute>
              <Districts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Eco-Tourism"
          element={
            <ProtectedRoute>
              <Ecotour />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Hill_Stations"
          element={
            <ProtectedRoute>
              <Hillstations />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Museums"
          element={
            <ProtectedRoute>
              <Museums />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Theme-Parks"
          element={
            <ProtectedRoute>
              <Themepark />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Wellness"
          element={
            <ProtectedRoute>
              <Wellness />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Similar-page"
          element={
            <ProtectedRoute>
              <Similar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Competitions"
          element={
            <ProtectedRoute>
              <Compitition />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Plan-your_trip"
          element={
            <ProtectedRoute>
              <Similar />
            </ProtectedRoute>
          }
        />
        <Route
          path="Things To Do"
          element={
            <ProtectedRoute>
              <Similar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Latest Press Releases"
          element={
            <ProtectedRoute>
              <Similar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Tourism Promotions"
          element={
            <ProtectedRoute>
              <Similar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Trade Fairs / Roadshows"
          element={
            <ProtectedRoute>
              <Similar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Download English Brochures"
          element={
            <ProtectedRoute>
              <Similar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Download French Brochures"
          element={
            <ProtectedRoute>
              <Similar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Photos"
          element={
            <ProtectedRoute>
              <Similar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Videos"
          element={
            <ProtectedRoute>
              <Similar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/E-Brouchures"
          element={
            <ProtectedRoute>
              <Similar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Virtual Tour"
          element={
            <ProtectedRoute>
              <Similar />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Southern Karnataka Circuit"
          element={
            <ProtectedRoute>
              <Similar />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Blogs"
          element={
            <ProtectedRoute>
              <Similar />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Domestic-Events"
          element={
            <ProtectedRoute>
              <Domesticevents />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Domestic-Roadshows"
          element={
            <ProtectedRoute>
              <Domesticroadshows />
            </ProtectedRoute>
          }
        />

        <Route
          path="/International-Events"
          element={
            <ProtectedRoute>
              <Internationalevents />
            </ProtectedRoute>
          }
        />

        <Route
          path="/International-Roadshows"
          element={
            <ProtectedRoute>
              <Internationalroadshows />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
