import React, { useEffect, useState } from 'react'
import Newscard from './Newscard';
// import "./News.css"

const url="https://newsapi.org/v2/top-headlines?country=us&apiKey=baee81156c2647b69d793bbf848b1fe4";


function News() {
  const [News,setnews]=useState([])
   
  const[Query,setQuery]=useState("");
 async function Fetchnews(){
  const res= await fetch(url);
  const Data=await res.json();
  console.log(Data.articles)
  setnews(Data.articles)
}
function changehandler(e){
  setQuery(e.target.value)
}
useEffect(()=>{
Fetchnews();
},[]);


  return (

    <div>
      <div className="news-header flex flex-col items-center">

        <h1> Hello ABC News Update</h1>
        <input type="search"  className=" border rounded-md p-1 w-96 mt-2" value={Query} onChange={changehandler} />
      </div>

        <div className="news flex flex-wrap w-[90%] mx-auto justify-between gap-2">
        {
        News.filter((merinews)=>{
          return  merinews.title.toLowerCase().startsWith(Query);
        })
         .map((merinews)=>{
            return <Newscard{...merinews} key={merinews.title}/>
          })
          
        }
        </div>
        
      
    </div>
  )
}

export default News
