import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
//import { DigitalClock } from '@mui/x-date-pickers';
import { useNavigate,useLocation } from "react-router-dom";
import { Button } from '@mui/material';

const Order_a_flight = ({ productName, productDetails }) => {
  const OrderButtonClick = () => {// פונקציה שמפעילה את הפעולה של שליחת הודעה בוואטסאפ
    const recipientPhoneNumber = '+972542200346';
    const message = `שלום רב,\nאני מעוניין להזמין השכרת טיסה:\n${productDetails}`;
    //const message = `שלום רב, אני מעוניין להזמין השכרת ${productName} עם הפרטים הבאים: \n${productDetails}`;
    // const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;
    const whatsappLink = `https://wa.me/${recipientPhoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <Button className='order-this-product' onClick={OrderButtonClick} style={{ borderRadius: '20px', backgroundColor: 'white', color: 'green' }}>הזן והמשך</Button>
  );
};

const FindAFlight = () => {//נשאר אחרי שלוקחים את הנתונים לשתמש בהם בהודעה כראוי ומושלם
  const [selectedDate, SelectedDate] = useState("");
  const [startTime, StartTime] = useState("");
  const [endTime, EndTime] = useState("");
  const [starttoendTime, StarttoendTim] = useState("");
  const navigate = useNavigate();


  const location = useLocation();
  const obj = location.state?.obj || '';

  // תאריך שנבחר
  const DateChange = (date) => { SelectedDate(date); };
  // שעת התחלה שנבחרה
  const StartTimeChange = (time) => { StartTime(time); };
  // שעת סיום שנבחרה
  const EndTimeChange = (time) => { EndTime(time); };

  const productDetails = `לתאריך: ${selectedDate}\nבין השעות: ${starttoendTime}\nשמי ${obj.firstName} ${obj.lastName}\n מספר הרישיון שלי: ${obj.licenseNumber} \nוהמספר שלי לטלפון: ${obj.phoneNumber}`;
  //const productDetails = `${starttoendTime}תאריך: ${selectedDate}\nשעת התחלה: ${startTime} \nשעת סיום: ${endTime}`;

  return (
    <div style={{ textAlign: 'center', backgroundImage: 'url("src/Pages/imgs/homeimg.png")' }}>
      <h1>בחר טיסה</h1>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '10px', margin: '18px', padding: '20px' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar onChange={
            (e) => {
              const date = e.$D + "." + (e.$M + 1) + "." + e.$y;
              DateChange(date);
            }
          } className='Date-selection' type="date" placeholder="dd-mm-yyyy" min="1997-01-01" max="2030-12-31" />
        </LocalizationProvider>
      </div>
      <div>
        <select
          onChange={(e) => StarttoendTim(e.target.value)}
          name="fromtimretotime" id="fromtimretotime" style={{
            backgroundColor: 'rgba(0, 51, 102, 0.2)', '&:hover': {
              backgroundColor: '#ccc',
            }, borderRadius: '10px', margin: '23px', padding: '20px', fontSize: '15px' ,color: 'rgba(0, 0, 0, 0.6)'
          }} >
          <option value="בחר שעה"> בחר שעה</option>
          <option value="06:00-06:30">06:00-06:30</option>
          <option value="06:30-07:00">06:30-07:00</option>
          <option value="07:00-07:30">07:00-08:00</option>
          <option value="07:30-08:00">07:30-08:00</option>
          <option value="08:00-08:30">08:00-08:30</option>
          <option value="08:30-09:00">08:30-09:00</option>
          <option value="09:00-09:30">09:00-09:30</option>
          <option value="09:30-10:00">09:30-10:00</option>
          <option value="10:00-10:30">10:00-10:30</option>
          <option value="10:30-11:00">10:30-11:00</option>
          <option value="11:00-11:30">11:00-11:30</option>
          <option value="11:30-12:00">11:30-12:00</option>
          <option value="12:00-12:30">12:00-12:30</option>
          <option value="12:30-13:00">12:30-13:00</option>  
          <option value="13:00-13:30">13:00-13:30</option>
          <option value="13:30-14:00">13:30-14:00</option>
          <option value="14:00-14:30">14:00-14:30</option>
          <option value="14:30-15:00">14:30-15:00</option>
          <option value="15:00-15:30">15:00-15:30</option>
          <option value="15:30-16:00">15:30-16:00</option>
          <option value="16:00-16:30">16:00-16:30</option>
          <option value="16:30-17:00">16:30-17:00</option>
          <option value="17:00-17:30">17:00-17:30</option>
          <option value="17:30-18:00">17:30-18:00</option>
          <option value="18:00-18:30">18:00-18:30</option>
          <option value="18:30-19:00">18:30-19:00</option>
          <option value="19:00-19:30">19:00-19:30</option>
          <option value="19:30-20:00">19:30-20:00</option>
          <option value="20:00-20:30">20:00-20:30</option>
          <option value="20:30-21:00">20:30-21:00</option>
          <option value="21:00-21:30">21:00-21:30</option>
          <option value="21:30-22:00">21:30-22:00</option>
          <option value="22:00-22:30">22:00-22:30</option>
          <option value="22:30-23:00">22:30-23:00</option>
          <option value="23:00-23:30">23:00-23:30</option>
          <option value="23:30-00:00">23:30-00:00</option>
          <option value="00:00-00:30">00:00-00:30</option>
          <option value="00:30-01:00">00:30-01:00</option>
          <option value="01:00-01:30">01:00-01:30</option>
          <option value="01:30-02:00">01:30-02:00</option>
          <option value="02:00-02:30">02:00-02:30</option>
          <option value="02:30-03:00">02:30-03:00</option>
          <option value="03:00-03:30">03:00-03:30</option>
          <option value="03:30-04:00">03:30-04:00</option>
          <option value="04:00-04:30">04:00-04:30</option>
          <option value="04:30-05:00">04:30-05:00</option>
          <option value="05:00-05:30">05:00-05:30</option>
          <option value="05:30-06:00">05:30-06:00</option>
        </select>
      </div>
      <div style={{ alignItems: 'center' }}>
        <br />
        <button variant="contained" color="primary" onClick={() => navigate('/HomePage', { state: { obj } })} style={{ marginRight: '5px', borderRadius: '20px', backgroundColor: 'white', color: 'purple' }}>חזור אל דף הבית</button>
      </div>
      <br />
      <Order_a_flight /*   הפונקציה העליונה  */ productName="טיסה" productDetails={productDetails} />
    </div>
  );
};

export default FindAFlight;

//בחירת שעה שישאר להמשך
//       <div>
//<h4>שעת התחלה</h4>
//<LocalizationProvider dateAdapter={AdapterDayjs}>
// <DigitalClock value={startTime} onChange={StartTimeChange} className='Select-a-start-time' />
//</LocalizationProvider>
//</div>
//<div style={{ marginLeft: '10px' }}>
//<h4 >שעת סיום</h4>
//<LocalizationProvider dateAdapter={AdapterDayjs}>
//<DigitalClock value={endTime} onChange={EndTimeChange} className='End-time-selection' />
//</LocalizationProvider>
//</div>

//<div style={{ display: 'flex', justifyContent: 'center' }}> {/* Adjusted container */}
//      <div style={{ marginRight: '10px' }}> {/* Start time container */}
//      <h4>שעת התחלה</h4>
//    <LocalizationProvider dateAdapter={AdapterDayjs}>
//    <DigitalClock onChange={(e) => {
//    let minutes = "";
//  (e.$m == 0) ? minutes = "00" : minutes = e.$m;
//let hours = "";
// (e.$H < 10) ? hours = "0" + e.$H : hours = e.$H;
//const time = hours + ":" + minutes;
//StartTime(time);
// }} className='Select-a-start-time' />
// </LocalizationProvider>
//</div>
/// <div>
// <h4 >שעת סיום</h4>
// <LocalizationProvider dateAdapter={AdapterDayjs}>
// <DigitalClock onChange={(e) => {
// let minutes = "";
// (e.$m == 0) ? minutes = "00" : minutes = e.$m;
// let hours = "";
// (e.$H < 10) ? hours = "0" + e.$H : hours = e.$H;
// const time = hours + ":" + minutes;
//  EndTime(time);
// }} className='End-time-selection' />
// </LocalizationProvider>
// </div>
// </div>