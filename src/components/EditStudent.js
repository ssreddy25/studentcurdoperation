import React, { useEffect, useState } from 'react'

import { STUDENT_VIEW_API } from '../constant'
import { STUDENT_EDIT_API } from '../constant'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const EditStudent = () => {
    const {id} =useParams();
    const [fristName,setFristName]=useState("")
    const [lastName,setLastName]=useState("")
    const [branch,setbranch]=useState("")
    const [grade,setGrade]=useState("")
    const [address,setAddress]=useState("")

    const student ={
        "id": id,
        "fristName":fristName,
        "lastName" :lastName,
        "branch":branch,
        "grade":grade,
        "address":address

    }
    
    useEffect(()=>{
       getStudent();
     },[])

    const getStudent = async ()=>{
        const data = await fetch(STUDENT_VIEW_API+id);
        const json  = await  data.json();
        console.log(json)
        setFristName(json.fristName)
        setLastName(json.lastName)
        setbranch(json.branch)
        setGrade(json.grade)
        setAddress(json.address)
    }

    const updateStudent = async ()=>{
         await fetch(STUDENT_EDIT_API+student , {method:"PUT"})
    }

  return (
    <div className='w-full max-w-xs '>

        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 wx-72 p-3 m-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2"'>id</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name="studentid" type='text' value={id}/>
            <label className='block text-gray-700 text-sm font-bold mb-2'>fristName</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' name="fristname"
             value={fristName} onChange={(e)=>setFristName(e.target.value)} />
            <label  className='block text-gray-700 text-sm font-bold mb-2'>lastName</label>
            <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"type="text" name="lastName" 
            value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
            <label className='block text-gray-700 text-sm font-bold mb-2'>branch</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' name="branch"
             value={branch} onChange={(e)=>setbranch(e.target.value)}/>
            <label className='block text-gray-700 text-sm font-bold mb-2'>grade</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' name="grade"
             value={grade} onChange={(e)=>setbranch(e.target.value)}/>
            <label className='block text-gray-700 text-sm font-bold mb-2'>address</label>
            <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"type='text' name='address'
             value={address} onChange={(e)=>setAddress(e.target.value)}/>
            <p className='w-22 h-12 bg-black text-white rounded-lg m-3 p-3 cursor-pointer' onClick={()=>updateStudent()}>updateStudent</p>

            <button className=' rounded-lg  p-3 m-3 bg-black text-white'><Link to="/"> back to home </Link></button>
        </form>
      
    </div>
  )
}

export default EditStudent;
