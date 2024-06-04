import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from '@mui/material';

const HomePage = () => {
  const navigate = useNavigate();
  
  const location = useLocation();
  const obj = location.state?.obj || '';

  const MoveToFlightSearch = () => {
    navigate('/FindAFlight', { state: { obj } });
  };
  const MoveToFlightConditions = () => {
    navigate('/FlightConditions');
  };
  const movetoCommunicationWithPilots = () => {
    navigate('/CommunicationWithPilots', { state: { obj } });
  };
  const MoveToPersonalArea = () => {
    navigate('/PersonalArea', { state: { obj } });
  };
  const MoveToContact = () => {
    navigate('/Contact', { state: { obj } });
  };
  const BackToLoginPage = () => {
    navigate('/LoginPage');
  };
  const GoBack = () => {
    navigate('/EmplOrUser');
  }

  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', minHeight: '70vh', minWidth: '136%', backgroundSize: 'cover', backgroundImage: `url('src/Pages/imgs/homeimg.png')` }}>
      <div style={{ textAlign: 'center', width: '100%' }}>
        <img src="src/Pages/imgs/logo.png" alt="Logo" style={{ width: '200px', marginBottom: '20px' }} />
        <h2> {obj.firstName} ,שלום</h2>
        <Button
          variant="contained"
          color="primary"
          onClick={() => MoveToFlightSearch(obj)}
          sx={{
            marginRight: '10px',
            backgroundColor: 'white',
            color: '#ff5c8d',
            fontWeight: 'bold',
            borderRadius: '20px',
            padding: '10px 30px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s ease',
            fontFamily: 'Arial, sans-serif',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#ccc',
            },
          }}
        >
          שריין טיסה
        </Button>
        <br /><br />
        <Button
          variant="contained"
          onClick={() => movetoCommunicationWithPilots(obj)}
          sx={{
            marginRight: '10px',
            backgroundColor: 'white',
            color: '#ff9800',
            fontWeight: 'bold',
            borderRadius: '20px',
            padding: '10px 30px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s ease',
            fontFamily: 'Arial, sans-serif',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#ccc',
            },
          }}
        >
          תקשורת עם טייסים
        </Button>
        {/* <br /><br />
        <Button
          variant="contained"
          onClick={MoveToFlightConditions}
          sx={{
            marginRight: '10px',
            backgroundColor: 'white',
            color: '#4caf50',
            fontWeight: 'bold',
            borderRadius: '20px',
            padding: '10px 30px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s ease',
            fontFamily: 'Arial, sans-serif',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#ccc',
            },
          }}
        >
          מזג אויר
        </Button> */}
        <br /><br />
        <Button
          variant="contained"
          onClick={MoveToPersonalArea}
          sx={{
            marginRight: '10px',
            backgroundColor: 'white',
            color: '#2196f3',
            fontWeight: 'bold',
            borderRadius: '20px',
            padding: '10px 30px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s ease',
            fontFamily: 'Arial, sans-serif',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#ccc',
            },
          }}
        >
          אזור אישי
        </Button>
        <br /><br />
        <Button
          variant="contained"
          onClick={MoveToContact}
          sx={{
            marginRight: '10px',
            backgroundColor: 'white',
            color: '#ff9800',
            fontWeight: 'bold',
            borderRadius: '20px',
            padding: '10px 30px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s ease',
            fontFamily: 'Arial, sans-serif',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#ccc',
            },
          }}
        >
          משקל ואיזון
        </Button>
        <br /><br />
        {/* <Button
          variant="contained"
          onClick={() => navigate('/FlightDocumentation')}
          sx={{
            marginRight: '10px',
            backgroundColor: 'white',
            color: '#ff9800',
            fontWeight: 'bold',
            borderRadius: '20px',
            padding: '10px 30px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s ease',
            fontFamily: 'Arial, sans-serif',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#ccc',
            },
          }}
        >
          תיעוד טיסות
        </Button>


        <br /><br />
        <Button
          variant="contained"
          onClick={() => navigate('/ViewAndUpdateProfile')}
          sx={{
            marginRight: '10px',
            backgroundColor: 'white',
            color: '#ff9800',
            fontWeight: 'bold',
            borderRadius: '20px',
            padding: '10px 30px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s ease',
            fontFamily: 'Arial, sans-serif',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#ccc',
            },
          }}
        >
          פרופיל הטייס
        </Button>
        <br /><br /> */}
        <Button
          onClick={BackToLoginPage}
          sx={{
            marginRight: '7px',
            fontSize: '14px',
            padding: '8px 20px',
            backgroundColor: 'white',
            color: '#9c27b0',
            borderRadius: '20px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s ease',
            fontFamily: 'Arial, sans-serif',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#ccc',
            },
          }}
        >
          התנתק
        </Button>
        <br />
      </div>
    </div>
  );
};

export default HomePage;
