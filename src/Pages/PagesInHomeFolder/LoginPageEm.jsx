import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from '@mui/material';

const LoginPageEm = () => {
    const [PasswordKey, setPasswordKey] = useState('');
    const [id, setID] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    //const apiUrl = 'https://proj.ruppin.ac.il/bgroup35/test2/tar1/api/pilots/viewpilot?FirstName=ליאב';
    //const apiUrl = 'https://proj.ruppin.ac.il/bgroup35/test2/tar1/api/pilots/viewpilot/';
    //const apiUrl = 'https://proj.ruppin.ac.il/bgroup35/test2/tar1/API/Pilots/pilotsignin';
    const apiUrl = 'https://proj.ruppin.ac.il/bgroup35/test2/tar1/api/Employees/employeesignin';

    // const location = useLocation();
    // const obj = location.state?.obj || '';

    const GotoHomePage = (obj) => {
        navigate('/HomePageEm', { state: { obj } });
    };

    const GoBack = () => {
        navigate('/EmplOrUser');
    };

    const Login = () => {
        if (!id) {
            alert('ID is required');
            return;
        }
        if (!PasswordKey) {
            alert('PasswordKey is required');
            return;
        }

        const requestUrl = `${apiUrl}?PasswordKey=${PasswordKey}&ID=${id}`;
        console.log(requestUrl);

        fetch(requestUrl, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8'
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then((result) => {
                console.log("fetch result: ", result);
                if (result && result.passwordKey.toString() === PasswordKey && result.id.toString() === id) {
                    setIsLoggedIn(true);
                    GotoHomePage(result);
                } else {
                    alert('Invalid Password or ID');
                }
            })
            .catch((error) => {
                console.log("Fetch error: ", error);
                alert('Login failed');
            });
    };


    return (
        <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', minHeight: '70vh', minWidth: '196%', backgroundSize: 'cover', backgroundImage: `url('src/Pages/imgs/homeimg.png')` }}>
            <div style={{ textAlign: 'center', width: '100%' }}>
                {!isLoggedIn && (
                    <div>
                        <h1 style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px', fontFamily: 'Arial, sans-serif', color: 'white' }}>ברוכים הבאים</h1>
                        <input type="text" dir="rtl" placeholder="מספר תעודת זהות" value={id} onChange={(e) => setID(e.target.value)} style={{ borderRadius: '20px', fontFamily: 'Arial, sans-serif', color: 'black', backgroundColor: 'white', padding: '10px' }} />
                        <br />
                        <input type="password" dir="rtl" placeholder="סיסמא" value={PasswordKey} onChange={(e) => setPasswordKey(e.target.value)} style={{ borderRadius: '20px', fontFamily: 'Arial, sans-serif', color: 'black', backgroundColor: 'white', padding: '10px', marginBottom: '10px' }} />
                        <br />
                        <Button
                            onClick={Login}
                            variant="contained"
                            sx={{
                                backgroundColor: 'white',
                                color: '#333',
                                borderRadius: '20px',
                                '&:hover': {
                                    backgroundColor: '#ccc',
                                },
                            }}
                        >
                            התחבר
                        </Button>
                        <br /> <br />
                        <Button
                            onClick={GoBack}
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
                            חזור
                        </Button>
                        <br />
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginPageEm;