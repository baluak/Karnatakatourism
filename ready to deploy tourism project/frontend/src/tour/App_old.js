import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from "./HomePage/Home";
import { Artforms } from './list/Experience/Art-Forms';
import { Cuisine } from './list/Experience/Cuisine';
import { Festivals } from './list/Experience/Festivals';
import { Grandeur } from './list/Experience/Grandeur';
import { Heritage } from './list/Experience/Heritage';
import { Spirituality } from './list/Experience/Spirituality';
import { Thewild } from './list/Experience/The-Wild';
import { Tranquility } from './list/Experience/Tranquility';


import { Adventure } from './list/Destinations/Adventure';
import { Beaches } from './list/Destinations/Beaches';
import { Districts } from './list/Destinations/Districts';
import { Ecotour } from './list/Destinations/Eco-Tourism';
import { Hillstations } from './list/Destinations/Hill_Stations';
import { Museums } from './list/Destinations/Museums';
import { Themepark } from './list/Destinations/Theme-Parks';
import { Wellness } from './list/Destinations/Wellness';


import { Compitition } from './list/Whats New/Competitions';


import { Englishbrochures } from './list/Whats New/Download-Brochures/Download-English-Brochures';
import { Frenchbrochures } from './list/Whats New/Download-Brochures/Download-French-Brochures';

import { Photos } from './list/Whats New/Gallery/Photos';
import { Videos } from './list/Whats New/Gallery/Videos';

import { Ebrochures } from './list/Whats New/Gallery/E-Brouchures';
import { Virtualtour } from './list/Whats New/Gallery/Virtual-Tour';
import { Southernkarnataka } from './list/Whats New/Gallery/Southern-Karnataka-Circuit';

import { Domesticevents } from './list/Upcoming Events and Roadshows/Domestic-Events';
import { Domesticroadshows } from './list/Upcoming Events and Roadshows/Domestic-Roadshows';
import { Internationalevents } from './list/Upcoming Events and Roadshows/International-Events';
import { Internationalroadshows } from './list/Upcoming Events and Roadshows/International-Roadshows';
import { Similar } from './list/Similar-page';




function App() {
  return (
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='/HomePage/Home' element={<Home />} />



      <Route path='/list/Experience/Art-Forms' element={<Artforms />} />

      <Route path='/Artforms' element={<Artforms />} />       
       {/*above line is for duplicate route for serve as server endpoint   */}


      <Route path='/list/Experience/Cuisine' element = {<Cuisine/>}/>

      <Route path='/Cuisine' element = {<Cuisine/>}/>     
        {/*above line is for duplicate route for serve as server endpoint  */}


      <Route path='/list/Experience/Festivals' element={<Festivals />} />
      <Route path='/list/Experience/Grandeur' element={<Grandeur />} />
      <Route path='/list/Experience/Heritage' element={<Heritage />} />
      <Route path='/list/Experience/Spirituality' element={<Spirituality />} />
      <Route path='/list/Experience/The-Wild' element={<Thewild />} />
      <Route path='/list/Experience/Tranquility' element={<Tranquility />} />


      <Route path='/list/Destinations/Adventure' element={<Adventure />} />
      <Route path='/list/Destinations/Beaches' element={<Beaches />} />
      <Route path='/list/Destinations/Districts' element={<Districts />} />
      <Route path='/list/Destinations/Eco-Tourism' element={<Ecotour />} />
      <Route path='/list/Destinations/Hill_Stations' element={<Hillstations />} />
      <Route path='/list/Destinations/Museums' element={<Museums />} />
      <Route path='/list/Destinations/Theme-Parks' element={<Themepark />} />
      <Route path='/list/Destinations/Wellness' element={<Wellness />} />

      <Route path='/list/Whats New/Competitions' element={<Compitition />} />

      <Route path='/list/Whats New/Download-Brochures/Download-English-Brochures' element={<Englishbrochures />} />
      <Route path='list/Whats New/Download-Brochures/Download-French-Brochures' element={<Frenchbrochures />} />

      <Route path='/list/Whats New/Gallery/Photos' element={<Photos />} />
      <Route path='/list/Whats New/Gallery/Videos' element={<Videos />} />
      <Route path='/list/Whats New/Gallery/E-Brouchures' element={<Ebrochures />} />
      <Route path='/list/Whats New/Gallery/Virtual-Tour' element={<Virtualtour />} />
      <Route path='/list/Whats New/Gallery/Southern-Karnataka-Circuit' element={<Southernkarnataka />} />

      <Route path='/list/Upcoming Events and Roadshows/Domestic-Events' element={<Domesticevents />} />
      <Route path='/list/Upcoming Events and Roadshows/Domestic-Roadshows' element={<Domesticroadshows />} />
      <Route path='/list/Upcoming Events and Roadshows/International-Events' element={<Internationalevents />} />
      <Route path='/list/Upcoming Events and Roadshows/International-Roadshows' element={<Internationalroadshows />} />

      <Route path='/list/Similar-page' element={<Similar/>}/>



    </Routes>
  );
}

export default App;
