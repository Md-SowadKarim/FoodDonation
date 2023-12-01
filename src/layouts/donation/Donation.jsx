import React, { useState } from 'react'
import { getStoredJob } from '../../components/utility/Local'
import SelectedCard from './../../components/seletectedCard/SelectedCard';

const Donation = () => {
    const [yes,setYes]=useState(false)
    const storedItem=getStoredJob()
    //console.log(storedItem.length)
   
  return (
    <div>
    <div className='grid md:grid-cols-2 gap-3 my-5'>
     {
        yes? storedItem.map(item=><SelectedCard key={item.id} item={item}></SelectedCard>)
        :
        storedItem.slice(0,4).map(item=><SelectedCard key={item.id} item={item}></SelectedCard>)
     }
   
    </div>
    {
      storedItem.length > 4?
      <button onClick={()=>setYes(!yes)} className={!yes?"btn-primary px-4 py-2 rounded-md":"hidden"}>see all</button>
      :
      ""
    }
      
   
    
     </div>
  )
}

export default Donation
