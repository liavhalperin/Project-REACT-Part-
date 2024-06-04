import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

const CommunicationWithPilots = () => {
    const navigate = useNavigate();
    const [ageRange, sAgeRange] = useState(0);
    const [purposeFilter, setPurposeFilter] = useState('');
    const [pilotsList, setPilotsList] = useState([]);
    const location = useLocation();
    const obj = location.state?.obj || '';

    const apiUrl = 'https://proj.ruppin.ac.il/bgroup35/test2/tar1/api/pilots/viewallpilots';

    const goback = (obj) => {
        navigate('/HomePage', { state: { obj } });
    };

    // פונקציה שמביאה את רשימת הטייסים מהשרת
    const fetchData = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setPilotsList(data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // סינון רשימת הטייסים לפי גיל ומטרת טיסה
    const filteredList = pilotsList.filter((pilot) => {
        const ageFilter = ageRange === 0 || pilot.age1 >= ageRange;
        // const purposeFilterMatch = purposeFilter === '' || pilot.interestedInFlightTypes.some((flightType) => flightType.flightTypeNavigation.type === purposeFilter);
        return ageFilter;
        //  && purposeFilterMatch;
    });

    const AgeRange = (event) => {
        sAgeRange(parseInt(event.target.value, 10));
    };

    return (
        <div dir="rtl" style={{ textAlign: 'center', backgroundImage: 'url("src/Pages/imgs/homeimg.png")', padding: '50px' }}>
            <h1> <b>תקשורת עם טייסים</b></h1>
            <label style={{ textAlign: 'right', color: 'white', fontFamily: 'Arial, sans-serif', fontSize: '18px', marginRight: '10px' }} htmlFor="vol"> הצג טייסים מגיל: <span style={{ color: 'white', fontSize: '18px' }}> {ageRange} </span></label>
            <input type="range" id="vol" min="0" max="50" value={ageRange} onChange={AgeRange} />
            {/* <select style={{ margin: '10px', padding: '5px 10px', borderRadius: '20px', backgroundColor: 'white', color: 'green', fontFamily: 'Arial, sans-serif', fontSize: '16px' }} onChange={(e) => setPurposeFilter(e.target.value)}>
                <option value="">סינון על פי מטרת טיסה</option>
                <option value="training">אימונים</option>
                <option value="experience">חוויה</option>
                <option value="accumulatedHours">צבירת שעות</option>s
            </select> */}
            <table style={{ margin: '0 auto', borderCollapse: 'collapse', color: 'white' }}>
                <thead>
                    <tr>
                        <th style={{ padding: '10px', backgroundColor: 'green', color: 'white', border: '1px solid black' }}>שם פרטי</th>
                        <th style={{ padding: '10px', backgroundColor: 'green', color: 'white', border: '1px solid black' }}>שם משפחה</th>
                        <th style={{ padding: '10px', backgroundColor: 'green', color: 'white', border: '1px solid black' }}>מספר טלפון</th>
                        <th style={{ padding: '10px', backgroundColor: 'green', color: 'white', border: '1px solid black' }}> גיל</th>
                        <th style={{ padding: '10px', backgroundColor: 'green', color: 'white', border: '1px solid black' }}>מטרת טיסה</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredList.map((pilot, index) => (
                        <tr key={index}>
                            <td style={{ padding: '10px', border: '1px solid black' }}>{pilot.firstName}</td>
                            <td style={{ padding: '10px', border: '1px solid black' }}>{pilot.lastName}</td>
                            <td style={{ padding: '10px', border: '1px solid black' }}>{pilot.phoneNumber}</td>
                            <td style={{ padding: '10px', border: '1px solid black' }}>{pilot.age1}</td>
                            <td style={{ padding: '10px', border: '1px solid black' }}>
                                {pilot.interestedInFlightTypes.map((flightType, idx) => (
                                    <div key={idx}>{flightType.flightTypeNavigation.type}</div>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <button
                onClick={() => goback(obj)}
                style={{
                    borderRadius: '20px',
                    backgroundColor: 'white',
                    color: 'green',
                    padding: '10px 20px',
                    margin: '10px',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    border: '2px solid green',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s, color 0.3s',
                    outline: 'none',
                }}
                onMouseOver={(e) => { e.target.style.backgroundColor = 'green'; e.target.style.color = 'black' }}
                onMouseOut={(e) => { e.target.style.backgroundColor = 'white'; e.target.style.color = 'green' }}
            >
                חזור
            </button>
        </div>
    );
};

export default CommunicationWithPilots;
