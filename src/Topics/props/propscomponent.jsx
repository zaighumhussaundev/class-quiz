import React from 'react'

function propscomponent() {
  return (
    <div>
        <h1>props Topices</h1>
        

      <Card title=" card-1" description="this is just a title of card"/>
      <Card title=" card-2" description="this is just a random description"/>
    </div>
  )
}

export default propscomponent

function Card(props){
    console.log(props)
    return(

        <div style={{border:'2px solid black', padding:'10px',boxShadow:'5px 5px 5px gray', width:'200px'}}>
    <h1>Another component</h1>
    <h1>{props.title}</h1>
    <h1>{props.description}</h1>
    </div>
    )
}

