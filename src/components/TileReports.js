import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TileReports(){
    const [data, setData] = useState([]);  
    const value = -1;  

    useEffect(() => {
        (async function () {
        //const items = await( await fetch("http://universities.hipolabs.com/search?country=United+States")).json();
        const items =  await axios.get(`https://api.coinbase.com/v2/currencies`);
        console.log(items.data.data);
        setData(items.data.data);
        })();
    },[value]);
    
    return(
        <div className="tileContainer">
            {data.map(item => (
                <div className="col-md-3 col-sm-6 col-lg-2 tile" key={item.id}><span >{item.name}</span></div>
            ))}
        </div>
        );    
}

export default TileReports;