import React, { useState, useEffect } from 'react';
import TileReports from './components/TileReports';
import axios from 'axios';

function App() {  
  const [value, setValue] = useState('');
  useEffect(() => {
      (async function () {
      const formData = new FormData();
      formData.append("grant_type", "client_credentials");
      formData.append("scope", "microEmbedApi.powerBI");
      formData.append("client_id", "AnalyticsPortal");
      formData.append("client_secret", "108190fe5a704737920d4f72aec24526");
      
      
       const response = await axios.post("https://auth.itagroupservices.com/connect/token", formData);
       console.log(response);
      })();
  },[value]);
  return (
            <div>
                <h1>  Reports</h1>                           

               <TileReports></TileReports>
            </div>
         );
}

export default App;

