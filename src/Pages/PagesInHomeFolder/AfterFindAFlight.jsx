import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DigitalClock } from '@mui/x-date-pickers';
import { useNavigate } from "react-router-dom";


const Order_a_flight = ({ productName, productDetails }) => {
    const OrderButtonClick = () => {// פונקציה שמפעילה את הפעולה של שליחת הודעה בוואטסאפ
        const recipientPhoneNumber = '+972542200346';
        const message = `הי, אני מעוניין להזמין השכרת ${productName} עם הפרטים הבאים: ${productDetails}`;
        const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;
        //const whatsappLink = `https://wa.me/${recipientPhoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, "_blank");
    };

    return (
        <button className='order-this-product' onClick={OrderButtonClick}>הזן והמשך</button>
    );
};

const FindAFlight = () => {
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [startTime, setStartTime] = React.useState(null);
    const [endTime, setEndTime] = React.useState(null);

    // שעת התחלה שנבחרה
    const StartTimeChange = (time) => {
        setStartTime(time);
    };

    // שעת סיום שנבחרה
    const EndTimeChange = (time) => {
        setEndTime(time);
    };

    const productDetails = `תאריך: ${selectedDate}, שעת התחלה: ${startTime}, שעת סיום: ${endTime}, סוג המטוס: 4X-DBR Plane`;

    const navigate = useNavigate();


    return (
        <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', minHeight: '70vh', minWidth: '136%', backgroundSize: 'cover', backgroundImage: `url('src/Pages/imgs/homeimg.png')` }}>
            <div style={{ textAlign: 'center', width: '100%' }}>            <h2>בחר טיסה</h2>
                <button onClick={() => navigate('/HomePage')} style={{ marginRight: '5px' }}>חזור אל דף הבית</button>
                <div>
                    <h4>שעת התחלה</h4>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DigitalClock value={startTime} onChange={StartTimeChange} className='Select-a-start-time' />
                    </LocalizationProvider>
                </div>
                <div style={{ marginLeft: '10px' }}>
                    <h4 >שעת סיום</h4>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DigitalClock value={endTime} onChange={EndTimeChange} className='End-time-selection' />
                    </LocalizationProvider>
                </div>
                <Order_a_flight productName="טיסה" productDetails={productDetails} />
            </div>
        </div>
    );
};

export default FindAFlight;
