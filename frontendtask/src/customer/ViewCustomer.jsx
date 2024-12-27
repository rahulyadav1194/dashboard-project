import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ViewCustomer() {

    let [data ,setData] = useState([])
    
        let{id} =useParams()
    useEffect(()=>{
        getDataById()
    },[])

    async function getDataById(){
        let result = await axios.get(`http://localhost:700/api/getCustomerById/${id} `)
        setData(result.data)
    }
    

  return (
    <>
        {data.map((data)=>(
        <div className="w-[300px] rounded-md border mr-8 divide-double bg-lime-200 text-red-500 border-black">
      
      <div className="p-4">
        <h1 className="text-lg font-semibold"> ID:- <span>{data.id}</span></h1>
        <h1 className="text-lg font-semibold">Full Name:- <span>{data.full_name}</span></h1>
        <h1 className="text-lg font-semibold">Email :- <span>{data.email }</span></h1>
        <h1 className="text-lg font-semibold">Number :- <span>{data.number }</span></h1>
        <h1 className="text-lg font-semibold">Payment-Dues :- <span>{data.payment_dues }</span></h1>
        <h1 className="text-lg font-semibold">Address :- <span>{data.address }</span></h1>
       
        <button
          type="button"
          className="mt-4 rounded-sm bg-black px-3.5 py-1 mr-8 text-[20px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button>
      </div>
    </div>
    ))}
    </>
  )
}
