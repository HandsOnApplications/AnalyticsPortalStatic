import React, { useState, useEffect } from 'react';
import axios from 'axios';


function TileReports(){
    const [data, setData] = useState([]);  
    const value = -1;  

    useEffect(() => {
        (async function () {
        //const items = await( await fetch("http://universities.hipolabs.com/search?country=United+States")).json();
        const items =  await axios.get("http://universities.hipolabs.com/search?country=United+States");
        console.log(items);
        setData(items.data);
        })();
    },[value]);
    
    return(
        <div>
            {data.map(item => (
                <h3>{item.name}</h3>
            ))}
        </div>
        );    
}

export default TileReports;