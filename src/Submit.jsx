import React from 'react'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { useCode } from './context/CodeProvider';
import axios from 'axios'
import { baseUrl } from './url';



const Submit = ({id}) => {
    const {val,setVal,disabled,setDisabled}= useCode()


let newID = !id?uuidv4():id;

const handleClick=()=>{
    !id?axios.post(`${baseUrl}/link/post`,{
        id:newID,
        code:val
      }).then((res)=>{
        console.log(res);
        setVal(res.data.code)
        setDisabled(true)
        
      }).catch((error)=>{
        console.log("Error :"+ error)
      }):
      
      axios.put(`${baseUrl}/link/update`,{
        id:newID,
        code:val
      }).then((res)=>{
        console.log(res);
        setVal(res.data.code)
        setDisabled(true)

      }).catch((error)=>{
        console.log("Error :"+ error)
      })



}
  return (
    <Link to ={`/${newID}`}><button disabled={disabled} onClick={handleClick}  className={`text-base p-3 ${!disabled?'bg-[#406AFF]':'bg-[#68748a]'} flex  items-center rounded-full px-4 text-white gap-2`}>
    <img src="Share.svg" alt="" />
    <span>Share</span>
  </button>
  </Link>
  )
}

export default Submit
