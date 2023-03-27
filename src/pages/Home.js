import React from 'react'
import pici from "../assets/pic.jpg"
const Home = ({isLoggedIn}) => {
  return (
    <div className='relative flex justify-center items-center text-white text-3xl h-full'>
      <img src={pici} className='relative' width={500} height={320} loading="lazy"/>
        <p className='absolute text-2xl underline underline-offset-4 hover:animate-spin '>
            Home Page 
        </p>
    </div>
  )
}

export default Home



// 