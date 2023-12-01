import React from 'react'
import Details from '../../layouts/details/Details'
import { Link } from 'react-router-dom'

const Card = ({data}) => {
//    const card_bg=data.Card_bg
//    const category_bg=data.Category_bg
//    const text_bg=data.Text_bg

 //  console.log("card",card_bg,"category",category_bg,"text",text_bg)
  return (
    <div>
         <Link to={`/details/${data.id}`}>
         <div style={{backgroundColor: `${data.Card_bg}`}}  className="my-5 mx-3 ">
      <div className=" shadow-xl">
  <figure><img src={data.Picture} /></figure>
  <div className="text-left ">
    <div style={{backgroundColor: `${data.Category_bg}`}}  className=' text-center rounded-md w-[80px]  m-2'>



      
    <p style={{color:`${data.Text_bg}`}} className="px-2 py-1  ">{data.Category}</p>
    </div>
    <h1 style={{color:`${data.Text_bg}`}} className="p-2 text-xl font-bold">{data.Title}</h1>
  </div>
</div>
    </div>
        </Link>
    </div>
  
  )
}

export default Card
