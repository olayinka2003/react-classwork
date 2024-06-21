import React from 'react'
import Itemlist from './Itemlist'
import ItemsControls from './ItemsControls'
import { useState } from 'react'



function ParentComponent() {
  
    const [add, addCount] = useState([])

    const addItem = ()=>{
        addCount(add.toSpliced(0,0, `item ${add.length +1}`));
    }
    const removeCount = ()=>{
        addCount(add.slice(0, -1))
    }
  return (
    <div>
       <ul>
        {add.map((item)=>(
           <li key={item}> <Itemlist food={item}/></li>
        ))}
       </ul>
        <ItemsControls add={addItem} remove={removeCount} name={add}/>
    </div>
  )
}

export default ParentComponent;