import React from 'react'
import {mobileDataitem} from '../Store/Data/MobilsData'
import { useParams } from 'react-router-dom'

const MobileSingle = () => {
  const id = useParams()
  const product = mobileDataitem.find((item)=>item.id === id)
  console.log('display data',id)
  return (
     <div className='ind-page'>

      <div className='ind-image'>
        <img src={product.image} alt=''/>
      </div>

      <div className='ind-Catagory'>
        <h3> {product.Catagory}</h3>
      </div>

      <div className='ind-price'>
        <h3> {product.price}</h3>
      </div>
      


     </div>

   )
}

export default MobileSingle
