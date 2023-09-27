
import React from 'react'
import { useEffect , useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {STUDENT_VIEW_API} from '../constant'

const ViewStudent = () => {

    const {id} =useParams();
    const [fristName,setFristName]=useState("")
    const [lastName,setLastName]=useState("")
    const [branch,setbranch]=useState("")
    const [grade,setGrade]=useState("")
    const [address,setAddress]=useState("")

   
    
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
  return (
    <div className=' w-[280px] bg-slate-600 text-white shadow-lg p-3 m-3 rounded '>
       <div >
        <ul>
            <li>id:{id}</li>
            <li>fristName:{fristName}</li>
            <li>lastName:{lastName}</li>
            <li>branch:{branch}</li>
            <li>grade:{grade}</li>
            <li>address:{address}</li>
        </ul>
        <button className=' rounded-lg  p-3 m-3 bg-black text-white'><Link to="/"> back to home </Link></button>
       </div>
    </div>
  )
}

export default ViewStudent
