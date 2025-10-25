import React from 'react'
import "./components.css"

let header=[
  {

    profileimage:"https://preview.colorlib.com/theme/imagine/images/person_1.jpg",
    profiletitle: "Cloe Marena",
    profilefollow:"Followers:1200",
    profilepost:"Post:34",
    profilelikes:"Likes:3400",
  },
  {

    profileimage:"https://preview.colorlib.com/theme/imagine/images/person_2.jpg",
    profiletitle: "John Rooster",
    profilefollow:"Followers:1400",
    profilepost:"Post:20",
    profilelikes:"Likes:3500",
  },
  {

    profileimage:"https://preview.colorlib.com/theme/imagine/images/person_3.jpg",
    profiletitle: "Will Turner",
    profilefollow:"Followers:1400",
    profilepost:"Post:70",
    profilelikes:"Likes:4000",
  },
  {

    profileimage:"https://preview.colorlib.com/theme/imagine/images/person_4.jpg",
    profiletitle: "Nicolas Stainer",
    profilefollow:"Followers:1400",
    profilepost:"Post:30",
    profilelikes:"Likes:1200",
  },
  {

    profileimage:"https://preview.colorlib.com/theme/imagine/images/person_5.jpg",
    profiletitle: "George Brook",
    profilefollow:"Followers:1000",
    profilepost:"Post:40",
    profilelikes:"Likes:4500",
  },
  {

    profileimage:"https://preview.colorlib.com/theme/imagine/images/person_6.jpg",
    profiletitle: "Emely Hopson",
    profilefollow:"Followers:1400",
    profilepost:"Post:190",
    profilelikes:"Likes:3730",
  },
  
  
  
]





function components() {
  return (
    <div>
      <h1 style={{display:'flex',justifyContent:'center',borderRadius:'20px', backgroundColor:'#f57224', color:'white', width:'400px'}}>Profile header and Status</h1>
       <div className="profile">
           {
             header.map((meriprofile)=>{
                return<View {...meriprofile}/>

            }
            
            )
           }

        </div>
      
    </div>
  )
}

export default components


function View (props){
  console .log(props)
   return(
        <div className='Data'>
            <img src={props.profileimage} alt="pick" />
             <h3>{props.profiletitle}</h3>
             <div className='givendata'>

             <h5>{props.profilefollow}</h5>
             <h5>{props.profilepost}</h5>
             <h5>{props.profilelikes}</h5>
             </div>
        </div>

        
    
    )
}
