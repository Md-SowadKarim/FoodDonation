import React from 'react'
import { Link } from 'react-router-dom';

const selectedCard = ({item}) => {
   // console.log(item)
  return (
    <div  >
      <div style={{backgroundColor: `${item.Card_bg}`}} className="card lg:card-side shadow-xl">
  <img src={item.Picture} alt="Album"/>
  <div className=" m-4 space-y-2">
  <div style={{backgroundColor: `${item.Category_bg}`}}  className=' text-center rounded-md w-[80px]  my-2'>
    <p style={{color:`${item.Text_bg}`}} className=" py-1  ">{item.Category}</p>
    </div>
    <div className='flex-grow'>
    <h1  className="  text-left text-md font-bold">{item.Title}</h1>
    <p style={{color:`${item.Text_bg}`}} className=" font-bold text-left ">$ {item.Price}</p>
    
    </div>
    <div className="card-actions justify-start">
        <Link to={`/details/${item.id}`}>
        <button style={{backgroundColor: `${item.Text_bg}`}} className="btn text-white">View Details</button>
   
        </Link>
      </div>
  </div>
</div>
    </div>
  )
}

export default selectedCard
