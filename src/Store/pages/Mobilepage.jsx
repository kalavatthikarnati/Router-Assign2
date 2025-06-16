import React from 'react'
import { mobileDataitem } from '../Data/MobilsData'
import Navigation from '../Components/Navigation'
import { Link } from 'react-router-dom'

const Mobilepage = () => {
  return (
    <>
    <Navigation/>
        <div className='pageSection'>
        {
            mobileDataitem.map((item)=>{
                return(
                    <div>
                        <Link to={`/Mobiles/${item.id}`}>
                        <div className='pageImg'></div>
                        <img src={item.image} alt=''/>
                        </Link>
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

export default Mobilepage
