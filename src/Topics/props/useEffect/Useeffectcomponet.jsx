import React,{useEffect, useState} from 'react'

function Useeffectcomponet() {

    const[value,setvalue]=useState(0)
    const[size,setsize]=useState(window.innerWidth)
    // useEffect(()=>{
    //     document.title=`new Title ${value}`;
    //     console.log("useEffect logic rendered here")
    // },[])

    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setsize(window.innerWidth)
        })
    },[])
    console .log("Component rendered here")

  return (
    <div>
        <h1>use effect component</h1>
      {/* <h1>{value}</h1>
      <button onClick={()=>setvalue(value+1)}>click</button> */}
      <h1>{size}</h1>
    </div>
  )
}

export default Useeffectcomponet
