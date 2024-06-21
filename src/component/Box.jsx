import React from "react";

function Box({name,work}){

    function tt(){
        alert("Hello");
    }
    return(
        <div className="box">
            <h1 onClick={tt}>Hello my name is {name} and i am a {work}</h1>
        </div>
    )
}

export default Box;
