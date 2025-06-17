

import React from 'react'
import './App.css'
import Landingpage from './Store/pages/Landingpage'
import { Routes, Route } from 'react-router-dom'
import Mobilepage from './Store/pages/Mobilepage'
import Frockpage from './Store/pages/Frockpage'
import Beautypage from './Store/pages/Beautypage'
import MobleSingle from './Singles/MobileSingle'
import MobileSingle from './Singles/MobileSingle'


const App = () => {
  return (
    <>
      <Routes> 
        
          <Route path='/' element ={<Landingpage/>}/>
          <Route path='/Mobiles' element={<Mobilepage/>}/>
          <Route path='/Frocks' element= {<Frockpage/>}/>
          <Route path='/BeautyDataitems' element = {<Beautypage/>}/>
          <Route path=':id' element={<MobileSingle/>}/>
      </Routes>

    </>
  )
}

export default App
