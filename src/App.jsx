import React, { useState } from 'react'
import Header from './Header'
import {Routes,Route} from 'react-router-dom'
import Homepage from './Homepage'
import Share from './Share'
const App = () => {


  
  return (
    <div className='contain bg-[url(Hero-Background-notecode.svg)] bg-contain w-full min-h-[100vh] flex items-center  flex-col gap-4 p-16 text-center '>
      
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route  path=':id' element={<Share/>}></Route>
      </Routes>

    </div>
  )
}

export default App
