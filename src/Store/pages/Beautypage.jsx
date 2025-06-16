import React from 'react'
import {BeautyData} from '../Data/Beautyitems'
import Navigation from '../Components/Navigation'


const Beautypage = () => {
  return (
    <> 
    <Navigation/>
    <div className='pageSection'>
               {
                   BeautyData.map((item)=>{
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

export default Beautypage
