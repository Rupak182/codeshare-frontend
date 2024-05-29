import React from 'react'
import { createContext,useContext } from 'react';
import { useState,useParams } from 'react';
import axios from 'axios'

export const CodeContext = createContext();

export default function CodeProvider  ({children}) {
  let data =`<html>
  <head>
    <title>HTML Sample</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <style type="text/css">
      h1 {
        color: #CCA3A3;
      }
    </style>
    <script type="text/javascript">
      alert("I am a sample... visit devChallengs.io for more projects");
    </script>
  </head>
  <body>
    <h1>Heading No.1</h1>
    <input disabled type="button" value="Click me" />
  </body>
</html>`
  const [val, setVal] = useState(()=>{
    return data
  })
  const [disabled,setDisabled]=useState(true)

  return (
      <CodeContext.Provider value ={{val,setVal,disabled,setDisabled}}>
        {children}
      </CodeContext.Provider>
  )
}




export const useCode= ()=>useContext(CodeContext)
