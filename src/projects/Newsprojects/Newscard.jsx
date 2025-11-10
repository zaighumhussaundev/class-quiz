import { useState } from "react"


function Newscard({title,description,author,url,urlToImage,}) {
 const[ReadMore,setReadMore]=useState(false);

  return (
    <div className='card w-80 p-2 shadow-xl/20 rounded-md my-2'>
        <img src={urlToImage} alt="" />
      <h4 className="font-semibold my-2">{title}</h4>
      <p>{ReadMore?description&&description:description&&description.substring(0,50)}</p>
      <button className='readmore-btn ml-2 cursor-pointer' onClick={()=>{setReadMore(!ReadMore)}}>{ReadMore?'showless':'Readmore'}</button>
      <div className="card-footer flex justify-between">

      <button>{author}</button>
      <a href={url}>Detalies</a>
      </div>
    </div>
  )
}

export default Newscard
