import React from 'react'
import Submit from './Submit';
import { baseUrl } from './url';

const Option = ({ onSelect, onSelect2,id }) => {


  return (
    <div className="lang flex items-center relative bottom-14 px-10 text-xs font-semibold justify-between ">
      <div className=''>
        <select className='bg-[#CED6E1] rounded-md mx-2 ' name="" id="" onChange={(e) => { onSelect(e.target.value); console.log(e.target.value) }}>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="javascript">JAVASCRIPT</option>
          <option value="typescript">TYPESCRIPT</option>

        </select>

        <select className='bg-[#CED6E1] rounded-md mx-2 ' name="" id="" onChange={(e) => onSelect2(e.target.value)}>
          <option value="vs-light">Light</option>
          <option value="vs-dark">Dark</option>
        </select>
      </div>

      <div className='flex  items-center justify-center gap-2'>
       {id && <span onClick={()=>navigator.clipboard.writeText(baseUrl +'/'+ id)
} className='text-[#797e8b] flex items-center justify-center cursor-pointer relative'><img  src="link.svg" alt="" /><span className='overflow-clip'>{id}</span></span>} 
      <Submit id={id}/>
      </div>


    </div>
  )
}

export default Option
