import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const addpilot = 'https://proj.ruppin.ac.il/bgroup35/test2/tar1/API/Pilots/addpilot';

const UploadProfileImage = 'https://proj.ruppin.ac.il/bgroup35/test2/tar1/API/FileUpload/UploadProfileImage';
const UploadLicesneImage = 'https://proj.ruppin.ac.il/bgroup35/test2/tar1/API/FileUpload/UploadLicenseImage';
const UploadIDImage = 'https://proj.ruppin.ac.il/bgroup35/test2/tar1/API/FileUpload/UploadIDImage';
const UploadMedicalImage = 'https://proj.ruppin.ac.il/bgroup35/test2/tar1/API/FileUpload/UploadMedicalImage';
const UploadivhanRamaImage = 'https://proj.ruppin.ac.il/bgroup35/test2/tar1/API/FileUpload/UploadMivhanRamaImage';
const UploadLogbookImage = 'https://proj.ruppin.ac.il/bgroup35/test2/tar1/API/FileUpload/UploadLogbookImage';

const RegistrationPage = () => {
  const [licenseNumber, sLicenseNumber] = useState('');
  const [firstName, sFirstName] = useState('');
  const [lastName, sLastName] = useState('');
  const [phoneNumber, sPhoneNumber] = useState('');
  const [dateOfBirth, sDateOfBirth] = useState('');
  const [validityDateOfMedicalCertificate, sValidityDateOfMedicalCertificate] = useState('');
  const [validityDateOfLevelTest, sValidityDateOfLevelTest] = useState('');

  const [profileImage, sProfileImage] = useState(null);
  const [licenseImage, sLicenseImage] = useState(null);
  const [idImage, sIdImage] = useState(null);
  const [medicalImage, sMedicalImage] = useState(null);
  const [mivhanRamaImage, sMivhanRamaImage] = useState(null);
  const [logbookImage, sLogbookImage] = useState(null);

  const navigate = useNavigate();

  const Completedandmovingon = () => {
    navigate('/LoginPage', { state: "You have successfully registered" });
  };

  const IFFileChange = (setter) => (e) => {
    setter(e.target.files[0]);
  };

  const uploadFile = async (file, url, licenseNumber) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('LicenseNumber', licenseNumber);

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Failed to upload ${file.name}`);
      }

      return response.json();
    } catch (error) {
      console.error('Error uploading file:', error);
      throw new Error('Failed to upload the file. Please try again.');
    }
  };

  const IfSubmit = async (e) => {
    e.preventDefault(); //אם  מונע את שליחת הטופס כברירת מחדל אם קיים

    const data = {
      LicenseNumber: licenseNumber,
      FirstName: firstName,
      LastName: lastName,
      Dob: dateOfBirth,
      PhoneNumber: phoneNumber,
      MedicalExpiry: validityDateOfMedicalCertificate,
      MivhanRama: validityDateOfLevelTest
    };

    console.log("Data that sent:", data);

    try {
      const response = await fetch(addpilot, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Network response was not ok: ${errorText}`);
      }

      const result = (await response.headers.get('content-length')) > 0 ? await response.json() : {};
      console.log("fetch POST= ", result);

      if (profileImage) await uploadFile(profileImage, UploadProfileImage, licenseNumber);
      if (licenseImage) await uploadFile(licenseImage, UploadLicesneImage, licenseNumber);
      if (idImage) await uploadFile(idImage, UploadIDImage, licenseNumber);
      if (medicalImage) await uploadFile(medicalImage, UploadMedicalImage, licenseNumber);
      if (mivhanRamaImage) await uploadFile(mivhanRamaImage, UploadivhanRamaImage, licenseNumber);
      if (logbookImage) await uploadFile(logbookImage, UploadLogbookImage, licenseNumber);

      console.log('All data submitted and files uploaded successfully');
      // כל הפרטים נשלחו בהצלחה והקבצים הועלו בהצלחה
      Completedandmovingon();
      //, { state: { obj } });
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
      // הייתה בעיה עם פעולת השליחה , אנא נסה שוב
    }
  };

  return (
    <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', minHeight: '70vh', minWidth: '136%', backgroundSize: 'cover', backgroundImage: `url('src/Pages/imgs/homeimg.png')` }}>
      <div style={{ textAlign: 'center', width: '100%' }}>
        <h1>הרשמה</h1>
        <form onSubmit={IfSubmit}>
          <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
            <p style={{ margin: 0, padding: 0, border: 0 }}>מספר רישיון טיסה</p>
            <input style={{ margin: 0, padding: 0, border: 0, ...inputStyle }} type="text" value={licenseNumber} onChange={(e) => sLicenseNumber(e.target.value)} dir="rtl" />
          </div>
          <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
            <p style={{ margin: 0, padding: 0, border: 0 }}>שם פרטי</p>
            <input style={{ margin: 0, padding: 0, border: 0, ...inputStyle }} type="text" value={firstName} onChange={(e) => sFirstName(e.target.value)} dir="rtl" />
          </div>
          <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
            <p style={{ margin: 0, padding: 0, border: 0 }}>שם משפחה</p>
            <input style={{ margin: 0, padding: 0, border: 0, ...inputStyle }} type="text" value={lastName} onChange={(e) => sLastName(e.target.value)} dir="rtl" />
          </div>
          <p style={{ margin: 0, padding: 0, border: 0 }}>תאריך לידה</p>
          <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
            <input style={{ margin: 0, padding: 0, border: 0, ...inputStyle }} type="date" value={dateOfBirth} onChange={(e) => sDateOfBirth(e.target.value)} dir="rtl" />
          </div>
          <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
            <p style={{ margin: 0, padding: 0, border: 0 }}>מספר טלפון</p>
            <input style={{ margin: 0, padding: 0, border: 0, ...inputStyle }} type="tel" value={phoneNumber} onChange={(e) => sPhoneNumber(e.target.value)} dir="rtl" />
          </div>
          <p style={{ margin: 0, padding: 0, border: 0 }}>תוקף תעודה רפואית</p>
          <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
            <input style={{ margin: 0, padding: 0, border: 0, ...inputStyle }} type="date" value={validityDateOfMedicalCertificate} onChange={(e) => sValidityDateOfMedicalCertificate(e.target.value)} dir="rtl" />
          </div>
          <p style={{ margin: 0, padding: 0, border: 0 }}>תוקף מבחן</p>
          <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
            <input style={{ margin: 0, padding: 0, border: 0, ...inputStyle }} type="date" value={validityDateOfLevelTest} onChange={(e) => sValidityDateOfLevelTest(e.target.value)} dir="rtl" />
          </div>

          <div value="divs_of_files" style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
            <div style={{ marginBottom: '20px', marginRight: '2px', marginLeft: '-10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <label style={{ fontFamily: 'Arial, sans-serif', color: 'white', fontSize: 'smaller' }}>תמונת פרופיל</label>
              <input type="file" onChange={IFFileChange(sProfileImage)} style={{ marginRight: '-70px', marginLeft: '30px' }} />
            </div>
            <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <label style={{ fontFamily: 'Arial, sans-serif', color: 'white', fontSize: 'smaller' }}>צילום ת"ז</label>
              <input type="file" onChange={IFFileChange(sIdImage)} style={{ marginRight: '-65px', marginLeft: '30px' }} />
            </div>
            <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '-45px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <label style={{ fontFamily: 'Arial, sans-serif', color: 'white', fontSize: 'smaller' }}>צילום תעודה רפואית</label>
              <input type="file" onChange={IFFileChange(sMedicalImage)} style={{ marginRight: '-70px', marginLeft: '30px' }} />
            </div>
            <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '46px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <label style={{ fontFamily: 'Arial, sans-serif', color: 'white', fontSize: 'smaller' }}>לוגבוק</label>
              <input type="file" onChange={IFFileChange(sLogbookImage)} style={{ marginRight: '-69px', marginLeft: '30px' }} />
            </div>
          </div>
          <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '-20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label style={{ fontFamily: 'Arial, sans-serif', color: 'white', fontSize: 'smaller' }}>צילום מבחן רמה</label>
            <input type="file" onChange={IFFileChange(sMivhanRamaImage)} style={{ marginRight: '-70px', marginLeft: '30px' }} />
          </div>
          <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '-25px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label style={{ fontFamily: 'Arial, sans-serif', color: 'white', fontSize: 'smaller' }}>צילום רישיון טיסה</label>
            <input type="file" onChange={IFFileChange(sLicenseImage)} style={{ marginRight: '-70px', marginLeft: '30px' }} />
          </div>

          <button type="submit" style={buttonStyle}>הגש</button>
          <br />
          <button onClick={() => navigate('/LoginPage')} style={buttonStyle}>חזור</button>
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

export default RegistrationPage;
