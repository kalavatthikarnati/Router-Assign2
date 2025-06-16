import React from 'react'
import { FrocksData } from '../Data/FrockData'
import Navigation from '../Components/Navigation'
const Frockpage = () => {
  return (
    <>
    <Navigation/>
    <div className='pageSection'>
           {
               FrocksData.map((item)=>{
                   return(
                       <div>
                           <div className='pageImg'></div>
                           <img src={item.image}/>
                           <div className='proModel'>
                               {item.Product}
                               {item.price}
                           </div>
                       </div>
                   )
               })
           }
         
       </div>
        </>
  )
}

export default Frockpage
