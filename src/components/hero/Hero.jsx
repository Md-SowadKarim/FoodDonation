import React, { useState } from 'react'

const Hero = ({search}) => {
  const [text,setText]=useState("")
  const handleChange=(e)=>{
    setText(e.target.value);
  //  console.log('value is:', e.target.value);
    e.preventDefault()
    
  }
  const handleClick=()=>{
    search(text)
    setText("")
  }
  return (
    <div>
      <div className="hero " style={{backgroundImage: 'url(./bannar.png)'}}>
  <div className="hero-overlay bg-opacity-90 h-[400px]"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">I Grow By Helping People In Need</h1>
      <div>
      <div className="mb-3">
  <div className="relative mb-4 flex w-full flex-wrap items-stretch">
    <input
    onChange={handleChange}
      type="search"
      value={text}
      className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-white focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="search here..."
      />

    
    <button
      className="relative z-[2] flex items-center rounded-r bg-[#FF444A] px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
      type="button"
      id="button-addon1"
      data-te-ripple-init
      data-te-ripple-color="light"
      onClick={handleClick}
      >
    
    Search
    </button>
  </div>
</div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Hero
