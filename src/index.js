import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
//https://dev.api.embedmicroservice.itagroupservices.com/api/PowerBi/Reportsview
// axios.interceptors.request.use(

//     request => {
//         if(request.url.includes("api.embedmicroservice.itagroupservices") || request.url.includes("universities.hipolabs.com")){
            
                
//             //request.headers['Authorization'] = `Bearer ${token}`;
//         }
//     }
// )

ReactDOM.render(<React.StrictMode><App /></React.StrictMode> , document.getElementById('root'));
