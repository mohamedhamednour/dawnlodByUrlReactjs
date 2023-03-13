import React, { useState, useEffect } from 'react';

function Geolocation() {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => setPosition(position),
      (error) => setError(error.message)
    );
  }, []);

  return (
    <div>
      {position ? (
        <div>
          
        
          <map>
          <area shape="rect" coords={position.coords.latitude} alt="Computer" />
          <area shape="rect" coords={position.coords.longitude} alt="Computer" />

          </map>
          <iframe src={`https://www.google.com/maps/embed/v1/place?q=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyAvdmD9fVbBpusvip4X3ee32HxlM4E8PF0'`}></iframe>
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Geolocation;
