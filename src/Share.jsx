import React from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import Header from './Header'
import CodeEditor from './CodeEditor'
import { useCode} from './context/CodeProvider'
import Submit from './Submit' 
import { useEffect } from 'react'
import { baseUrl } from './url'

const Share = () => {

  const {val,setVal}= useCode()
    let {id} = useParams();
    console.log(id);

    useEffect(()=>{
      if(id)
        {
         
            axios.post(`${baseUrl}/link/view`,{
              id:id
            }).then((res)=>{
              console.log(res);
              setVal(res.data.code)
              
            }).catch((error)=>{
              console.log("Error :"+ error)
            })
          }

        }
    ,[])

    

    // let {id} = useParams();
    // if(id)
    //   {
    //     setTimeout(()=>{
    //       setVal("Code modified")
    //     })
    //   }
    

  return (
    <div >
      <Header/>
      <CodeEditor id={id}/>
    </div>
  )
}

export default Share
