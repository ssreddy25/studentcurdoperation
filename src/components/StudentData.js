import { useEffect, useState } from "react";

import { STUDENT_LIST_API } from "../constant";
import { STUDENT_DELETE_API } from "../constant";

import StudentList from "./StudentList";
import axios from "axios";
import { Link } from "react-router-dom";

const  StudentData = ()=>{

    const[studenttlist,setStudenttlist]=useState([])
    const[pagerefres,setPagerefres] =useState(false)

    useEffect(()=>{
        getStudentData()
      
    },[pagerefres])

    const getStudentData = async ()=>{

        const data= await fetch(STUDENT_LIST_API);
        const json = await data.json();
        console.log(json)
        setStudenttlist(json)
    }

     const deleteStudent = async (id) =>{
       const delet = await fetch(STUDENT_DELETE_API+id ,{method: 'DELETE',
       mode: 'cors'})
       setPagerefres(true)
     }
    
    return(
        <div className="">
        <table class="table-auto md:table-fixed mx-72 p-2 my-2 shadow-lg  border-separate border-spacing-2 border border-slate-400 hover:border-spacing-2">
        <caption class="caption-top">
           STUDENT LIST
  </caption>
        <thead className="border border-dashed ">
          <tr>
          <th>id</th>
        <th>fristname</th>
        <th>lastname</th>
        <th>branch</th>
        <th>grade</th>
        <th>address</th>
        <th>edit</th>
        <th>delete</th>
        <th>view</th>
          </tr>
        </thead>
        <tbody>
            {
                studenttlist.map((student)=>
                (
                    <tr key={student.id}>
                        <td className="border border-slate-300 ">{student.id}</td>
                        <td className="border border-slate-300 ">{student.fristName}</td>
                        <td className="border border-slate-300 ">{student.lastName}</td>
                        <td className="border border-slate-300 ">{student.branch}</td>
                        <td className="border border-slate-300 ">{student.grade}</td>
                        <td className="border border-slate-300 ">{student.address}</td>
                       <td><button className="w-12 h-10 bg-black text-white rounded-lg"><Link to={"edit/"+student.id}> edit</Link> </button></td>
                       <td><button className="w-12 h-10 bg-black text-white rounded-lg"><Link to={"view/"+student.id}>view</Link></button></td>
                       <td><button onClick={()=>{deleteStudent(student.id)}} className="w-12 h-10 bg-black text-white rounded-lg">delete</button></td>
                        
                        </tr>
                )
                )
             }
         
        </tbody>
        <button className="w-23 h-10 bg-black m-2 py-2 text-white rounded-lg"><Link to="/addstudent">Add Student</Link></button>
      </table>
    
      </div>
    )
}

export default StudentData;