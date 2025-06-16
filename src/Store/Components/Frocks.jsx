import React from 'react'
import { FrocksData } from '../Data/FrockData'
const Frocks = () => {
  const FirstFiveImages = FrocksData.slice(0,5)
  return (
    <>
    <h1>Frocks</h1>
      
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

export default Frocks
