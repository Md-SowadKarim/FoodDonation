import React, { useState } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import { savedJob } from '../../components/utility/Local'

const Details = () => {
   
  const {cartId}=useParams()
  const datas=useLoaderData()
  const selectedData=datas.find(data=> data.id === parseInt(cartId))
  //console.log(selectedData)
  //console.log(cartId)
  const handleClick=()=>{
    savedJob(selectedData)
  
  }
  return (
    <div className='rounded-md'>
   <div className=" rounded-md relative hero h-[600px] bg-center bg-no-repeat" style={{backgroundImage: `url(${selectedData.Picture})`}}>
  <div className=" flex rounded-md  items-center hero-overlay h-[80px] bottom-0 absolute bg-opacity-60">
    <Link to="/donation">
    <button onClick={handleClick} style={{background:`${selectedData.Text_bg}`}} className=" text-white ml-5   btn btn-primary">Donate $ {selectedData.Price}</button>
 
    </Link>
   </div>
 
</div>
<h1 className='text-5xl font-extrabold m-5 left-2 text-left'>{selectedData.Title}</h1>
<p className='text-left'>{selectedData.Description}</p>
    </div>
  )
}

export default Details
