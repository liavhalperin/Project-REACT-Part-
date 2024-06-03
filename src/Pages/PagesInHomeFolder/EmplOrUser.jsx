import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';

const EmplOrUser = () => {
    const navigate = useNavigate();

    const GoToLoginPage = () => {
        navigate('/LoginPage');
    };
    // const MoveToFlightConditions = () => {
    //     navigate('/FlightConditions');
    // };
    const GotoLoginPageEm = () => {
        navigate('/LoginPageEm');
    };
    // const MoveToContact = () => {
    //     navigate('/Contact');
    // };
    // const GoToHamburger = () => {
    //     navigate('/Hamburger');
    // };

    const GoBack = () => {
        navigate('/EmplOrUser');
    };

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
                <br />
                <Button
                    variant="contained"
                    onClick={GoToLoginPage}
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
                    כניסת טייסים
                </Button>
                <br /><br />
                <Button
                    variant="contained"
                    onClick={GotoLoginPageEm}
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
                    כניסת עובדים
                </Button>
                <br /><br />
            </div>
        </div>
    );
};

export default EmplOrUser;
