import React from 'react'
import { useState } from 'react'

export const Change = () => {
    const [name, setName] = useState({name: 'yinka', age:12})

    function changeName(){
        setName({name: 'BJ', age: 15})
    }


  return (
    <div>
        {name.name}  {name.age}
     <button onClick={changeName}>Change Name</button>
     </div>
   
  )
}
