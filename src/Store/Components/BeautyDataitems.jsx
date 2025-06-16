import React from 'react'

import {BeautyData} from '../Data/Beautyitems'
const BeautyDataitems = () => {
    const FirstFiveImages = BeautyData.slice(0,5)
  return (
     <>
       <h1>Beauty Items</h1>
            <div className='prosection'>
        {
          FirstFiveImages.map((items)=>{
            return(
              <div className='imgBox'>
                <img className='proimage' src={items.image}/>

              </div>
            )
          })
        }

      </div>
        
    </>

  )
}

export default BeautyDataitems
