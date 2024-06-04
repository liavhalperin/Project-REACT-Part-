import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import FindAFlight from './Pages/FindAFlight';
import FlightConditions from './Pages/PagesInHomeFolder/FlightConditions';
import PersonalArea from './Pages/PagesInHomeFolder/PersonalArea';
import Contact from './Pages/PagesInHomeFolder/Contact';
import './App.css';
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';
import LoadingPage from './Pages/LoadingPage';
import Hamburger from './Pages/PagesInHomeFolder/Hamburger';
import FlightDocumentation from './Pages/PagesInHomeFolder/FlightDocumentation';
import CommunicationWithPilots from './Pages/PagesInHomeFolder/CommunicationWithPilots';
import ViewAndUpdateProfile from './Pages/PagesInHomeFolder/PilotProfile';
import EmplOrUser from './Pages/PagesInHomeFolder/EmplOrUser';
import LoginPageEm from './Pages/PagesInHomeFolder/LoginPageEm';
import HomePageEm from './Pages/PagesInHomeFolder/HomePageEm';
import PilotProfile from './Pages/PagesInHomeFolder/PilotProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< LoadingPage/>} />
        <Route path='EmplOrUser' element={<EmplOrUser />} />
        <Route path="HomePage" element={<HomePage />} />
        <Route path="FindAFlight" element={<FindAFlight />} />
        <Route path="FlightConditions" element={<FlightConditions />} />
        <Route path="PersonalArea" element={<PersonalArea />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="LoginPage" element={<LoginPage />} />
        <Route path="RegistrationPage" element={<RegistrationPage />} />
        <Route path="Hamburger" element={<Hamburger />} />
        <Route path="FlightDocumentation" element={<FlightDocumentation />} />
        <Route path="CommunicationWithPilots" element={<CommunicationWithPilots />} />
        <Route path="ViewAndUpdateProfile" element={<ViewAndUpdateProfile/>} />  
        <Route path="LoginPageEm" element={<LoginPageEm/>} />
        <Route path='HomePageEm' element={<HomePageEm />} />
        <Route path="PilotProfile" element={<PilotProfile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;