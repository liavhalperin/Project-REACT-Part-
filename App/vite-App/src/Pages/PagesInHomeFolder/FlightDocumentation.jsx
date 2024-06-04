import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const FlightDocumentation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const selectedPilot = location.state?.selectedPilot || { firstName: 'Unknown', lastName: 'Pilot' };
    const obj = location.state?.obj || '';
    const apiUrl = 'https://proj.ruppin.ac.il/bgroup35/test2/tar1/api/Slots/updateslot';

    const GotoHomePage = (obj) => {
        navigate('/HomePageEm', { state: { obj } });
    };

    const [flightData, sFlightData] = useState({
        FlightNumber: '',
        FlightDate: '',
        StartHobbs: '',
        EndHobbs: '',
        Tach: '',
        FuelAmount: '',
        NumOfPassengers: '',
        DepartTime: '',
        LandingTime: ''
    });

    // פונקציה שמקבלת את האינפוט שהשתנה ומעדכנת רק את המידע בפלייט_מידע בהתאם לערך שהשתנה
    const IfInputChange = (event) => {
        const { name, value } = event.target;
        sFlightData(prevState => ({ ...prevState, [name]: value, }));
    };

    // מקבל את המידע מהערכים שהוזנו ושולח אותם לשרת
    const IfFormSubmit = (event) => {
        event.preventDefault();
        const { FlightNumber, DepartTime, LandingTime, ...updatedSlot } = flightData;
        // מוודא שהשעות מומרות למספרים
        const [dHour, dMinute] = DepartTime ? DepartTime.split(':').map(Number) : [0, 0];
        const [lHour, lMinute] = LandingTime ? LandingTime.split(':').map(Number) : [0, 0];
        // מוודא שהמספרים מומרים למספרים  
        updatedSlot.FuelAmount = updatedSlot.FuelAmount ? parseInt(updatedSlot.FuelAmount, 10) : null;
        sendFlightDataToServer(parseInt(FlightNumber, 10), updatedSlot, dHour, dMinute, lHour, lMinute);
        GotoHomePage(obj);
    };

    const sendFlightDataToServer = async (flightNumber, updatedSlot, dHour, dMinute, lHour, lMinute) => {
        try {
            const response = await fetch(`${apiUrl}?FlightNumber=${flightNumber}&DHour=${dHour}&DMinute=${dMinute}&LHour=${lHour}&LMinute=${lMinute}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(updatedSlot),
            });

            const responseBody = await response.text();
            let result;

            // בודק אם יש תוכן בתשובה וממיר את התשובה לאובייקט ג'ייסון 
            if (responseBody) {
                try {
                    result = JSON.parse(responseBody);
                } catch (err) {
                    console.error('Response parsing error:', responseBody);
                    return;
                }
            }
            // בודק אם התשובה שהתקבלה מהשרת היא בסדר
            if (!response.ok) {
                console.error('Server responded with an error:', result);
                return;
            }
            // מדפיס הודעה בקונסול שהמידע נשלח בהצלחה
            console.log('Data sent successfully to server');
        } catch (error) {
            console.error('Error sending data to server:', error);
        }
    };

    return (
        <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', minHeight: '70vh', minWidth: '196%', backgroundSize: 'cover', backgroundImage: `url('src/Pages/imgs/homeimg.png')` }}>
            <div style={{ textAlign: 'center', width: '100%' }}>
                <h1>עדכון טיסות</h1>
                <form onSubmit={IfFormSubmit}>
                    <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
                        <p style={{ margin: 0, padding: 0, border: 0 }}>הכנס מספר טיסה</p>
                        <input type="text" dir="rtl" name="FlightNumber" value={flightData.FlightNumber} onChange={IfInputChange} style={{ margin: 0, padding: 0, border: 0, ...inputStyle }} />
                    </div>
                    <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
                        <p style={{ margin: 0, padding: 0, border: 0 }}>תאריך תחילת טיסה</p>
                        <input type="date" dir="rtl" name="FlightDate" value={flightData.FlightDate} onChange={IfInputChange} style={{ margin: 0, padding: 0, border: 0, ...inputStyle }} />
                    </div>
                    <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
                        <p style={{ margin: 0, padding: 0, border: 0 }}>תחילת Hobs</p>
                        <input type="text" dir="rtl" name="StartHobbs" value={flightData.StartHobbs} onChange={IfInputChange} style={{ margin: 0, padding: 0, border: 0, ...inputStyle }} />
                    </div>
                    <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
                        <p style={{ margin: 0, padding: 0, border: 0 }}>סיום Hobs</p>
                        <input type="text" dir="rtl" name="EndHobbs" value={flightData.EndHobbs} onChange={IfInputChange} style={{ margin: 0, padding: 0, border: 0, ...inputStyle }} />
                    </div>
                    <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
                        <p style={{ margin: 0, padding: 0, border: 0 }}>TACH</p>
                        <input type="text" dir="rtl" name="Tach" value={flightData.Tach} onChange={IfInputChange} style={{ margin: 0, padding: 0, border: 0, ...inputStyle }} />
                    </div>
                    <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
                        <p style={{ margin: 0, padding: 0, border: 0 }}>שעת המראה</p>
                        <input type="time" dir="rtl" name="DepartTime" value={flightData.DepartTime} onChange={IfInputChange} style={{ margin: 0, padding: 0, border: 0, ...inputStyle }} />
                    </div>
                    <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
                        <p style={{ margin: 0, padding: 0, border: 0 }}>שעת נחיתה</p>
                        <input type="time" dir="rtl" name="LandingTime" value={flightData.LandingTime} onChange={IfInputChange} style={{ margin: 0, padding: 0, border: 0, ...inputStyle }} />
                    </div>
                    <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
                        <p style={{ margin: 0, padding: 0, border: 0 }}>כמות דלק התחלתית</p>
                        <input type="text" dir="rtl" name="FuelAmount" value={flightData.FuelAmount} onChange={IfInputChange} style={{ margin: 0, padding: 0, border: 0, ...inputStyle }} />
                    </div>
                    <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
                        <p style={{ margin: 0, padding: 0, border: 0 }}>מספר הנוסעים</p>
                        <input type="number" dir="rtl" name="NumOfPassengers" value={flightData.NumOfPassengers} onChange={IfInputChange} style={{ margin: 0, padding: 0, border: 0, ...inputStyle }} />
                    </div>
                    <button type="submit"  style={buttonStyle}>עדכן</button>
                    <br />
                    <button type="button" onClick={() => GotoHomePage(obj)} style={buttonStyle}>חזור</button>
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
    color: 'green',
    padding: '10px 20px',
    margin: '10px',
};

export default FlightDocumentation;
