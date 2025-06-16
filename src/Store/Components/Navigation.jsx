import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    
       <>
        <div className='navSection'>
       <div className='title'><h2>E-Mart</h2></div> 
     <div className='search'><input type='text' placeholder='Search here..'/></div>
    <div className='users'>
        <div className='User-Details'>
           SignIn/SignUp
        </div>
        <div className='Cart'></div>
    </div>
      
    </div>

    <div className='submenu'>
      <ul>
        <Link to='/Frocks'><li>Frocks</li></Link>
               
        <Link to='/BeautyDataitems'><li>BeautyDataitems</li></Link>

        <Link to='/Mobiles'><li>Mobiles</li></Link>
        
      </ul> 

    </div>
       </>
  )
}

export default Navigation
