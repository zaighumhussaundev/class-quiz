import React ,{useState} from 'react'

// preserve a value
// can re-render that value(initial state) by built in function 






function Usestatecomponent() {
    const[text,settext]=useState("Zaighum")

//     let myname="Zaighum"
// console .log(myname)

function changename(){
   
    
    if (text==="Zaighum"){
        settext("Hussain") }
    else {
            settext("Zaighum")
        }
        

   
}



  return (
    <div style={{textAlign:"center"}}>
      <h1>Use state component</h1>
      <h1>{text}</h1>
      <button  onClick={changename}>click here</button>

    </div>
  )
}

export default Usestatecomponent
