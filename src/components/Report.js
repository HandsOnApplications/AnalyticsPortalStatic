import React, {useState} from "react";

function Report(){
    const sayHello = () => {
        console.log("hello");
    };
    const [item, setItem] = useState({});
    return (
        <div>
            <button onClick={sayHello}>Say Hello</button>
        </div>
    );
}

export default Report;