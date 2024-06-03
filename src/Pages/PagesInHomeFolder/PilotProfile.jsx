import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

const PilotProfile = () => {
    const navigate = useNavigate();
    const [searchName, sSearchName] = useState('');
    const [selectedPilot, sSelectedPilot] = useState(null);

    const location = useLocation();
    const obj = location.state?.obj || '';

    const GotoHomePage = (obj) => {
        navigate('/HomePageEm', { state: { obj } });
    };

    const apiUrl = 'https://proj.ruppin.ac.il/bgroup35/test2/tar1/API/Pilots/viewallpilots';

    const BySearch = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            const foundPilot = data.find(pilot => pilot.firstName === searchName);
            sSelectedPilot(foundPilot);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    return (
        <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', minHeight: '70vh', minWidth: '196%', backgroundSize: 'cover', backgroundImage: `url('src/Pages/imgs/homeimg.png')` }}>
            <div style={{ textAlign: 'center', width: '100%' }}>
                <h1>פרופיל הטייס</h1>
                <form>
                    <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
                        <input
                            type="text"
                            dir="rtl"
                            placeholder="חיפוש על פי שם"
                            style={{ direction: 'rtl', ...inputStyle }}
                            value={searchName}
                            onChange={(e) => sSearchName(e.target.value)}
                        />
                    </div>
                    <button style={buttonStyle} onClick={BySearch}>חפש</button>
                    <br />
                    <br />
                    {selectedPilot && (
                            <div style={{width: 'fit-content', margin: '0 auto'}}>
                                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                                    <p type="text" dir="rtl" style={inputStyle}>
                                        <span><b>מספר רישיון: </b></span>{selectedPilot.licenseNumber}
                                    </p>
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    <p type="text" dir="rtl" style={inputStyle}>
                                        <span><b>שם מלא: </b></span>{`${selectedPilot.firstName} ${selectedPilot.lastName}`}
                                    </p>
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    <p type="text" dir="rtl" style={inputStyle}>
                                        <span><b>תאריך לידה: </b></span>{selectedPilot.dateOfBirth}
                                    </p>
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    <p type="text" dir="rtl" style={inputStyle}>
                                        <span><b>מספר טלפון: </b></span>{selectedPilot.phoneNumber}
                                    </p>
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    <p type="text" dir="rtl" style={inputStyle}>
                                        <span><b>כתובת אימייל: </b></span>{selectedPilot.email}
                                    </p>
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    <p type="text" dir="rtl" style={inputStyle}>
                                        <span><b>תוקף מבחן רמה: </b></span>{selectedPilot.validityDateOfLevelTest}
                                    </p>
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    <p type="text" dir="rtl" style={inputStyle}>
                                        <span><b>תוקף תעודה רפואית: </b></span>{selectedPilot.validityDateOfMedicalCertificate}
                                    </p>
                                </div>
                                {/* <button onClick={() => navigate('/FlightDocumentation', { state: { selectedPilot } })} style={buttonStyle}> {selectedPilot.firstName} עדכון טיסה </button> */}
                            </div>
                    )}
                    <br />
                    <button onClick={() => GotoHomePage(obj)} style={buttonStyle}>חזור</button>
                </form>
            </div>
        </div>
    );
};

const inputStyle = {
    borderRadius: '20px',
    fontFamily: 'Arial, sans-serif',
    color: 'black',
    backgroundColor: 'white',
    padding: '10px',
    width: '300px',
};

const buttonStyle = {
    borderRadius: '20px',
    backgroundColor: 'white',
    color: 'blue',
    padding: '10px 20px',
    margin: '10px',
};

export default PilotProfile;
