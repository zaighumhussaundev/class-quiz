import React, { useState } from 'react'

function Counter() {
    const [ value,setvalue]=useState(1)
  return (
    <div style={{textAlign:"center"}}>
        <h1>Counter</h1>
        <h2>{value}</h2>
        <button onClick={()=>setvalue(value+1)}>Increment</button>
        <button onClick={()=>setvalue(1)}>Reset</button>
        <button onClick={()=>{
            if (value===1){
                alert("you are reached the minimum limit")
                setvalue(1)

            }
            else{
                setvalue(value-1)
            }
        }}>Decremnt</button>
      
    </div>
  )
}

export default Counter
