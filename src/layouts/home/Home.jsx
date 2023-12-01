import React, { useEffect, useState } from 'react'
import Cards from '../../components/cards/Cards'
import Hero from '../../components/hero/Hero'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
  const [search,setSearch]=useState()
  
  const datas=useLoaderData()
  console.log(datas)
  //const [data,setData]=useState(datas)
  const searchData=(data)=>{
 //   console.log(data)
 setSearch(data)
 console.log(search)
  }
 
  return (
    <div>
      <Hero search={searchData}></Hero>
      <Cards datas={datas}></Cards>
    </div>
  )
  }

export default Home
