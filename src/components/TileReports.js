import React, { useState, useEffect } from 'react';

function TileReports(){
    const [data, setData] = useState([]);

    useEffect(() => {
        (async function () {
        const items = await( await fetch("/api/reports")).json();
        setData(items);
        })();
    });
    console.log(data);
    return(
        <div>
            {data.map(item => (
                <h3>name</h3>
            ))}
        </div>
        );    
}

export default TileReports;