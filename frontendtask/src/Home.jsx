import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div className='w-full h-[100vh] bg-gradient-to-r from-purple-600 to-lime-400 flex justify-center items-center flex-col gap-[50px]'>
        <h1 className='text-rose-800   hover:text-lime-400 text-5xl font-bold'> <u>Welcome To Hanumant</u></h1>
    <div>
      <Link to='/customer' className='p-5 bg-black text-white  hover:bg-green-800 rounded-2xl text-2xl font-bold mr-6'> For Customer</Link>
      
      <Link to='/product' className='p-5 bg-black text-white  hover:bg-green-500 rounded-2xl text-2xl font-bold ml-[-20px]'> For Product</Link>

    </div>

      </div>
    </>
  )
}
