import React from 'react'
import "./books.css"
let booksdata=[
  {
  bookimage:"https://m.media-amazon.com/images/I/91Sy3S-198L._AC_UL480_FMwebp_QL65_.jpg",
  booktitile:"The Lost Bookshop: The most charming and uplifting novel for 2025 and the perfect gift for book lovers!",
  bookauthor:"Evie Woods (Author)",
  bookpublishdate :"November 7,2023",
}
,
{
  bookimage:"https://m.media-amazon.com/images/I/81a1UWnv2bL._AC_UL480_FMwebp_QL65_.jpg",
  booktitile:"The Bookshop: A History of the American Bookstore",
  bookauthor:" Evan Friss (Author)",
  bookpublishdate :"August 6, 2024",
},
{
  bookimage:"https://m.media-amazon.com/images/I/81ZLJHbfHkL._AC_UL480_FMwebp_QL65_.jpg",
  booktitile:"The Cinnamon Bun Book Store: The viral TikTok cozy fall romance for fans of opposites attract and small-town romcoms in 2025!",
  bookauthor:"Laurie Gilmore (Author",
  bookpublishdate :"",
}


]

function Bookstore() {
  return (
    <div>
        <h1>Book Store</h1>
        <div className='books'>
         {
          booksdata.map((meribook)=>{
            return <Book {...meribook}/>
          }
        
        )
         }

      
        </div>
    </div>
  )
}

export default Bookstore


function Book(props){
  console.log(props)
    return(
        <div className='Book'>
        <img src={props.bookimage}alt="pick" />
        <h5>{props.booktitile}</h5>
        <p>{props.bookauthor}</p>
        </div>
    )
}
