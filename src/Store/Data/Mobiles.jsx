import React from 'react'
import {mobileDataitem} from '../Data/MobilsData'

const Mobiles = () => {
    const FirstFiveImages = mobileDataitem.slice(0,5)
  return (
     <>
       <h1>Mobiles</h1>
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

export default Mobiles
