import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingPage = () => {
  // const [isLoading, sIsLoading] = useState(true);
  const sTimeout = setTimeout;
  const navigate = useNavigate();

  useEffect(() => {
    const loadingTimer = sTimeout(() => {
      // sIsLoading(false);
      navigate('/EmplOrUser'); 
    }, 1500);

    // מנקה את הטיימר כש הקומפוננטה נמחקת
    return () => clearTimeout(loadingTimer);
  }, [navigate]);

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: #111;
        }

        .container {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .ring {
          position: relative;
          width: 150px;
          height: 150px;
          border: 4px solid transparent;
          border-top: 4px solid #24ecff55;
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <div className="container">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
      </div>
    </>
  );
};


export default LoadingPage;
