import React, { useEffect } from 'react'
import Editor from '@monaco-editor/react';
import { useState } from 'react';
import options from './options';
import Option from './Option';
import { useCode } from './context/CodeProvider';
import Submit from './Submit';

const CodeEditor = ({id}) => {
  const [lang,setLang]=useState("html");
  const [theme,setTheme]=useState("vs-light")
  let{val,setVal,disabled,setDisabled}= useCode();

  const onSelect= (language)=>{
    setLang(language)
  }

  const onSelect2= (theme)=>{
    setTheme(theme)
  }

  return (
    < div className='w-[100vw] md:w-[60vw] min-h-[80vh] '>
    <Editor
     height="100vh" 
     options={options}
     width="100%"

      language={lang}
       value={val} 
       onChange={(value) =>{
        setVal(value);
        setDisabled(false);
       } }
       theme={theme}
       />

<Option onSelect={onSelect} onSelect2={onSelect2}  id={id} />


    </div >



  )
}

export default CodeEditor