import React from 'react';




function Home({name, age}) {
    function load(){
        console.log('loading');
    }
    return(
        <div>
            <h1 onClick= {load}>Hello Olayinka</h1>
            <p>Hi  my name is {name} i am a react developer 😎😎😎 and i am {age}  </p>
        </div>
    )
}

export default Home;
