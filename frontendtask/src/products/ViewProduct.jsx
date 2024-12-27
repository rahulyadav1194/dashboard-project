import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ViewProduct() {
let [data, setData] = useState([])

    let {id} = useParams()
    useEffect(()=>{
        getDataById()
    }, [])
    async function getDataById(){
        let result = await axios.get(`http://localhost:700/api/getProductById/${id}`)
        setData(result.data)
    }

  return (
    <>
    {data.map((data)=>(
        <div className="w-[300px] rounded-md border mr-[60px] border-double  border-gray-900  bg-gray-200" >
       <img
        src={`http://localhost:700/${data.image}`}
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold"> ID:- <span>{data.id}</span></h1>
        <h1 className="text-lg font-semibold">Brand:- <span>{data.brand}</span></h1>
        <h1 className="text-lg font-semibold">Category :- <span>{data.category }</span></h1>
       
        <button
          type="button"
          className="mt-4 rounded-sm bg-black px-3.5 py-1 text-[20px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button>
      </div>
    </div>
    ))}
    </>
  )
}
